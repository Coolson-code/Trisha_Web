import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import speaking from "@/assets/speaking-redefining.jpg";
import moderating from "@/assets/moderating-panel.jpg";
import stageRed from "@/assets/stage-red-profile.jpg";
import stageBlack from "@/assets/stage-black-dress.jpg";
import podcast from "@/assets/podcast-360-stage.jpg";
import portrait from "@/assets/portrait-red-pants.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Trisha Wangari" },
      { name: "description", content: "Speaking, moderation and podcast partnerships with Trisha Wangari — Dubai-based host and storyteller." },
      { property: "og:title", content: "Services — Trisha Wangari" },
      { property: "og:description", content: "Speaking & moderation and The 360 Perspective Podcast partnerships." },
      { property: "og:image", content: speaking },
    ],
  }),
});

const speakingServices = [
  { title: "Keynote Speaking", text: "Talks on storytelling, womanhood, health literacy, faith and identity — written for the room, not from a template." },
  { title: "Conference MC", text: "Holding the arc of a day with warmth, pace and presence. Galas, summits, launches, conventions." },
  { title: "Panel Moderation", text: "Research-led moderation that surfaces real insight without performing it. Made for serious conversations." },
  { title: "Fireside & Interviews", text: "Long-form, on-stage interviews with founders, ministers, artists and clinicians." },
];

const topics = [
  "Media, Storytelling & Creating Impact Through Content",
  "Women's Health, Healing & Breaking Silent Battles",
  "Faith, Purpose & Leading with Influence in the Digital Age",
  "Personal Branding, Clarity & Meaningful Leadership",
];

const audiences = ["Healthcare & NGO", "Faith & Church", "Brand & Tech", "Government & Policy", "Media & Creative"];

type Pkg = { name: string; ideal?: string; includes: string[]; platforms?: string; price: string; featured?: boolean };

const podcastPkgs: Pkg[] = [
  {
    name: "Standard Guest Feature",
    ideal: "Entrepreneurs · Creators · Coaches · Authors",
    includes: ["Hosted interview", "Multi-camera recording", "Edited episode + audio enhancement", "Distribution", "2 Reels", "Thumbnail design"],
    price: "$410",
  },
  {
    name: "Premium Brand Story",
    ideal: "CEOs · Brands · Corporate Leaders",
    includes: ["Everything in Standard", "Cinematic editing", "5 Reels", "BTS photos", "Promotional campaign", "Priority publishing"],
    price: "$680",
    featured: true,
  },
  {
    name: "Executive Visibility",
    ideal: "Luxury brands · Investors · Executives",
    includes: ["2 podcast episodes", "10+ Reels", "Media visibility campaign", "Photography", "Sponsored placement", "Strategy consultation"],
    price: "$1,770",
  },
];

const addOns = [
  "Additional Reel — $70",
  "Express 48-hour delivery — $135",
  "Professional photography — $165",
  "Podcast strategy session — $205",
  "Social media management — custom pricing",
];

