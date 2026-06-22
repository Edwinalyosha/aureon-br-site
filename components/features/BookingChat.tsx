"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "ai" | "user";
  content: string;
}

interface Answers {
  businessType: string;
  staffSize: string;
  biggestPain: string;
  softwareSpend: string;
}

type Step = "start" | "q1" | "q2" | "q3" | "q4" | "submitting" | "results";

// ─── Question options ─────────────────────────────────────────────────────────
const Q1 = ["Auto repair shop", "Engineering firm", "Real estate operation", "Something else"];
const Q2 = ["Just me", "2–5 people", "6–20 people", "More than 20"];
const Q3 = [
  "Answering calls / booking",
  "Following up with customers",
  "Managing multiple tools",
  "Marketing & reviews",
  "Something else",
];
const Q4 = ["Under $200/month", "$200–$500/month", "$500–$1,000/month", "Over $1,000/month", "Skip this one"];

// ─── Results generator ────────────────────────────────────────────────────────
function generateResults(answers: Answers): string {
  const { businessType, staffSize, biggestPain } = answers;

  let lossRange = "$3,200–$4,800";
  let painFocus = "disconnected tools and manual admin";
  let tier = "Starter Complete";

  if (businessType === "Auto repair shop") {
    if (biggestPain.includes("booking") || biggestPain.includes("calls")) {
      lossRange = "$2,800–$4,400";
      painFocus = "missed calls and unconfirmed appointments";
      tier = staffSize === "6–20 people" || staffSize === "More than 20" ? "Professional" : "Starter Complete";
    } else if (biggestPain.includes("follow")) {
      lossRange = "$3,400–$5,200";
      painFocus = "lapsed customers and unanswered follow-ups";
      tier = "Starter Complete";
    } else if (biggestPain.includes("tools")) {
      lossRange = "$3,800–$5,600";
      painFocus = "fragmented systems that don't communicate";
      tier = staffSize === "More than 20" ? "Enterprise" : "Professional";
    }
  } else if (businessType === "Engineering firm") {
    lossRange = "$4,000–$6,500";
    painFocus = "manual coordination and project communication gaps";
    tier = "Professional";
  } else if (businessType === "Real estate operation") {
    lossRange = "$3,600–$5,400";
    painFocus = "lead follow-up and scheduling gaps";
    tier = "Starter Complete";
  } else {
    lossRange = "$3,000–$5,000";
    painFocus = "manual processes that AI can handle automatically";
    tier = "Starter Complete";
  }

  if (staffSize === "More than 20") tier = "Professional";

  return `Based on what you've shared, operations like yours typically lose ${lossRange}/month to ${painFocus}.\n\nAureon Bridge's ${tier} tier is built for exactly this situation. Edwin will review your answers before the call — you won't need to repeat yourself.\n\nPick a time below.`;
}

// ─── Typing indicator ─────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 w-fit">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}

