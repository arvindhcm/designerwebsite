import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CaseStudyRunbooks.css";

import runbookDemo from "./assets/runbookDemo.mp4";
import consistentService from "./assets/consistentService.mp4";
import completeAdherence from "./assets/completeAdherence.mp4";
import canvasWide from "./assets/canvasWide.png";
import canvasOnboarding from "./assets/canvasOnboarding.png";
import nodeSpec from "./assets/nodeSpec.png";
import listView from "./assets/listView.avif";
import deckPdf from "./assets/deckPdf.pdf";
import testimonialThread from "./assets/customersatisfaction/testimonialThread.png";
import testimonial1 from "./assets/customersatisfaction/testimonial1.png";
import testimonial2 from "./assets/customersatisfaction/testimonial2.png";
import testimonial3 from "./assets/customersatisfaction/testimonial3.png";
import testimonial4 from "./assets/customersatisfaction/testimonial4.png";

// EDIT: swap copy, links, and credits for your own version of this story.
export default function CaseStudyRunbooks() {
  const navigate = useNavigate();

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && navigate("/");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [navigate]);

  return (
    <div
      className="case-study"
      role="dialog"
      aria-modal="true"
      aria-label="Unified Runbooks case study"
    >
      <div className="cs-scroll">
        {/* TOPBAR */}
        <div className="cs-topbar">
          <div className="wrap cs-topbar-inner">
            <button className="cs-back" onClick={() => navigate("/")}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Profile
            </button>
            <a
              className="cs-live-link text-red-100"
              href="https://superops.com/psa-software/unified-runbooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              See announcement →
            </a>
          </div>
        </div>

        {/* HERO */}
        <header className="cs-hero">
          <div className="wrap">
            <span className="cs-tag">Unified Runbooks · SuperOps PSA</span>
            <h1>SOPs technicians actually follow, every single time</h1>
            <p className="cs-hero-sub">
              Turning tribal-knowledge SOPs into guided, automated workflows —
              from a blank canvas to a shipped feature the team called{" "}
              <em>"a key feature of SuperOps."</em>
            </p>
            <div className="cs-meta-row">
              <div>
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">
                  Product Designer, end&#8209;to&#8209;end
                </span>
              </div>
              <div>
                <span className="cs-meta-label">Platform</span>
                <span className="cs-meta-value">SuperOps PSA</span>
              </div>
              <div>
                <span className="cs-meta-label">Team</span>
                <span className="cs-meta-value">
                  1 designer · PM · 3 engineers
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="wrap">
          <div className="cs-hero-media w-3/4">
            <video src={runbookDemo} autoPlay loop muted playsInline />
          </div>
        </div>

        {/* AT A GLANCE */}
        <section className="cs-section cs-section--tight">
          <div className="wrap cs-section-inner cs-section-inner--wide">
            <p className="eyebrow">The solution at a glance</p>
            <div className="cs-tldr-grid">
              <div className="cs-tldr-card">
                <span className="cs-tldr-label">Challenge</span>
                <p>
                  SOPs lived in documents while the work happened in the
                  ticketing tool. Steps got skipped, order got mixed up, and
                  consistency depended on who was on shift.
                </p>
              </div>
              <div className="cs-tldr-card">
                <span className="cs-tldr-label">Approach</span>
                <p>
                  Started at the atomic unit, not the canvas — mapped five
                  action types a step could take, and every state each one
                  needed before drawing a single connection.
                </p>
              </div>
              <div className="cs-tldr-card">
                <span className="cs-tldr-label">Solution</span>
                <p>
                  A drag-and-drop canvas where tasks unlock the next step,
                  scripts fire real automations, and one runbook applies to any
                  client site from a dropdown.
                </p>
              </div>
              <div className="cs-tldr-card">
                <span className="cs-tldr-label">Impact</span>
                <p>
                  Shipped as a core PSA module — called "a key feature of
                  SuperOps" internally and "absolutely phenomenal" by customers
                  within days of release.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="cs-section">
          <div className="wrap cs-section-inner">
            <p className="eyebrow">The problem</p>
            <h2>SOPs lived in documents. Work happened somewhere else.</h2>
            <p className="cs-body">
              MSP technicians run the same procedures — onboarding an employee,
              offboarding a device, patching a server — dozens of times a week,
              for dozens of different clients. Those procedures lived as static
              checklists or tribal knowledge, disconnected from the ticketing
              tool technicians actually worked in. Steps got skipped, order got
              mixed up, and consistency depended on who was on shift.
            </p>
            <p className="cs-body">
              The ask: give MSPs a way to turn a written SOP into a living
              workflow — one that could branch, unlock steps conditionally,
              trigger scripts, and apply the exact same rigor whether it ran
              once or a thousand times.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="cs-section cs-section--alt">
          <div className="wrap cs-section-inner">
            <p className="eyebrow">Process</p>
            <h2>Designing the node, not just the screen</h2>
            <p className="cs-body">
              The hardest problem wasn't the canvas — it was the atomic unit
              inside it. A runbook step needed to hold very different shapes of
              content while staying visually predictable at a glance, so most of
              early exploration went into the node itself before a single
              connection was drawn:
            </p>
            <ol className="cs-decision-list">
              <li className="cs-decision">
                <span className="cs-decision-num">01</span>
                <div>
                  <h3>Fixed anatomy</h3>
                  <p>
                    Every node reads the same way at a glance, no matter what it
                    holds — a checkbox task, a script, a captured value, or an
                    automatic system action.
                  </p>
                </div>
              </li>
              <li className="cs-decision">
                <span className="cs-decision-num">02</span>
                <div>
                  <h3>Five action types</h3>
                  <p>
                    Task, script, value capture, system action, and one more —
                    each with its own default styling so a technician can tell
                    what a step will do without opening it.
                  </p>
                </div>
              </li>
              <li className="cs-decision">
                <span className="cs-decision-num">03</span>
                <div>
                  <h3>Full state coverage</h3>
                  <p>
                    Default, hover, selected, and text-overflow specified up
                    front for every variant, so engineering never had to guess
                    how an edge case should look.
                  </p>
                </div>
              </li>
            </ol>
            <figure className="cs-figure cs-figure--full">
              <img
                src={nodeSpec}
                alt="Node component specification sheet: anatomy, five action node types, node states, and text overflow behavior"
                loading="lazy"
              />
              <figcaption>
                Node anatomy, action-type variants, and state specs — the
                building block every runbook step is made from.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="cs-section">
          <div className="wrap cs-section-inner">
            <p className="eyebrow">The solution</p>
            <h2>
              A drag-and-drop canvas for building — and running — runbooks
            </h2>
            <p className="cs-body">
              Runbooks assemble on a connected node canvas: tasks unlock the
              next step on completion, script steps fire real automations (like
              provisioning a new employee's AD account), and the whole sequence
              can be applied to any client site from a single dropdown.
              Technicians work through it like a checklist with guardrails —
              nothing skippable, nothing out of order.
            </p>
            <div className="cs-solution-layout">
              <figure className="cs-figure cs-solution-main">
                <div className="cs-solution-media">
                  <img
                    src={canvasWide}
                    alt="Runbook canvas showing an Employee Onboarding workflow with chained task, script, and system-action nodes"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  An Employee Onboarding runbook — task, script, and auto-action
                  nodes chained with unlock logic.
                </figcaption>
              </figure>

              <div className="cs-solution-side">
                <figure className="cs-figure">
                  <div className="cs-solution-media">
                    <img
                      src={canvasOnboarding}
                      alt="Close-up of the runbook canvas with checklist and script nodes"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    Close-up: checklist and script nodes mid-run.
                  </figcaption>
                </figure>

                <figure className="cs-figure">
                  <div className="cs-solution-media">
                    <img
                      src={listView}
                      alt="List view of runbooks for quick scanning and management"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    List view — for scanning and managing runbooks at a glance.
                  </figcaption>
                </figure>

                <figure className="cs-figure">
                  <div className="cs-solution-media">
                    <video
                      src={consistentService}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <figcaption>
                    Consistent service experiences — the same runbook, every
                    time, across every client.
                  </figcaption>
                </figure>

                <figure className="cs-figure">
                  <div className="cs-solution-media">
                    <video
                      src={completeAdherence}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <figcaption>
                    Ensure complete adherence — steps unlock in sequence, so
                    nothing gets skipped.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="cs-section cs-section--dark">
          <div className="wrap cs-section-inner">
            <p className="eyebrow">Impact</p>
            <h2>Shipped, and it landed</h2>
            <p className="cs-body cs-body--light">
              Runbooks shipped as a core PSA module. The reaction from the team
              and early customers was immediate — internally it was called out
              as "a key feature of SuperOps," and customer feedback flagged it
              as "absolutely phenomenal" within days of release.
            </p>

            <blockquote className="cs-quote">
              "Good job on the new Runbooks module, you guys smashed it, it's
              amazing!"
            </blockquote>

            <div className="cs-reaction-row">
              <span className="cs-reaction">🔥 79</span>
              <span className="cs-reaction">🎉 21</span>
              <span className="cs-reaction">👏 15</span>
              <span className="cs-reaction">🥹 7</span>
            </div>

            <div className="cs-gallery-testimonials">
              <img
                src={testimonialThread}
                alt="Slack thread announcing positive customer feedback on the Runbooks launch"
                loading="lazy"
              />
              <img
                src={testimonial4}
                alt="Slack message: I believe this will be a key feature of SuperOps"
                loading="lazy"
              />
              <img
                src={testimonial1}
                alt="Slack message calling the new Runbooks module amazing"
                loading="lazy"
              />
              <img
                src={testimonial2}
                alt="Customer message calling the new runbook system absolutely phenomenal"
                loading="lazy"
              />
              <img
                src={testimonial3}
                alt="Teammate reaction calling the runbook canvas awesome at first glance"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* DECK / CLOSE */}
        {/* <section className="cs-section cs-section--closing">
          <div className="wrap cs-section-inner cs-closing-inner">
            <div>
              <h2>Want the full process?</h2>
              <p className="cs-body">
                The full design deck covers research, flows, and edge cases not
                shown here.
              </p>
            </div>
            <div className="cs-closing-actions">
              <a
                className="btn"
                href={deckPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                View full deck (PDF)
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <button className="btn btn--ghost" onClick={() => navigate("/")}>
                Back to home
              </button>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
