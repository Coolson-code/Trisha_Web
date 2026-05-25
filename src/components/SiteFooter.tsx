import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Mic, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-ink text-ivory">
      <div className="container-prose py-20 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl leading-tight">
            Trisha <span className="italic text-gold">Wangari</span>
          </p>
          <p className="mt-4 text-sm text-ivory/70 max-w-sm leading-relaxed">
            Host, moderator, podcaster and content creator — based in Dubai, telling stories that move people across the UAE, Africa, UK and US.
          </p>
          <p className="mt-4 text-xs text-ivory/60 leading-relaxed">
            thrive360solutions@gmail.com<br />+971 58 522 4401 · Dubai, UAE
          </p>
          <div className="mt-6 flex gap-4 text-ivory/70">
            <a href="https://www.linkedin.com/in/trisha-wangari" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors"><Linkedin size={18} /></a>
            <a href="https://www.instagram.com/trisha_wangari" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={18} /></a>
            <a href="https://youtube.com/@yourhealthkenya" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors"><Youtube size={18} /></a>
            <a href="https://youtube.com/@the360perspective" target="_blank" rel="noopener noreferrer" aria-label="Podcast" className="hover:text-gold transition-colors"><Mic size={18} /></a>
            <a href="https://wa.me/971585224401?text=Hi%20Trisha%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="hover:text-[#25D366] transition-colors"><MessageCircle size={18} /></a>
          </div>
        </div>
        <div>
          <p className="eyebrow !text-ivory/50">Explore</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link to="/about" className="text-ivory/80 hover:text-gold">About</Link></li>
            <li><Link to="/services" className="text-ivory/80 hover:text-gold">Services</Link></li>
            <li><Link to="/books" className="text-ivory/80 hover:text-gold">Blogs & Books</Link></li>
            <li><Link to="/media" className="text-ivory/80 hover:text-gold">Podcasts</Link></li>
            <li><Link to="/contact" className="text-ivory/80 hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-ivory/50">Booking</p>
          <p className="mt-5 text-sm text-ivory/80 leading-relaxed">
            For speaking, hosting & consulting enquiries.
          </p>
          <Link to="/contact" className="mt-5 inline-block text-sm uppercase tracking-[0.18em] text-gold hover:underline underline-offset-4">
            Begin a conversation →
          </Link>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-prose py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Trisha Wangari. All rights reserved.</p>
          <p>Privacy · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
