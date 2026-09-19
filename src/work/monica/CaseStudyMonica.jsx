import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ImageLightbox from "../../components/ImageLightbox";

// import heroPoster from "./assets/videoThumbnail.webp";
import scriptgen from "./assets/scriptgen.png";
import worklog from "./assets/worklog.png";
// import autonomousImg from "./assets/autonomousagents.webp";
import ticketSummarization from "./assets/ticketSummarization.png";
import smartWorklogs from "./assets/smartWorklogs.gif";
import efficiencyReport from "./assets/efficiencyReport.gif";
import scriptGeneration from "./assets/scriptGeneration.gif";
import alloptionmonica from "./assets/alloptionmonica.png";
import similarTicket from "./assets/similarticket.mp4";
import samGodfrey from "./assets/samGodfrey.webp";

const solutionFeatures = [
  {
    src: alloptionmonica,
    alt: "Smart ticket deflection suggesting a help article before a ticket is filed",
    caption: "Smart deflection, suggesting the fix before the ticket exists.",
    label: "smart deflection",
  },
  {
    src: similarTicket,
    type: "video",
    alt: "Smart ticket deflection suggesting a help article before a ticket is filed",
    caption: "Smart deflection, suggesting the fix before the ticket exists.",
    label: "smart deflection",
  },
  {
    src: ticketSummarization,
    alt: "Monica summarizing a long ticket thread into a short, clear summary",
    caption:
      "Ticket summarization — tickets and worklogs condensed into quick, clear reads.",
    label: "ticket summarization",
  },
  {
    src: smartWorklogs,
    alt: "Smart worklogs converting a ticket reply into a formatted worklog",
    caption: "Smart worklogs, generated automatically from replies.",
    label: "smart worklogs",
  },

  {
    src: efficiencyReport,
    alt: "Efficiency report summarization highlighting bottlenecks across ticket categories",
    caption: "Efficiency reports, distilled into the bottlenecks that matter.",
    label: "efficiency reports",
  },
  {
    src: scriptGeneration,
    alt: "AI script generation turning a plain instruction into a ready-to-run script",
    caption: "Script generation, straight from plain instructions.",
    label: "script generation",
  },
];

const processTiers = [
  {
    src: scriptgen,
    alt: "AI-powered assistance suggesting next steps and scripts",
    tier: "01 · Your second set of eyes",
    title: "AI‑powered assistance",
    description:
      "Monica suggests next steps to help the team move faster — from generating scripts to spotting efficiency gaps across ticket categories.",
  },
  {
    src: worklog,
    alt: "Ask Monica executing a routine task under supervision",
    tier: "02 · Your trusted sidekick",
    title: "Ask Monica",
    description:
      "Monica evolves from assistance to execution, handling routine IT tasks under supervision so the team can focus on higher-value work.",
  },
];

