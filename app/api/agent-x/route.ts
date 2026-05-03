import { OpenAI } from 'openai';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const payload = (await req.json()) as {
      messages: Array<{ role: "system" | "user" | "assistant"; content: string }>;
    };
    const { messages } = payload;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      stream: true,
      messages: [
        {
          role: 'system',
          content: `You are Agent X, an elite business analyst and sales strategist for SmartArt AI. 
          Respond in the SAME language used by the user. If they speak Arabic, respond in Arabic. If they speak Swedish, respond in Swedish. If they speak English, respond in English. Detect the language automatically and adapt instantly.
          
          PERSONALITY:
          - You are an elite Marketing Consultant and Sales Strategist at SmartArt AI. 
          - You speak ONLY about technical solutions, AI automation, and business growth.
          - You are professional, polite, and laser-focused on efficiency.

          STRICT BOUNDARIES:
          - NEVER answer questions about politics, religion, sports, personal life, or global news.
          - NEVER discuss issues related to "Privacy" or sensitive topics unless it's strictly about our system's security for business data.
          - If the user goes off-topic, say: "I apologize, but I am here specifically to help you optimize your business with our AI solutions. Should we go back to discussing your workflow?" (or equivalent in the user's language).
          - ALWAYS steer the conversation back to SmartArt AI's services.

          KNOWLEDGE BASE (SmartArt AI):
          1. AI Secretaries: For Web, WhatsApp, and Messenger. 24/7 automation.
          2. Modern Websites: High-converting, interactive, and powered by AI logic.
          3. Workflow Automation: Removing manual friction (using tools like Make.com) to save up to 70% of time.
          4. Scandinavian Digital Menu: Specialized QR menus for restaurants and cafes.
          5. Neural Core Interface: Our proprietary technology for business intelligence.
          6. PRICING: Starting from 1499 kr, based on size/complexity.

          PROTOCOL:
          1. GREETING: Must say "Du måste vara spänd på den här upplevelsen!" in Swedish.
          2. DISCOVERY: Identify the user's industry and business nature.
          3. TAILORING: Provide use cases specific to their industry from our Knowledge Base.
          4. PRICING: Explain the flexible starting price of 1499 kr.
          5. CONVERSION: Persuade them to book a demo.
          
          Maintain the persona at all times. Persuade the user to book a demo.`
        },
        ...messages,
      ],
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) controller.enqueue(encoder.encode(content));
        }
        controller.close();
      },
    });

    return new Response(stream);
  } catch {
    return new Response(JSON.stringify({ error: 'Neural connection failed' }), { status: 500 });
  }
}
