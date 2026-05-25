import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mic, Users, Heart, Tv } from "lucide-react";
import heroImg from "@/assets/hero-gold-cape.jpg";
import portraitRed from "@/assets/portrait-red.jpg";
import speaking from "@/assets/speaking-redefining.jpg";
import podcast from "@/assets/podcast-360.jpg";
import hostingRed from "@/assets/hosting-red-wrap.jpg";
import bookCover from "@/assets/book-cover.png";
import tvAmka from "@/assets/tv-amka.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Trisha Wangari — Host, Moderator & Health Storyteller" },
      { name: "description", content: "Host. Moderator. Health storyteller. Speaker. Helping organisations create conversations that move people." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose pt-16 pb-24 md:pt-24 md:pb-32 grid gap-14 md:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <p className="eyebrow">Host · Moderator · Storyteller</p>
            <h1 className="mt-6 font-display text-[3.4rem] md:text-[5rem] leading-[0.98] tracking-tight">
              Conversations<br />
              that <span className="italic text-gold">move</span><br />
              people.
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed italic">
              "I show up for the conversations the world needs to have, bringing warmth, truth and depth to every stage."
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Invite Trisha <ArrowRight size={14} /></Link>
              <Link to="/services" className="btn-secondary">Services</Link>
            </div>
            <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span>Citizen TV</span>
              <span className="h-px w-6 bg-border" />
              <span>The 360 Perspective</span>
              <span className="h-px w-6 bg-border" />
              <span>Your Health KE</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold/60 hidden md:block" />
            <img src={heroImg} alt="Trisha Wangari speaking on stage in a gold cape" className="relative w-full h-[520px] md:h-[620px] object-cover" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold hidden md:block" />
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-border bg-card">
        <div className="container-prose py-14 grid md:grid-cols-3 gap-10">
          {[
            { icon: Mic, title: "Hosting & MC", text: "Galas, summits, brand launches, faith conferences." },
            { icon: Users, title: "Moderation", text: "Panels and fireside chats that surface real insight." },
            { icon: Heart, title: "Health Storytelling", text: "Translating medicine into human, hopeful narratives." },
          ].map((b) => (
            <div key={b.title} className="flex gap-5">
              <b.icon className="text-gold shrink-0 mt-1" size={22} />
              <div>
                <p className="font-display text-2xl">{b.title}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container-prose py-28 grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <img src={portraitRed} alt="Portrait of Trisha Wangari" className="w-full h-[560px] object-cover" />
        <div>
          <p className="eyebrow">A little about me</p>
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02]">
            Truth, story,<br />
            and the <span className="italic text-gold">right room.</span>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Trisha Wangari believes that the right conversation, held in
              the right room, can change everything. With over a decade
              spanning public health research, national broadcast media,
              corporate communications and global conference leadership,
              she has built a career at the intersection of the two things
              that actually move people — truth and story.
            </p>
          </div>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors">
            Read my story <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* WORK GRID */}
      <section className="bg-ink text-ivory">
        <div className="container-prose py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">Stages & studios.</h2>
            </div>
            <Link to="/media" className="text-sm uppercase tracking-[0.2em] text-gold hover:underline underline-offset-4">View podcasts →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: speaking, label: "Keynote · Redefining Success" },
              { img: podcast, label: "Host · The 360 Perspective Podcast" },
              { img: hostingRed, label: "MC · Faith & Culture Night" },
              { img: tvAmka, label: "TV · Rauka, Citizen TV" },
              { img: hostingRed, label: "Health Story · Your Health Kenya" },
              { img: speaking, label: "Panel · Women & Influence" },
            ].slice(0, 3).map((w, i) => (
              <figure key={i} className="group">
                <div className="overflow-hidden">
                  <img src={w.img} alt={w.label} className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-ivory/70">{w.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WAITING BUT WHOLE TEASER */}
      <section className="container-prose py-32 grid md:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div>
          <p className="eyebrow">Out now</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1] tracking-tight">
            Waiting,<br />
            <span className="italic text-gold">But Whole.</span>
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground leading-relaxed text-lg">
            Trusting God when life feels delayed — a faith-filled journey for
            women learning to trust through singleness, silence and delayed promises.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://thrishawangari.gumroad.com/l/wbjya" target="_blank" rel="noopener noreferrer" className="btn-primary">Get the book</a>
            <Link to="/books" className="btn-secondary">Learn more</Link>
          </div>
        </div>
        <a href="https://thrishawangari.gumroad.com/l/wbjya" target="_blank" rel="noopener noreferrer" className="block">
          <img src={bookCover} alt="Waiting, But Whole — book cover by Trisha Wangari" className="w-full aspect-[3/4] object-cover shadow-2xl" />
        </a>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card">
        <div className="container-prose py-24 text-center">
          <Tv className="inline text-gold mb-6" size={28} />
          <h2 className="font-display text-5xl md:text-6xl max-w-3xl mx-auto">
            If you're planning an event where the conversation has to <span className="italic text-gold">matter</span> — let's talk.
          </h2>
          <Link to="/contact" className="mt-10 inline-flex btn-primary">Book a Discovery Call <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}
