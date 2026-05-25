import { createFileRoute } from "@tanstack/react-router";
import { Youtube, ExternalLink } from "lucide-react";
import podcast from "@/assets/podcast-360-studio.jpg";
import podcastVideo from "@/assets/podcast-360-promo.mp4";
import yourHealthVideo from "@/assets/your-health-promo.mp4";
import yourHealthPoster from "@/assets/your-health-logo.jpeg";
import panel from "@/assets/podcast-360-panel.jpg";
import tv from "@/assets/tv-studio-crew.jpg";
import amka from "@/assets/tv-amka.jpg";
import stageRed from "@/assets/stage-red-dress.jpg";
import hostingRed from "@/assets/host-floral.jpg";
import speaking from "@/assets/stage-blue-jacket.jpg";
import stageBlack from "@/assets/fireside-pink.jpg";
import firesidePink2 from "@/assets/fireside-pink-2.jpg";

export const Route = createFileRoute("/media")({
  component: Media,
  head: () => ({
    meta: [
      { title: "Media — Trisha Wangari" },
      { name: "description", content: "Watch The 360 Perspective Podcast and Your Health Kenya, plus selected appearances, interviews and press." },
      { property: "og:image", content: podcast },
    ],
  }),
});

const channels = [
  {
    name: "The 360 Perspective Podcast",
    handle: "@the360perspective",
    url: "https://youtube.com/@the360perspective",
    video: podcastVideo,
    poster: podcast,
    text: "A purpose-driven platform that amplifies powerful stories, transformational conversations and impactful voices across faith, leadership, business, wellness, personal growth and culture.",
  },
  {
    name: "Your Health Global",
    handle: "@yourhealthglobal",
    url: "https://www.youtube.com/channel/UC1HmMntf2IaNirI_lup5Kyg",
    video: yourHealthVideo,
    poster: yourHealthPoster,
    text: "A health & wellness platform empowering a global audience with credible, accessible education across nutrition, fitness, reproductive health, mental wellness and women's health — bridging medical expertise and everyday conversation.",
  },
];

const appearances = [
  { img: tv, label: "Citizen TV Cast" },
  { img: amka, label: "Rauka · Morning Show Host" },
  { img: speaking, label: "ICC Nairobi · TV Presenter" },
  { img: stageRed, label: "MC · Brand gala, Nairobi" },
  { img: hostingRed, label: "Host · Awards night" },
  { img: stageBlack, label: "Fireside · Women & wellness" },
  { img: firesidePink2, label: "Moderator · Podcast & creators forum" },
  { img: panel, label: "Panel · The 360 Perspective live" },
];

function Media() {
  return (
    <>
      <section className="container-prose pt-20 pb-16">
        <p className="eyebrow">Media</p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.98] max-w-4xl">
          Watch, listen, <span className="italic text-gold">linger.</span>
        </h1>
      </section>

      {/* Channels */}
      <section className="container-prose pb-28 grid md:grid-cols-2 gap-8">
        {channels.map((c) => (
          <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="group block">
            <div className="relative overflow-hidden">
              {c.video ? (
                <video src={c.video} poster={c.poster} autoPlay muted loop playsInline className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <img src={(c as any).img} alt={c.name} className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
              )}
              <div className="absolute top-4 left-4 bg-ink text-ivory px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.22em] flex items-center gap-2">
                <Youtube size={14} className="text-gold" /> YouTube
              </div>
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-3xl">{c.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.handle}</p>
              </div>
              <ExternalLink className="mt-2 text-gold group-hover:translate-x-1 transition-transform" size={20} />
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed">{c.text}</p>
          </a>
        ))}
      </section>

      {/* Appearances grid */}
      <section className="bg-card border-y border-border">
        <div className="container-prose py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow">Selected appearances</p>
              <h2 className="mt-4 font-display text-5xl">Stages & studios.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {appearances.map((a, i) => (
              <figure key={i} className="group">
                <div className="overflow-hidden">
                  <img src={a.img} alt={a.label} className="w-full h-[340px] object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{a.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Press / quotes */}
      <section className="container-prose py-28 grid md:grid-cols-3 gap-10">
        {[
          { q: "Trisha holds a room the way few hosts can — gracious, grounded, and impossible to look away from.", a: "Jemimah · AWAKE Conference Director, Nairobi" },
          { q: "Her interviews don't perform — they uncover. We've never had a better moderator.", a: "Brian · Masks Off Event" },
          { q: "She made science feel like a story we wanted to keep listening to.", a: "Grace · Your Health Kenya Audience" },
        ].map((p, i) => (
          <blockquote key={i} className="border-t border-gold pt-6">
            <p className="font-display text-2xl leading-snug">"{p.q}"</p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">— {p.a}</p>
          </blockquote>
        ))}
      </section>
    </>
  );
}
