import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Trisha Wangari" },
      { name: "description", content: "Invite Trisha Wangari to host, moderate, speak or collaborate. Send a brief and she'll respond within 3 business days." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="container-prose pt-20 pb-12">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.98] max-w-4xl">
          Let's begin a <span className="italic text-gold">conversation.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
          For speaking, hosting, moderation, podcast guesting, brand collaborations
          and consulting. I respond personally within three business days.
        </p>
      </section>

      <section className="container-prose pb-28 grid md:grid-cols-[1.3fr_1fr] gap-16">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Organisation" name="org" />
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Event / project" name="event" />
            <Field label="Date" name="date" type="text" placeholder="e.g. March 2026" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">What can I help with?</label>
            <div className="flex flex-wrap gap-3">
              {["Keynote", "MC", "Moderation", "Podcast", "Other"].map((s) => (
                <label key={s} className="px-4 py-2.5 border border-ink/25 text-sm cursor-pointer hover:border-gold transition-colors">
                  <input type="checkbox" name="service" value={s} className="mr-2 accent-gold" />
                  {s}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">Tell me about it</label>
            <textarea required rows={6} className="w-full px-5 py-4 border border-ink/25 bg-transparent text-sm focus:outline-none focus:border-gold transition-colors" />
          </div>
          <button className="btn-primary" disabled={sent}>{sent ? "Thank you — I'll be in touch" : "Send brief"}</button>
        </form>

        <aside className="space-y-10 md:pl-8 md:border-l border-border">
          <div>
            <p className="eyebrow">Direct</p>
            <a href="mailto:thrive360solutions@gmail.com" className="mt-4 flex items-center gap-3 font-display text-xl hover:text-gold transition-colors break-all">
              <Mail size={18} className="text-gold shrink-0" /> thrive360solutions@gmail.com
            </a>
            <p className="mt-3 text-sm text-muted-foreground">+971 58 522 4401</p>
            <a
              href="https://wa.me/971585224401?text=Hi%20Trisha%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
          <div>
            <p className="eyebrow">Partnerships</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For speaking, moderation and podcast sponsorship packages, see{" "}
              <a href="/services" className="text-ink underline underline-offset-4 hover:text-gold">Services</a>.
            </p>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <div className="mt-5 flex gap-4">
              {[
                { href: "https://youtube.com/@the360perspective", label: "The 360 Perspective", Icon: Youtube, hover: "hover:border-[#FF0000] hover:text-[#FF0000]" },
                { href: "https://youtube.com/@yourhealthkenya", label: "Your Health Kenya", Icon: Youtube, hover: "hover:border-[#FF0000] hover:text-[#FF0000]" },
                { href: "https://www.instagram.com/trisha_wangari", label: "Instagram", Icon: Instagram, hover: "hover:border-[#E1306C] hover:text-[#E1306C]" },
                { href: "https://www.linkedin.com/in/trisha-wangari", label: "LinkedIn", Icon: Linkedin, hover: "hover:border-[#0A66C2] hover:text-[#0A66C2]" },
              ].map(({ href, label, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex flex-col items-center gap-2 group"
                >
                  <span className={`p-3 border border-ink/20 transition-colors ${hover}`}>
                    <Icon size={18} />
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground text-center leading-tight">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Based in</p>
            <p className="mt-4 font-display text-2xl">Dubai, UAE</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={type === "email" || name === "name"}
        className="w-full px-5 py-4 border border-ink/25 bg-transparent text-sm focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