// EDIT: swap copy, links, and credits for your own version of this story.
export default function CaseStudyMonica() {
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && !lightboxImage) navigate("/");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, lightboxImage]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex flex-col bg-bg"
      role="dialog"
      aria-modal="true"
      aria-label="Monica AI case study"
    >
      <div className="flex-1 overflow-y-auto [-webkit-overflow-scrolling:touch]">
        {/* TOPBAR */}
        <div className="liquid-glass sticky top-0 z-10 flex-shrink-0 border-b border-border">
          <div className="wrap flex items-center justify-between">
            <button
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-[9px] text-sm font-semibold text-ink transition-transform duration-150 ease-in-out hover:-translate-x-0.5 hover:border-border-strong"
              onClick={() => navigate("/")}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Profile
            </button>
            <a
              className="group inline-flex items-center gap-1.5 text-[17px] font-semibold text-accent-ink transition-colors duration-150 ease-in-out hover:text-ink"
              href="https://superops.com/monica-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Monica AI →
            </a>
          </div>
        </div>

        {/* HERO */}
        <header className="pb-7 pt-14">
          <div className="wrap">
            <span className="liquid-glass mb-[18px] inline-flex items-center rounded-full px-3.5 py-[7px] text-xs font-semibold uppercase tracking-[.04em] text-ink-soft">
              Monica AI · SuperOps
            </span>
            <h1 className="m-0 mb-[18px] text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[35px]">
              Designing trust into an AI that gets to act on its own
            </h1>
            <p className="mb-9 max-w-[640px] text-[17px] leading-[1.6] text-ink-soft">
              A tiered agentic experience for IT teams — from a suggestion in
              the margin to an agent that resolves the ticket outright — built
              so technicians could tell, at every step,{" "}
              <em className="font-['Lora'] font-medium italic text-ink">
                exactly how much they could trust it.
              </em>
            </p>
            <div className="flex flex-wrap gap-8 border-t border-border pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-[11.5px] font-semibold uppercase tracking-[.05em] text-muted">
                  Role
                </span>
                <span className="text-[14.5px] font-semibold text-ink">
                  Product Designer, end&#8209;to&#8209;end
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11.5px] font-semibold uppercase tracking-[.05em] text-muted">
                  Platform
                </span>
                <span className="text-[14.5px] font-semibold text-ink">
                  SuperOps AI / Monica
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11.5px] font-semibold uppercase tracking-[.05em] text-muted">
                  Team
                </span>
                <span className="text-[14.5px] font-semibold text-ink">
                  1 designer · PM · AI/ML engineers
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="wrap">
          <div className="mb-2 overflow-hidden rounded-lg border border-border shadow-md sm:w-3/5">
            <img
              src={scriptGeneration}
              alt="Monica AI product walkthrough inside the SuperOps console"
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* AT A GLANCE */}
        <section className="px-0 pb-2 pt-10">
          <div className="wrap max-w-[1120px]">
            <p className="eyebrow">The solution at a glance</p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-md border border-border bg-surface p-[22px] pb-6 shadow-sm">
                <span className="mb-2.5 block text-xs font-bold uppercase tracking-[.05em] text-accent-ink">
                  Challenge
                </span>
                <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                  Technicians didn't just need faster answers — they needed to
                  know when to trust an AI action outright and when to keep a
                  hand on the wheel.
                </p>
              </div>
              <div className="rounded-md border border-border bg-surface p-[22px] pb-6 shadow-sm">
                <span className="mb-2.5 block text-xs font-bold uppercase tracking-[.05em] text-accent-ink">
                  Approach
                </span>
                <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                  Split autonomy into three explicit, escalating tiers instead
                  of one black box — assistance, supervised execution, and full
                  autonomy.
                </p>
              </div>
              <div className="rounded-md border border-border bg-surface p-[22px] pb-6 shadow-sm">
                <span className="mb-2.5 block text-xs font-bold uppercase tracking-[.05em] text-accent-ink">
                  Solution
                </span>
                <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                  Monica: summarizes and drafts by default, executes routine
                  work under supervision, and runs autonomous agents against
                  policy — every action carrying its own rationale.
                </p>
              </div>
              <div className="rounded-md border border-border bg-surface p-[22px] pb-6 shadow-sm">
                <span className="mb-2.5 block text-xs font-bold uppercase tracking-[.05em] text-accent-ink">
                  Impact
                </span>
                <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                  Up to 40% higher technician productivity and 80% fewer tickets
                  reaching the queue at all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="px-0 py-[72px]">
          <div className="wrap max-w-[760px]">
            <p className="eyebrow">The problem</p>
            <h2 className="m-0 mb-5 text-[clamp(24px,3.4vw,32px)] leading-[1.2] tracking-[-0.01em] text-ink">
              AI that acts is only useful if people believe its judgment
            </h2>
            <p className="mb-4 text-[15.5px] leading-[1.75] text-ink-soft">
              IT teams were drowning in repetitive tickets, worklogs, and
              scripts — the kind of work that's tedious but too consequential to
              hand to a model that just "sounds confident." Every automation
              vendor promised efficiency; almost none earned the right to
              actually take the action, because none of them showed their
              reasoning.
            </p>
            <p className="text-[15.5px] leading-[1.75] text-ink-soft">
              The design problem wasn't the model — it was the interface around
              it: how do you let an AI agent's authority grow, screen by screen,
              at exactly the pace a technician's trust in it grows too?
            </p>
          </div>
        </section>

        {/* PROCESS — three tiers of autonomy */}
        <section className="bg-surface-alt px-0 py-[72px]">
          <div className="wrap">
            <p className="eyebrow">Process</p>
            {/* <h2 className="m-0 mb-5 text-[clamp(24px,3.4vw,32px)] leading-[1.2] tracking-[-0.01em] text-ink">
              Two Tiers of trust, not one big black box
            </h2> */}
            <p className="mb-4 max-w-[760px] text-[15.5px] leading-[1.75] text-ink-soft">
              Rather than ship one omniscient assistant, Monica's autonomy was
              designed as a ladder a team climbs deliberately — each rung with
              its own visual language, so technicians always know which mode
              they're in.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
              {processTiers.map((tier) => (
                <figure
                  key={tier.title}
                  className="m-0 flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm"
                >
                  <button
                    type="button"
                    className="block w-full cursor-zoom-in border-b border-border p-0 transition-opacity duration-150 ease-in-out hover:opacity-90"
                    onClick={() =>
                      setLightboxImage({ src: tier.src, alt: tier.alt })
                    }
                    aria-label={`Open full preview of ${tier.title}`}
                  >
                    <img
                      src={tier.src}
                      alt={tier.alt}
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </button>
                  <figcaption className="flex flex-1 flex-col p-5">
                    <span className="mb-2 text-xs font-bold uppercase tracking-[.05em] text-accent-ink">
                      {tier.tier}
                    </span>
                    <h3 className="m-0 mb-1.5 text-[17px] font-bold tracking-[-0.01em] text-ink">
                      {tier.title}
                    </h3>
                    <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                      {tier.description}
                    </p>
                  </figcaption>
                </figure>
              ))}

              {/* <figure className="m-0 flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm">
                <img
                  // src={autonomousImg}
                  alt="Autonomous agent resolving an incident against policy"
                  loading="lazy"
                  className="block h-auto w-full border-b border-border"
                />
                <figcaption className="flex flex-1 flex-col p-5">
                  <span className="mb-2 text-xs font-bold uppercase tracking-[.05em] text-accent-ink">
                    03 · Your AI teammate
                  </span>
                  <h3 className="m-0 mb-1.5 text-[17px] font-bold tracking-[-0.01em] text-ink">
                    Autonomous agents
                  </h3>
                  <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                    Purpose-built agents that act on policy, resolve incidents,
                    and adapt to new patterns — with minimal human intervention.
                  </p>
                </figcaption>
              </figure> */}
            </div>
          </div>
        </section>

        {/* SOLUTION — feature demos */}
        <section className="px-0 py-[72px]">
          <div className="wrap max-w-[1120px]">
            <p className="eyebrow">The solution</p>
            {/* <h2 className="m-0 mb-5 text-[clamp(24px,3.4vw,32px)] leading-[1.2] tracking-[-0.01em] text-ink">
              Watch Monica work
            </h2> */}
            <p className="mb-4 max-w-[760px] text-[15.5px] leading-[1.75] text-ink-soft">
              Five surfaces where the AI edge shows up in the daily grind:
              turning tickets into summaries, replies into worklogs, plain
              instructions into scripts, reports into flagged bottlenecks, and
              incoming issues into deflected tickets before they're ever filed.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-start">
              {solutionFeatures.map((feature) => (
                <figure
                  key={feature.label + feature.src}
                  className="m-0 flex flex-col"
                >
                  <button
                    type="button"
                    className="flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-sm border border-border bg-surface p-0 shadow-sm transition-opacity duration-150 ease-in-out hover:opacity-90"
                    onClick={() =>
                      setLightboxImage({
                        src: feature.src,
                        alt: feature.alt,
                        type: feature.type,
                      })
                    }
                    aria-label={`Open full preview of ${feature.label}`}
                  >
                    {feature.type === "video" ? (
                      <video
                        src={feature.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="block w-full h-auto"
                      />
                    ) : (
                      <img
                        src={feature.src}
                        alt={feature.alt}
                        loading="lazy"
                        className="block w-full h-auto"
                      />
                    )}
                  </button>
                  <figcaption className="mt-2.5 text-[12.5px] leading-[1.45] text-muted">
                    {feature.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATION */}
        {/* <section className="bg-surface-alt px-0 py-[72px]">
          <div className="wrap max-w-[1120px]">
            <p className="eyebrow">Why it works</p>
            <h2 className="m-0 mb-5 text-[clamp(24px,3.4vw,32px)] leading-[1.2] tracking-[-0.01em] text-ink">
              Built to act. Designed for trust.
            </h2>
            <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <img
                  src={probabilisticImg}
                  alt=""
                  aria-hidden="true"
                  className="mb-4 size-12"
                />
                <h3 className="m-0 mb-1.5 text-[17px] font-bold tracking-[-0.01em] text-ink">
                  Probabilistic intelligence
                </h3>
                <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                  Adapts intelligently to every situation instead of following
                  rigid, brittle rules.
                </p>
              </div>
              <div>
                <img
                  src={explainableImg}
                  alt=""
                  aria-hidden="true"
                  className="mb-4 size-12"
                />
                <h3 className="m-0 mb-1.5 text-[17px] font-bold tracking-[-0.01em] text-ink">
                  Explainable &amp; governed
                </h3>
                <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                  Every action carries clear AI rationale and a full audit trail
                  — clarity and control at every step.
                </p>
              </div>
              <div>
                <img
                  src={continuousLearningImg}
                  alt=""
                  aria-hidden="true"
                  className="mb-4 size-12"
                />
                <h3 className="m-0 mb-1.5 text-[17px] font-bold tracking-[-0.01em] text-ink">
                  Continuous learning
                </h3>
                <p className="m-0 text-sm leading-[1.6] text-ink-soft">
                  Refines its own decisions based on outcomes, feedback, and new
                  policy — getting smarter every day.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* IMPACT */}
        <section className="bg-ink px-0 py-[72px] text-[#F5F2EA]">
          <div className="wrap max-w-[900px]">
            <p className="eyebrow mb-3.5 !text-[rgba(245,242,234,0.5)]">
              Impact
            </p>
            <h2 className="m-0 mb-5 text-[clamp(24px,3.4vw,32px)] leading-[1.2] tracking-[-0.01em] text-[#F5F2EA]">
              Shipped autonomy that teams actually let off the leash
            </h2>
            <p className="mb-9 text-[15.5px] leading-[1.75] text-[rgba(245,242,234,0.72)]">
              Monica shipped across the tiered experience end-to-end — from the
              first inline suggestion to fully autonomous agents running against
              policy — and IT teams graduated up the trust ladder faster than
              expected.
            </p>

            <div className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-6">
                <div className="text-3xl font-bold tracking-[-0.01em] text-[#F5F2EA]">
                  30%
                </div>
                <p className="m-0 mt-1.5 text-[13.5px] leading-[1.5] text-[rgba(245,242,234,0.72)]">
                  lower operational costs
                </p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-6">
                <div className="text-3xl font-bold tracking-[-0.01em] text-[#F5F2EA]">
                  40%
                </div>
                <p className="m-0 mt-1.5 text-[13.5px] leading-[1.5] text-[rgba(245,242,234,0.72)]">
                  higher technician productivity
                </p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-6">
                <div className="text-3xl font-bold tracking-[-0.01em] text-[#F5F2EA]">
                  80%
                </div>
                <p className="m-0 mt-1.5 text-[13.5px] leading-[1.5] text-[rgba(245,242,234,0.72)]">
                  fewer tickets reaching the queue
                </p>
              </div>
            </div>

            <blockquote className="m-0 mb-6 rounded-r-sm border-l-[3px] border-accent bg-white/[0.04] p-6 font-['Lora'] text-xl font-semibold italic leading-[1.55] tracking-[-0.005em] text-[#F5F2EA]">
              "The AI features in SuperOps have made our support more efficient
              and let us focus on the bigger picture. Ticket summarisation keeps
              us on top of things, while approved AI-written scripts have been a
              breakthrough for our support."
            </blockquote>
            <div className="flex items-center gap-3">
              <img
                src={samGodfrey}
                alt=""
                aria-hidden="true"
                className="size-10 rounded-full border border-white/10 object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-[#F5F2EA]">
                  Sam Godfrey
                </div>
                <div className="text-[12.5px] text-[rgba(245,242,234,0.6)]">
                  Co-Founder &amp; Director, TaskGroup (CompuTask Ltd)
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          type={lightboxImage.type}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}
