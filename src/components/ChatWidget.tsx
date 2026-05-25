import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type QuickReply = "Contact Trisha" | "View Services" | "Book a Consultation" | "Send WhatsApp Message";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  cta?: boolean; // show WhatsApp CTA inside bubble
};

const WHATSAPP_URL =
  "https://wa.me/971585224401?text=Hi%20Trisha%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more.";

const WELCOME: Message = {
  id: 0,
  from: "bot",
  text: "👋 Welcome! I'm Trisha's virtual assistant — here to help you book, explore her services, or simply get in touch. What can I help you with today?",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const idRef = useRef(1);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const push = (m: Omit<Message, "id">) =>
    setMessages((prev) => [...prev, { ...m, id: idRef.current++ }]);

  // ============================================
  // AI INTEGRATION HOOK
  // To connect a live AI backend (e.g. Claude API),
  // replace the placeholder responses below with
  // an API call to your chosen endpoint.
  // ============================================
  const handleUserMessage = (text: string, quick?: QuickReply) => {
    const trimmed = text.trim();
    if (!trimmed && !quick) return;

    push({ from: "user", text: quick ?? trimmed });
    setInput("");

    setTimeout(() => {
      if (quick === "Contact Trisha") {
        push({
          from: "bot",
          text:
            "You can reach Trisha directly via WhatsApp at +971 58 522 4401 or by email at thrive360solutions@gmail.com. You can also scroll to the contact form on this page to send a detailed enquiry. Tap below to start a WhatsApp conversation instantly!",
          cta: true,
        });
      } else if (quick === "View Services") {
        push({
          from: "bot",
          text:
            "Trisha offers professional EMCEE, conference moderation, and podcast hosting services. Scroll up to explore the full list!",
        });
      } else if (quick === "Book a Consultation") {
        push({
          from: "bot",
          text: "To book a consultation, the easiest way is via WhatsApp.",
          cta: true,
        });
      } else if (quick === "Send WhatsApp Message") {
        window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      } else {
        push({
          from: "bot",
          text: "Thanks for your message! For the fastest response, tap the WhatsApp button below.",
          cta: true,
        });
      }
    }, 350);
  };

  const quickReplies: QuickReply[] = [
    "Contact Trisha",
    "View Services",
    "Book a Consultation",
    "Send WhatsApp Message",
  ];

  return (
    <div style={{ zIndex: 9999 }} className="fixed bottom-5 right-5 print:hidden">
      {/* Chat window */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Trisha's Assistant"
          className="mb-3 flex flex-col overflow-hidden rounded-2xl border border-ink/15 bg-ivory shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          style={{
            width: "min(360px, 90vw)",
            height: "min(540px, 65vh)",
          }}
        >
          <header className="flex items-center justify-between bg-ink px-4 py-3 text-ivory">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink">
                <MessageCircle size={16} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-base">Trisha's Assistant</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-ivory/60">Online</p>
              </div>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-ivory/70 transition-colors hover:bg-ivory/10 hover:text-gold"
            >
              <X size={18} />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-ivory px-3 py-4">
            {messages.map((m, i) => (
              <div key={m.id} className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}>
                <div
                  className={
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed " +
                    (m.from === "bot"
                      ? "bg-card text-ink border border-border rounded-tl-sm"
                      : "bg-ink text-ivory rounded-tr-sm")
                  }
                >
                  <p>{m.text}</p>
                  {m.cta && (
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp"
                      className="mt-2.5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-medium text-white transition-transform hover:scale-[1.02]"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      Chat on WhatsApp
                    </a>
                  )}
                  {/* Quick replies under welcome */}
                  {i === 0 && m.from === "bot" && (
                    <div className="mt-3 grid grid-cols-2 gap-1.5">
                      {quickReplies.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleUserMessage("", q)}
                          className="w-full rounded-full border border-ink/20 bg-ivory px-2.5 py-1.5 text-[11px] text-ink text-center transition-colors hover:border-gold hover:text-gold"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUserMessage(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-card px-3 py-2.5"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              aria-label="Type a message"
              className="flex-1 bg-transparent px-2 py-1.5 text-sm text-ink placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-ivory transition-colors hover:bg-gold hover:text-ink"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat with Trisha's Assistant"}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ivory shadow-xl transition-transform hover:scale-105 hover:bg-gold hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-gold/40"
            style={{ animationDuration: "2.4s" }}
          />
        )}
        {open ? <X size={22} className="relative" /> : <MessageCircle size={22} className="relative" />}
      </button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