// ─── Choice button row ────────────────────────────────────────────────────────
function Choices({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className="min-h-[44px] px-4 py-2 border border-gold text-gold text-sm font-medium hover:bg-gold hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function BookingChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>("start");
  const [typing, setTyping] = useState(false);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [results, setResults] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, results]);

  // Show greeting on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        {
          id: "greeting",
          role: "ai",
          content:
            "Hi! I'm Aureon's intake assistant. Before we schedule your call, I'd love to learn a bit about your business — it'll help Edwin make the most of your time together. Ready?",
        },
      ]);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const addAI = (content: string, delay = 700) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "ai", content },
      ]);
      setTyping(false);
    }, delay);
  };

  const addUser = (content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString() + "u", role: "user", content },
    ]);
  };

  // ── Step handlers ────────────────────────────────────────────────────────────
  const handleStart = () => {
    addUser("Yes, let's go →");
    setStep("q1");
    addAI("What kind of business do you run?");
  };

  const handleQ1 = (val: string) => {
    addUser(val);
    setAnswers((a) => ({ ...a, businessType: val }));
    setStep("q2");
    addAI("How many people work at your business?");
  };

  const handleQ2 = (val: string) => {
    addUser(val);
    setAnswers((a) => ({ ...a, staffSize: val }));
    setStep("q3");
    addAI("What's taking up the most time in your operation right now?");
  };

  const handleQ3 = (val: string) => {
    addUser(val);
    setAnswers((a) => ({ ...a, biggestPain: val }));
    setStep("q4");
    addAI(
      "Last one — roughly how much do you spend on software tools each month? You can skip this.",
    );
  };

  const handleQ4 = async (val: string) => {
    const skip = val === "Skip this one";
    addUser(skip ? "I'd rather skip" : val);
    const finalAnswers = {
      businessType: answers.businessType ?? "",
      staffSize: answers.staffSize ?? "",
      biggestPain: answers.biggestPain ?? "",
      softwareSpend: skip ? "" : val,
    };
    setAnswers(finalAnswers);
    setStep("submitting");
    setTyping(true);

    // Fire-and-forget to n8n — never blocks the user
    fetch("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalAnswers),
    }).catch(() => {});

    // Show results after a realistic "thinking" delay
    setTimeout(() => {
      setTyping(false);
      setResults(generateResults(finalAnswers));
      setStep("results");
    }, 1800);
  };

  const calendarUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL;

  return (
    <div className="w-full max-w-2xl border border-gray-100">
      {/* Header */}
      <div className="bg-navy px-5 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-gold" />
        <span className="text-xs font-semibold text-white tracking-wide">
          Aureon Intake Assistant
        </span>
      </div>

      {/* Messages */}
      <div className="h-[400px] sm:h-[480px] overflow-y-auto p-5 space-y-4 bg-white">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex",
              msg.role === "user" ? "justify-end" : "justify-start",
            )}
          >
            {msg.role === "ai" && (
              <div className="flex-shrink-0 w-7 h-7 bg-gold/10 border border-gold/20 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-[9px] font-bold text-gold">AB</span>
              </div>
            )}
            <div
              className={cn(
                "max-w-[80%] px-4 py-3 text-sm leading-relaxed",
                msg.role === "ai"
                  ? "bg-gray-50 text-navy"
                  : "bg-navy text-white",
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <div className="flex justify-start">
            <div className="flex-shrink-0 w-7 h-7 bg-gold/10 border border-gold/20 flex items-center justify-center mr-3 mt-0.5">
              <span className="text-[9px] font-bold text-gold">AB</span>
            </div>
            <TypingDots />
          </div>
        )}

        {/* Results card */}
        {step === "results" && results && (
          <div className="border-l-4 border-gold bg-cream px-5 py-5 mt-2">
            <p className="text-sm text-grey leading-relaxed whitespace-pre-line mb-5">
              {results}
            </p>
            {calendarUrl ? (
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-goldlight text-white text-sm font-semibold px-6 py-3 transition-colors"
              >
                Book a Time <ArrowRight size={15} />
              </a>
            ) : (
              <div className="border border-dashed border-gold/40 bg-gold/5 px-4 py-3">
                <p className="text-xs text-grey/70">
                  <strong className="text-gold/80">Developer note:</strong> Set{" "}
                  <code className="font-mono">NEXT_PUBLIC_GOOGLE_CALENDAR_URL</code> in{" "}
                  <code className="font-mono">.env.local</code> to enable booking.
                </p>
              </div>
            )}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      {!typing && step !== "results" && step !== "submitting" && (
        <div className="border-t border-gray-100 px-5 py-4 bg-white">
          {step === "start" && (
            <button
              onClick={handleStart}
              className="min-h-[44px] px-6 py-2.5 bg-gold hover:bg-goldlight text-white text-sm font-semibold transition-colors flex items-center gap-2"
            >
              Yes, let&apos;s go <ArrowRight size={15} />
            </button>
          )}
          {step === "q1" && <Choices options={Q1} onSelect={handleQ1} />}
          {step === "q2" && <Choices options={Q2} onSelect={handleQ2} />}
          {step === "q3" && <Choices options={Q3} onSelect={handleQ3} />}
          {step === "q4" && <Choices options={Q4} onSelect={handleQ4} />}
        </div>
      )}
    </div>
  );
}
