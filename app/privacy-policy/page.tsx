import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Xenoscapers",
  description:
    "Learn how Xenoscapers collects, uses, and protects your information. Includes your choices and rights under California law.",
  alternates: { canonical: "https://xenoscapers.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="py-16">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 text-sm">Effective: October 18, 2025</p>

          <div className="mt-8 max-w-none text-base leading-relaxed sm:text-[1.0625rem] space-y-6">
            <p>
              This Privacy Policy explains how <strong>Xenoscapers</strong> (&quot;Xenoscapers,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) collects, uses, discloses, and safeguards personal information when you visit our website,
              contact us, or use our landscaping and hardscaping services.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Information We Collect</h2>
            <p>We collect information that you provide directly to us and information collected automatically.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact and identifiers</strong>: name, phone number, email address, and any details you
                share in forms or messages.
              </li>
              <li>
                <strong>Project details</strong>: service interests, property type, budget, materials, and notes
                needed to provide quotes and services.
              </li>
              <li>
                <strong>Commercial information</strong>: quotes, bookings, invoices, and records of services.
              </li>
              <li>
                <strong>Usage and device data</strong>: IP address, browser type, pages viewed, referring pages,
                and general geolocation derived from your IP. We may use cookies or similar technologies to
                support site functionality and analytics.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and improve our website and services.</li>
              <li>Respond to inquiries, schedule consultations, and deliver quotes.</li>
              <li>Send service updates and administrative messages.</li>
              <li>Personalize content and measure site performance.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">How We Share Information</h2>
            <p>
              We do not sell personal information. We may share information with trusted service providers who
              help us operate our business (for example: hosting, analytics, communication tools, payment and
              invoicing, or customer relationship management). These providers are authorized to process your
              information only as necessary to provide services to us. We may also share information to comply
              with law, protect rights and safety, or in connection with a business transaction.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Cookies and Analytics</h2>
            <p>
              Cookies and similar technologies help our site function and allow us to understand traffic and
              usage. You can adjust cookie preferences through your browser settings. Disabling some cookies may
              affect site functionality.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Data Retention</h2>
            <p>
              We retain personal information only as long as needed for the purposes described above, to comply
              with legal, accounting, or reporting requirements, and to resolve disputes.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Your Privacy Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Access/Update</strong>: You may request access to or correction of your personal
                information.
              </li>
              <li>
                <strong>Marketing</strong>: You can opt out of marketing communications at any time by following
                unsubscribe prompts or contacting us.
              </li>
              <li>
                <strong>Cookies</strong>: Manage browser settings to refuse or delete cookies.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed to protect
              personal information. However, no method of transmission or storage is completely secure.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Children’s Privacy</h2>
            <p>
              Our services are not directed to children under 13, and we do not knowingly collect personal
              information from children under 13. If you believe a child has provided us information, please
              contact us to request deletion.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">California Privacy Notice (CCPA/CPRA)</h2>
            <p>
              If you are a California resident, you have the following rights subject to certain exceptions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Right to know/access</strong> the categories and specific pieces of personal information
                we collected about you, the sources, purposes, and categories of third parties with whom we
                shared it.
              </li>
              <li>
                <strong>Right to delete</strong> personal information we collected from you.
              </li>
              <li>
                <strong>Right to correct</strong> inaccurate personal information.
              </li>
              <li>
                <strong>Right to opt out of sale or sharing</strong>: We do not sell or share personal
                information as defined by California law.
              </li>
              <li>
                <strong>Right to non‑discrimination</strong> for exercising your privacy rights.
              </li>
            </ul>
            <p>
              To exercise your rights, please email us at
              {" "}
              <a className="underline" href="mailto:xenoscapers@gmail.com">xenoscapers@gmail.com</a>
              {" "}
              or call
              {" "}
              <a className="underline" href="tel:+13105646057">+1 (310) 564‑6057</a>. We may need to verify your
              identity to process your request. You may also designate an authorized agent.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Third‑Party Links</h2>
            <p>
              Our website may link to third‑party sites. We are not responsible for the privacy practices of
              those sites. We encourage you to review their policies.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The “Effective” date above indicates when this
              policy was last revised. Your continued use of our site or services after changes become effective
              signifies your acceptance of the updated policy.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Contact Us</h2>
            <p>
              For questions or requests about this Privacy Policy, contact us at
              {" "}
              <a className="underline" href="mailto:xenoscapers@gmail.com">xenoscapers@gmail.com</a>
              {" "}
              or
              {" "}
              <a className="underline" href="tel:+13105646057">+1 (310) 564‑6057</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


