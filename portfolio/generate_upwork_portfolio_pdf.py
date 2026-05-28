from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "portfolio"
OUTPUT_FILE = OUTPUT_DIR / "upwork-smartartai-website-portfolio.pdf"


def bullet_list(items: list[str], style: ParagraphStyle) -> ListFlowable:
    return ListFlowable(
        [ListItem(Paragraph(item, style), leftIndent=0) for item in items],
        bulletType="bullet",
        leftIndent=14,
        bulletFontSize=7,
        spaceBefore=2,
        spaceAfter=4,
    )


def footer(canvas, doc) -> None:
    page_width, _ = A4
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#D9DDE7"))
    canvas.setLineWidth(0.45)
    canvas.line(doc.leftMargin, 14 * mm, page_width - doc.rightMargin, 14 * mm)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#707887"))
    canvas.drawString(doc.leftMargin, 9.5 * mm, "smartartai.se portfolio case study")
    canvas.drawRightString(page_width - doc.rightMargin, 9.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf() -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT_FILE),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=20 * mm,
        title="SmartArt AI Website Portfolio",
        author="Codex",
        subject="Upwork portfolio case study for smartartai.se",
    )

    page_width, _ = A4
    usable_width = page_width - doc.leftMargin - doc.rightMargin
    styles = getSampleStyleSheet()

    title = ParagraphStyle(
        "Title",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=25,
        leading=29,
        textColor=colors.HexColor("#111827"),
        alignment=TA_LEFT,
        spaceAfter=8,
    )
    subtitle = ParagraphStyle(
        "Subtitle",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=11,
        leading=16,
        textColor=colors.HexColor("#596274"),
        spaceAfter=10,
    )
    section = ParagraphStyle(
        "Section",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=14,
        leading=18,
        textColor=colors.HexColor("#182033"),
        spaceAfter=8,
        spaceBefore=4,
    )
    body = ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=10,
        leading=15,
        textColor=colors.HexColor("#374151"),
        spaceAfter=8,
    )
    bullet = ParagraphStyle(
        "Bullet",
        parent=body,
        spaceAfter=4,
    )
    small_label = ParagraphStyle(
        "SmallLabel",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=8,
        leading=10,
        textColor=colors.HexColor("#5B74FF"),
        alignment=TA_CENTER,
    )
    small_text = ParagraphStyle(
        "SmallText",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#556070"),
        alignment=TA_CENTER,
    )

    story = []

    story.append(Paragraph("SmartArt AI Website", title))
    story.append(
        Paragraph(
            "A premium multilingual marketing website for SmartArt AI, built to present AI automation services, capture leads, and convert visitors into demo requests.",
            subtitle,
        )
    )

    quick_facts = Table(
        [
            [
                Paragraph("Live Domain", small_label),
                Paragraph("Website Type", small_label),
                Paragraph("Primary Goal", small_label),
            ],
            [
                Paragraph("smartartai.se", small_text),
                Paragraph("Service website / lead generation platform", small_text),
                Paragraph("Showcase services and generate qualified inquiries", small_text),
            ],
        ],
        colWidths=[usable_width / 3.0] * 3,
    )
    quick_facts.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#EEF3FF")),
                ("BACKGROUND", (0, 1), (-1, 1), colors.HexColor("#FAFBFF")),
                ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#D6DDF2")),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#E4E9F7")),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.append(quick_facts)
    story.append(Spacer(1, 10))

    story.append(Paragraph("Project Overview", section))
    story.append(
        Paragraph(
            "smartartai.se is the public-facing website for SmartArt AI. The site is designed as a high-impact digital sales layer for an AI automation business, with strong emphasis on premium presentation, motion-driven storytelling, and frictionless lead capture.",
            body,
        )
    )
    story.append(
        Paragraph(
            "The homepage communicates the value proposition clearly: intelligent websites, AI assistants, and workflow automation built for Swedish businesses. The experience combines a dark visual identity, glassmorphism accents, animated typography, and a dynamic 3D hero background to create a modern, high-end brand impression.",
            body,
        )
    )
    story.append(Spacer(1, 6))

    story.append(Paragraph("Website Purpose", section))
    story.append(
        bullet_list(
            [
                "Present SmartArt AI as a premium automation and AI solutions provider.",
                "Explain core service offers such as modern websites, AI assistants, and workflow automation.",
                "Convert visitors into demo requests or direct inquiries through modal-based forms and clear calls to action.",
                "Support content marketing through a localized blog section.",
            ],
            bullet,
        )
    )
    story.append(Spacer(1, 6))

    story.append(Paragraph("Core UX Features", section))
    story.append(
        bullet_list(
            [
                "Interactive hero section with animated text and a client-only 3D canvas background.",
                "Service showcase cards with layered modal flows for discovery, qualification, and lead capture.",
                "Agent X demo experience connected to an OpenAI-powered API route.",
                "Localized Swedish and English content using locale-aware routing.",
                "Dedicated blog listing and article pages for SEO and authority building.",
                "Responsive navigation with mobile menu behavior and language switching.",
            ],
            bullet,
        )
    )
    story.append(PageBreak())

    story.append(Paragraph("Design & Frontend Implementation", section))
    story.append(
        Paragraph(
            "The frontend is built around a premium dark UI language. The site uses custom theme tokens, gradient accents, subtle glass panels, strong contrast typography, and restrained motion to keep the interface feeling polished without becoming noisy.",
            body,
        )
    )
    story.append(
        bullet_list(
            [
                "Next.js App Router for page structure and route handling.",
                "TypeScript for type-safe component and API development.",
                "Tailwind CSS v4 with custom theme variables in global styles.",
                "Framer Motion for headline animation, transitions, hover states, counters, and modal choreography.",
                "React Three Fiber and Three.js for the animated hero canvas.",
                "Google fonts via `next/font` using Plus Jakarta Sans and Inter.",
            ],
            bullet,
        )
    )
    story.append(Spacer(1, 6))

    story.append(Paragraph("Backend & Interactive Logic", section))
    story.append(
        Paragraph(
            "Although the project is primarily a marketing website, it includes meaningful backend functionality that supports real business interaction instead of serving as a static brochure.",
            body,
        )
    )
    story.append(
        bullet_list(
            [
                "An `agent-x` API route integrates with OpenAI using the `openai` SDK and streams live responses from `gpt-4o`.",
                "A `contact` API route uses Nodemailer with SMTP credentials stored in environment variables.",
                "The contact flow sends internal inquiry emails and can also trigger automatic customer replies.",
                "Secrets are kept server-side through environment variables rather than exposed in client code.",
            ],
            bullet,
        )
    )
    story.append(Spacer(1, 6))

    story.append(Paragraph("Localization & SEO Foundations", section))
    story.append(
        bullet_list(
            [
                "Locale handling is implemented with `next-intl` and supports Swedish and English.",
                "The root layout includes metadata for title, description, Open Graph, Twitter cards, and robots directives.",
                "The domain `https://smartartai.se` is defined as the metadata base for canonical social sharing and SEO context.",
                "The blog structure adds long-form discoverable content to support search visibility and topical authority.",
            ],
            bullet,
        )
    )
    story.append(Spacer(1, 6))

    story.append(Paragraph("Technology Stack", section))
    tech_table = Table(
        [
            ["Frontend Framework", "Next.js App Router"],
            ["Language", "TypeScript"],
            ["Styling", "Tailwind CSS v4 + custom global theme variables"],
            ["Animation", "Framer Motion"],
            ["3D / Visual Layer", "React Three Fiber + Three.js"],
            ["Internationalization", "next-intl"],
            ["AI Integration", "OpenAI SDK (`gpt-4o`)"],
            ["Email Handling", "Nodemailer via SMTP"],
            ["Fonts", "`next/font` with Plus Jakarta Sans and Inter"],
            ["Deployment Target", "Vercel-oriented Next.js architecture"],
        ],
        colWidths=[47 * mm, usable_width - (47 * mm)],
    )
    tech_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FAFBFF")),
                ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#D6DDF2")),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#E4E9F7")),
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
                ("FONTSIZE", (0, 0), (-1, -1), 9),
                ("LEADING", (0, 0), (-1, -1), 13),
                ("TEXTCOLOR", (0, 0), (-1, -1), colors.HexColor("#334155")),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    story.append(tech_table)
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    return OUTPUT_FILE


if __name__ == "__main__":
    output = build_pdf()
    print(output)
