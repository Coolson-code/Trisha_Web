import { createFileRoute, Link } from "@tanstack/react-router";
import bookMockup from "@/assets/book-mockup.jpg";

export const Route = createFileRoute("/books")({
  component: Books,
  head: () => ({
    meta: [
      { title: "Books & Blog Posts — Trisha Wangari" },
      { name: "description", content: "Books and blog posts by Trisha Wangari, beginning with Waiting, But Whole — a faith-filled journey for women learning to trust God through delayed promises." },
    ],
  }),
});

const posts = [
  {
    title: "When the answer is 'not yet'",
    excerpt: "On learning to read God's silence as care, not absence — and what to do with the prayers that come back unanswered.",
    date: "May 2026",
    tag: "Faith",
  },
  {
    title: "Womanhood without a map",
    excerpt: "Notes for the woman in the in-between: unmarried, unsure, unfinished — and still, somehow, becoming.",
    date: "April 2026",
    tag: "Identity",
  },
  {
    title: "The slow miracle",
    excerpt: "We were taught to expect the burning bush. But most of God's work in me has looked like dawn — slow, ordinary, true.",
    date: "March 2026",
    tag: "Devotional",
  },
  {
    title: "Letters to my younger self",
    excerpt: "What I wish I had known at 22 about waiting, wholeness, and the friends who would stay.",
    date: "February 2026",
    tag: "Personal",
  },
];

function Books() {
  return (
    <>
      <section style={{ backgroundColor: "#F5E6D3" }}>
        <div className="container-prose pt-24 pb-32 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <p className="eyebrow !text-ink/60">New Book. Out Now</p>
            <h1 className="mt-6 font-display text-6xl md:text-[6.5rem] leading-[0.95]">
              Waiting,<br />
              <span className="italic text-gold">But Whole.</span>
            </h1>
            <p className="mt-6 font-display text-2xl md:text-3xl italic text-ink/80">
              Trusting God when life feels delayed.
            </p>
            <p className="mt-6 max-w-md text-lg text-ink/75 leading-relaxed">
              A faith-filled journey for women learning to trust God through
              singleness, silence and delayed promises.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://thrishawangari.gumroad.com/l/wbjya" target="_blank" rel="noopener noreferrer" className="btn-primary">Get the book on Gumroad</a>
              <a href="#blog" className="btn-secondary">Read the blog</a>
            </div>
          </div>
          <a href="https://thrishawangari.gumroad.com/l/wbjya" target="_blank" rel="noopener noreferrer" className="block">
            <img src={bookMockup} alt="Waiting, But Whole — Trusting God When Life Feels Delayed, by Trisha Wangari" className="w-full aspect-square object-cover shadow-2xl" />
          </a>
        </div>
      </section>

      <section className="container-prose py-28 max-w-3xl">
        <p className="eyebrow text-center">From the introduction</p>
        <blockquote className="mt-8 font-display text-3xl md:text-4xl leading-[1.25] text-center italic">
          "Wholeness isn't what arrives at the end of the waiting.
          It's what we discover we already are, in the middle of it."
        </blockquote>
        <p className="mt-6 text-center text-sm uppercase tracking-[0.22em] text-muted-foreground">— Trisha Wangari</p>
      </section>

      <section id="blog" className="border-y border-border" style={{ backgroundColor: "#FBF2E6" }}>
        <div className="container-prose py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="eyebrow">Blog posts</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">Words for the waiting.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm md:text-right">
              Short reflections, longer essays, and the occasional letter — written
              between chapters of the book.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {posts.map((p) => (
              <article key={p.title} className="group border-b border-border pb-8">
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span style={{ color: "#A0522D" }}>{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl leading-snug group-hover:opacity-80 transition-opacity">
                  {p.title}
                </h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{p.excerpt}</p>
                <span className="mt-5 inline-block text-sm uppercase tracking-[0.18em]" style={{ color: "#A0522D" }}>
                  Read soon →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preorder" className="container-prose py-28 text-center max-w-xl">
        <p className="eyebrow">Available now</p>
        <h2 className="mt-4 font-display text-5xl">Bring it home.</h2>
        <p className="mt-4 text-muted-foreground">Read it on your phone, tablet or e-reader. Delivered instantly via Gumroad.</p>
        <a href="https://thrishawangari.gumroad.com/l/wbjya" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex btn-primary">Get the book</a>
        <p className="mt-12"><Link to="/contact" className="text-sm uppercase tracking-[0.18em] text-gold hover:underline">Or write to me directly →</Link></p>
      </section>
    </>
  );
}
