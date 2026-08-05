import { NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const POSTME_INTAKE_URL =
  process.env.POSTME_INTAKE_URL ??
  "https://www.postme.dev/intake/af1a7ba1b5a128f48b705d1627b2e1b7";

export async function POST(req: Request) {
  try {
    const { name, email, phone, pageUrl, referrer } = await req.json();

    await convex.mutation(api.leads.mutations.submit, {
      name,
      email,
      phone,
      ...(pageUrl != null && { pageUrl }),
      ...(referrer != null && { referrer }),
    });

    // Best-effort: forward lead data to PostMe intake
    try {
      const intakeResponse = await fetch(POSTME_INTAKE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          pageUrl: pageUrl ?? "",
          referrer: referrer ?? "",
          _replyto: email,
          _subject: "New lead · xenoscapers.com",
        }),
      });
      if (!intakeResponse.ok) {
        const errorText = await intakeResponse.text().catch(() => "<no body>");
        console.error(
          "PostMe intake responded with non-OK status:",
          intakeResponse.status,
          errorText
        );
      }
    } catch (postmeErr) {
      console.error("Failed to POST to PostMe intake:", postmeErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}