import Link from "next/link";

export default function NotFound() {
  return (
    <main className="app-stage grid min-h-screen place-items-center px-6 text-center text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/8 p-8 backdrop-blur-xl">
        <p className="text-sm font-black uppercase text-[#ff7ab8]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black text-balance md:text-5xl">
          Sidan finns inte.
        </h1>
        <p className="mt-4 text-base leading-7 text-white/65">
          Gå tillbaka till dagens TikTok-produkt.
        </p>
        <Link className="primary-action mt-8 inline-flex" href="/">
          Till startsidan
        </Link>
      </div>
    </main>
  );
}
