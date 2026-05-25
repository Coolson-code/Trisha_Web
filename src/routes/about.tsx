import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait-red-pants.jpg";
import tv from "@/assets/tv-studio-crew.jpg";
import stage from "@/assets/stage-red-dress.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Trisha Wangari" },
      { name: "description", content: "Kenyan host, moderator and health storyteller. A decade of work across television, stage and digital media." },
      { property: "og:image", content: portrait },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="container-prose pt-20 pb-16">
        <p className="eyebrow">About</p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.98] max-w-4xl">
          I tell stories that <span className="italic text-gold">slow people down.</span>
        </h1>
      </section>

      <section className="container-prose grid md:grid-cols-[1fr_1.3fr] gap-14 pb-28">
        <img src={portrait} alt="Trisha Wangari portrait" className="w-full h-[640px] object-cover" />
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 md:pt-8">
          <p>
            I'm Trisha — a Dubai-based content creator, media entrepreneur and
            host of <em>The 360 Perspective Podcast</em>. I hold a Masters in
            Public Health from the University of Sheffield and a Postgraduate
            in Mass Communications, and I've built my career at the meeting
            point of journalism, health & wellness and brand storytelling.
          </p>
          <p>
            I didn't plan to become the person who holds the room — it happened
            one conversation at a time. I started in public health, studying
            how communities heal, and how stories
            change behaviour. Then I stepped in front of a camera at{" "}
            <strong>Citizen TV</strong>'s morning show <em>Rauka</em>, and
            something clicked. The most powerful public health tool I had
            wasn't data — it was my voice.
          </p>
          <p>
            Over the last decade, I've hosted nationally broadcast television shows,
            moderated panels for 1,200+ global leaders, built digital health
            platforms from zero, and created a podcast movement that brought
            700 people into a room for a conversation that mattered. From
            Sheffield to Nairobi to Dubai, I've learned that whether it's a
            boardroom, a conference stage or a microphone, people need someone
            who can make the complex feel human.
          </p>
          <p>
            That's what I do. I hold space. I move rooms. I tell the stories
            that change things — and what I love most is the moment a guest
            exhales, when the question was good enough, and the room was safe
            enough, that something true finally got said.
          </p>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="container-prose py-24 grid md:grid-cols-3 gap-12">
          {[
            { n: "10+", l: "Years on stage & screen" },
            { n: "15K+", l: "Community across IG · YT · TikTok" },
            { n: "2", l: "Podcasts in active production" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-display text-7xl text-gold">{s.n}</p>
              <p className="mt-3 eyebrow !text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow">The journey</p>
          <h2 className="mt-4 font-display text-5xl">From TV hosting to <span className="italic text-gold">narrative.</span></h2>
          <div className="mt-8 space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink mb-2">2014 — 2018 · Television</p>
              <p>Joined Citizen TV's <em>Rauka</em> as a presenter, learning the discipline of live storytelling.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink mb-2">2019 — 2022 · Independent Host, MC & Moderator</p>
              <p>Hosting brand events, summits, and faith conferences across Nairobi, the region and the UAE.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink mb-2">2023 — Today · Storyteller & Founder</p>
              <p>Launched <em>Your Health Kenya</em> and <em>The 360 Perspective Podcast</em>; writing my first book, <em>Waiting, But Whole</em>.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={tv} alt="Citizen TV set" className="w-full h-[300px] object-cover" />
          <img src={stage} alt="Trisha speaking on stage" className="w-full h-[300px] object-cover mt-12" />
        </div>
      </section>

      <section className="container-prose pb-28">
        <div className="border-y border-border py-16 text-center">
          <h3 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
            The right voice changes everything. <span className="italic text-gold">Let's make sure yours is in the room.</span>
          </h3>
          <Link to="/contact" className="mt-8 inline-flex btn-primary">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
