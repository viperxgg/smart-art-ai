#!/usr/bin/env node
/**
 * render-comparison-image — deterministic Elin comparison thumbnail renderer.
 *
 * One JSON spec -> a single branded 1200x750 webp:
 *   split 4-part background (two opposite brand colours), Elin host photo in
 *   the centre "presenting", product A on the right, product B on the left,
 *   "eller" badge, and the title. Same theme every time.
 *
 * Renders an HTML template with headless Chrome, then converts PNG -> webp
 * with ffmpeg. No AI, so real product photos stay accurate.
 *
 * Usage: node automation/render-comparison-image.mjs <spec.json>
 * Spec: { title, colorA, colorB, elin, a:{img,brand}, b:{img,brand}, out }
 *   - img/elin/out are absolute paths (img/elin read at render time via file://)
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const spec = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const CHROME =
  process.env.CHROME_BIN ||
  "C:/Program Files/Google/Chrome/Application/chrome.exe";

const fileUrl = (p) => "file:///" + path.resolve(p).replace(/\\/g, "/");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

// colorA = left/product B side tone, colorB = right/product A side tone.
const colorA = spec.colorA || "#F4DBE2";
const colorB = spec.colorB || "#D3E7E4";

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;box-sizing:border-box}
  html,body{width:1200px;height:750px;overflow:hidden;font-family:Georgia,'Times New Roman',serif}
  .bg{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr}
  .bg>div{position:relative}
  .qa{background:linear-gradient(135deg,${colorA},${shade(colorA, -14)})}
  .qb{background:linear-gradient(225deg,${colorB},${shade(colorB, -14)})}
  .divV{position:absolute;top:0;bottom:0;left:50%;width:3px;background:rgba(255,255,255,.65);transform:translateX(-50%)}
  .divH{position:absolute;left:0;right:0;top:50%;height:3px;background:rgba(255,255,255,.5)}
  .top{position:absolute;top:30px;left:0;right:0;text-align:center;z-index:6}
  .kicker{display:inline-block;background:#fff;border-radius:999px;padding:9px 24px;color:#B983A6;font-weight:800;letter-spacing:3px;font-size:15px;box-shadow:0 10px 26px rgba(91,52,65,.14);font-family:Arial,sans-serif}
  .title{margin-top:16px;font-size:44px;font-weight:800;color:#3E2F3A;padding:0 200px;line-height:1.1;text-shadow:0 2px 14px rgba(255,255,255,.7)}
  .card{position:absolute;top:210px;width:400px;height:380px;background:#fff;border-radius:34px;box-shadow:0 26px 60px rgba(91,52,65,.16);display:flex;align-items:center;justify-content:center;padding:26px;z-index:3}
  .card.left{left:56px}.card.right{right:56px}
  .card img{max-width:100%;max-height:100%;object-fit:contain}
  .brand{position:absolute;top:610px;width:400px;text-align:center;z-index:4;font-weight:800;font-size:30px;font-family:Arial,sans-serif}
  .brand.left{left:56px;color:#8c3f57}.brand.right{right:56px;color:#2f6f68}
  .center{position:absolute;left:50%;top:300px;transform:translateX(-50%);z-index:7;text-align:center}
  .elin{width:150px;height:150px;border-radius:50%;overflow:hidden;border:6px solid #fff;box-shadow:0 16px 36px rgba(91,52,65,.22);margin:0 auto;background:#fff}
  .elin img{width:100%;height:100%;object-fit:cover;object-position:center 18%}
  .eller{margin-top:12px;background:#3E2F3A;color:#fff;border-radius:999px;padding:8px 26px;font-weight:800;font-size:26px;display:inline-block;font-family:Arial,sans-serif}
</style></head><body>
  <div class="bg"><div class="qa"><div class="divH"></div></div><div class="qb"><div class="divH"></div></div></div>
  <div class="divV"></div>
  <div class="top"><span class="kicker">ELINS VAL · JÄMFÖRELSE</span><div class="title">${esc(spec.title)}</div></div>
  <div class="card right"><img src="${fileUrl(spec.a.img)}"></div>
  <div class="brand right">${esc(spec.a.brand)}</div>
  <div class="card left"><img src="${fileUrl(spec.b.img)}"></div>
  <div class="brand left">${esc(spec.b.brand)}</div>
  <div class="center"><div class="elin"><img src="${fileUrl(spec.elin)}"></div><div class="eller">eller</div></div>
</body></html>`;

function shade(hex, amt) {
  const m = hex.replace("#", "");
  const n = parseInt(m.length === 3 ? m.replace(/(.)/g, "$1$1") : m, 16);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const r = clamp(((n >> 16) & 255) + amt);
  const g = clamp(((n >> 8) & 255) + amt);
  const b = clamp((n & 255) + amt);
  return `rgb(${r},${g},${b})`;
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cmpimg-"));
const htmlPath = path.join(tmp, "card.html");
const pngPath = path.join(tmp, "out.png");
fs.writeFileSync(htmlPath, html);

execFileSync(
  CHROME,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1200,750",
    `--screenshot=${pngPath}`,
    fileUrl(htmlPath),
  ],
  { stdio: "ignore" },
);

fs.mkdirSync(path.dirname(spec.out), { recursive: true });
execFileSync(
  "ffmpeg",
  ["-y", "-loglevel", "error", "-i", pngPath, "-c:v", "libwebp", "-q:v", "90", spec.out],
  { stdio: "inherit" },
);
fs.rmSync(tmp, { recursive: true, force: true });
console.log("rendered:", spec.out);