function Services() {
  return (
    <>
      {/* HERO */}
      <section className="container-prose pt-20 pb-12">
        <p className="eyebrow">Services</p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.98] max-w-4xl">
          The right voice for the <span className="italic text-gold">room.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Speaking, moderation and podcast partnerships — from Dubai to
          stages across the UAE, Africa and beyond.
        </p>
      </section>

      <section className="container-prose grid md:grid-cols-3 gap-4 pb-24">
        <img src={speaking} alt="Trisha delivering a keynote" className="w-full h-[420px] object-cover md:col-span-2" />
        <img src={moderating} alt="Trisha moderating a podcast panel" className="w-full h-[420px] object-cover" />
      </section>

      {/* SPEAKING & MODERATION */}
      <section className="bg-ink text-ivory">
        <div className="container-prose py-24">
          <p className="eyebrow !text-gold">01 · Speaking & Moderation</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Four ways to invite me in.</h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-12">
            {speakingServices.map((s, i) => (
              <div key={s.title} className="border-t border-ivory/15 pt-6">
                <p className="text-xs text-gold tracking-[0.25em]">0{i + 1}</p>
                <p className="mt-3 font-display text-3xl">{s.title}</p>
                <p className="mt-3 text-ivory/70 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-28 grid md:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow">Signature topics</p>
          <h3 className="mt-4 font-display text-4xl md:text-5xl">What I love to talk about.</h3>
          <ul className="mt-8 space-y-4">
            {topics.map((t) => (
              <li key={t} className="flex gap-3 items-start text-foreground/85">
                <Check size={18} className="text-gold mt-1 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Audiences served</p>
          <h3 className="mt-4 font-display text-4xl md:text-5xl">Rooms I'm at home in.</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <span key={a} className="px-5 py-3 border border-ink/20 text-sm uppercase tracking-[0.16em]">{a}</span>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3">
            <img src={stageRed} alt="Trisha on stage in red" className="h-60 w-full object-cover" />
            <img src={stageBlack} alt="Trisha on stage" className="h-60 w-full object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS HERO */}
      <section className="container-prose pb-20 grid md:grid-cols-[1.2fr_1fr] gap-10 items-stretch">
        <img src={podcast} alt="Trisha hosting The 360 Perspective Podcast" className="w-full h-[460px] object-cover" />
        <img src={portrait} alt="Trisha Wangari portrait" className="w-full h-[460px] object-cover" />
      </section>

      <PackageBlock
        eyebrow="02 · The 360 Perspective Podcast"
        title="Guest features & sponsorship."
        blurb="A premium storytelling and brand visibility platform for entrepreneurs, executives, creatives and changemakers."
        packages={podcastPkgs}
      />

      {/* ADD-ONS */}
      <section className="container-prose pb-28">
        <div className="border-y border-border py-12 grid md:grid-cols-[1fr_2fr] gap-10">
          <div>
            <p className="eyebrow">Optional add-ons</p>
            <h3 className="mt-3 font-display text-3xl">Extend any package.</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-foreground/85">
            {addOns.map((a) => (
              <li key={a} className="flex gap-3 items-start">
                <Check size={16} className="text-gold mt-1.5 shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-sm text-muted-foreground italic">
          Prices are flexible depending on your project — reach out for a tailored proposal.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ivory">
        <div className="container-prose py-24 text-center">
          <p className="eyebrow !text-gold">Let's build it</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Tell me what you're trying to say.</h2>
          <p className="mt-6 text-ivory/70 max-w-xl mx-auto">Share your brief and I'll come back with a recommended package — usually within 3 business days.</p>
          <Link to="/contact" className="mt-10 inline-flex btn-primary">Start a conversation <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}

function PackageBlock({ eyebrow, title, blurb, packages }: { eyebrow: string; title: string; blurb: string; packages: Pkg[] }) {
  return (
    <section className="container-prose py-24">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 mb-14">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">{title}</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed text-lg md:pt-3">{blurb}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <article
            key={p.name}
            className={`p-8 border flex flex-col ${
              p.featured ? "bg-ink text-ivory border-ink" : "bg-background border-border"
            }`}
          >
            <p className={`text-xs uppercase tracking-[0.22em] ${p.featured ? "text-gold" : "text-muted-foreground"}`}>
              {p.platforms ?? "Sponsorship"}
            </p>
            <p className="mt-4 font-display text-3xl leading-tight">{p.name}</p>
            {p.ideal && (
              <p className={`mt-2 text-xs ${p.featured ? "text-ivory/60" : "text-muted-foreground"}`}>{p.ideal}</p>
            )}
            <ul className={`mt-6 space-y-3 text-sm leading-relaxed ${p.featured ? "text-ivory/85" : "text-foreground/85"} flex-1`}>
              {p.includes.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check size={14} className="text-gold mt-1 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className={`mt-8 pt-6 border-t ${p.featured ? "border-ivory/15" : "border-border"}`}>
              <p className={`font-display text-2xl ${p.featured ? "text-gold" : "text-ink"}`}>{p.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
