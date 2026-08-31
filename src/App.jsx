import { useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CursorTrail from "./components/CursorTrail.jsx";
import CaseStudyRunbooks from "./work/runbooks/CaseStudyRunbooks.jsx";
import "./App.css";
import thumbnail from "./work/runbooks/assets/thumbnail.png";
import runbookDemo from "./work/runbooks/assets/runbookDemo.mp4";
import linkedinIcon from "./assets/linkedin.svg";
import zohoLogo from "./assets/zoho.svg";
import superopsLogo from "./assets/SuperOps.svg";

/*
  QUICK EDIT GUIDE
  Search for "EDIT:" comments throughout this file — each one
  marks a spot to swap in your own name, bio, work, and links.
  Colors, fonts, and spacing live in the CSS custom properties
  at the top of src/index.css.
*/

export default function App() {
  return (
    <>
      <CursorTrail />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/unified-runbooks" element={<CaseStudyRunbooks />} />
      </Routes>
    </>
  );
}

function Home() {
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const navigate = useNavigate();

  const registerCard = (el) => {
    if (el) cardRefs.current.push(el);
  };

  useEffect(() => {
    const cards = cardRefs.current;
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("in-view"), i * 40);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      cards.forEach((c) => io.observe(c));
      return () => io.disconnect();
    }
    cards.forEach((c) => c.classList.add("in-view"));
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      {/* <header className="site-nav">
        <div className="wrap">
          <div className="logo">
          </div>
          <nav className="links">
            <a href="#work1">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div></div>
        </div>
      </header> */}

      <main className="wrap">
        <div className="bento">
          {/* PROFILE CARD — EDIT: your name, role, initials */}
          <div
            ref={registerCard}
            className="card card--profile span-2c span-2r"
          >
            <div className="flex items-center">
              <div className="avatar mt-5">YN</div>
              <div className="ml-3">
                <h1>Your Name</h1>
                <div className="role">Product Designer</div>
              </div>
            </div>

            <p className="lede">
              I’m Jona, a UX designer with 7 years of experience on complex,
              enterprise-scale products. I specialize in end-to-end design, from
              research to implementation, and collaborate closely with
              cross-functional teams to deliver user-centered solutions. I’m
              passionate about AI and exploring how Designer-AI collaboration
              can become more effective and trustworthy.
            </p>
          </div>

          {/* HEADLINE CARD — EDIT: your one-line positioning statement */}
          {/* <div
            ref={registerCard}
            className="card card--headline span-2c span-2r"
          >
            <p className="eyebrow">What I do</p>
            <p>
              I’m Jona, a UX designer with 7 years of experience on complex,
              enterprise-scale products. I specialize in end-to-end design, from
              research to implementation, and collaborate closely with
              cross-functional teams to deliver user-centered solutions. I’m
              passionate about AI and exploring how Designer-AI collaboration
              can become more effective and trustworthy.
            </p>
          </div> */}

          {/* STATUS CARD — EDIT: toggle wording / remove if unavailable */}
          <div
            ref={registerCard}
            className="card card--experience span-1c span-1r"
          >
            <p className="eyebrow">Experience</p>
            <div className="exp-row">
              <div className="exp-brand">
                <img
                  style={{ height: "30px" }}
                  src={zohoLogo}
                  alt="Zoho Corp"
                  className="exp-logo-img"
                />
                {/* <div className="exp-label">Zoho Corp</div> */}
              </div>
              <div className="exp-years">2019 – 2023</div>
            </div>
            <div className="exp-row">
              <div className="exp-brand">
                <img
                  src={superopsLogo}
                  alt="SuperOps"
                  className="exp-logo-img"
                />
                {/* <div className="exp-label">SuperOps</div> */}
              </div>
              <div className="exp-years">2023 – Present</div>
            </div>
          </div>

          {/* TOOLS CARD — EDIT: swap tags for your actual stack */}
          <div ref={registerCard} className="card card--tools span-1c span-2r">
            <p className="eyebrow">Tools</p>
            <h3>What I work with</h3>
            <p className="lede">Design, code, and everything in between</p>
            <div className="tag-grid">
              <span className="tag">Figma</span>
              <span className="tag">Framer</span>
              <span className="tag">React</span>
              <span className="tag">Webflow</span>
              <span className="tag">Notion</span>
              <span className="tag">Linear</span>
            </div>
          </div>

          {/* META CARD — EDIT: experience, focus, location */}
          <div ref={registerCard} className="card card--meta span-2c span-1r">
            <p className="eyebrow">Experience</p>
            <div className="meta-row">
              <div>
                <div className="big">7 yrs</div>
                <div className="value-sub">Experience</div>
              </div>
              <div className="label">Design &amp; development</div>
            </div>
            <div className="meta-row">
              <div>
                <div className="big">Chennai</div>
                <div className="value-sub">Location</div>
              </div>
              <div className="label">India</div>
            </div>
          </div>

          {/* WORK — main piece. EDIT: replace gradient block with a real screenshot,
              update tag/title/description. To use an image instead of the gradient,
              swap the inline background-image style below for your asset. */}

          <div
            id="work1"
            ref={registerCard}
            className="card card--work work-mint work-featured span-3c span-2r card--clickable"
            role="button"
            tabIndex={0}
            data-cursor-label="Show details"
            onClick={() => navigate("/work/unified-runbooks")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              navigate("/work/unified-runbooks")
            }
          >
            <div className="work-left">
              <span className="work-tag">Case study #1</span>
              <div className="work-spacer"></div>
              <div className="work-copy">
                <h3>Unified Runbooks — SuperOps PSA</h3>
                <p>
                  Turning SOPs into guided, automated workflows. Click to read
                  the case study.
                </p>
              </div>
            </div>
            <video
              className="w-3/5"
              src={runbookDemo}
              autoPlay
              loop
              muted
              playsInline
            />
            {/* <img
              className="work-thumb"
              src={thumbnail}
              alt="Close-up of the runbook canvas with checklist and script nodes"
              loading="lazy"
            /> */}
          </div>

          {/* WORK — secondary piece. EDIT as above. */}
          <div
            id="work2"
            ref={registerCard}
            className="card card--work work-sky work-featured span-3c span-2r card--clickable"
            role="button"
            tabIndex={0}
            data-cursor-label="Show details"
            onClick={() => navigate("/work/unified-runbooks")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              navigate("/work/unified-runbooks")
            }
          >
            <div className="work-left">
              <span className="work-tag">Case study #2</span>
              <div className="work-spacer"></div>
              <div className="work-copy">
                <h3>Unified Runbooks — SuperOps PSA</h3>
                <p>
                  Turning SOPs into guided, automated workflows. Click to read
                  the case study.
                </p>
              </div>
            </div>
            <video
              className="w-3/5"
              src={runbookDemo}
              autoPlay
              loop
              muted
              playsInline
            />
            {/* <img
              className="work-thumb"
              src={thumbnail}
              alt="Close-up of the runbook canvas with checklist and script nodes"
              loading="lazy"
            /> */}
          </div>

          {/* ABOUT CARD — EDIT: your story */}
          <div
            id="about"
            ref={registerCard}
            className="card card--about span-2c span-2r"
          >
            <p className="eyebrow">About</p>
            <h3>The story so far</h3>
            <p>
              A couple of sentences on how you approach a project, what you
              value, and what led you here. Keep it short — this card rewards
              restraint.
            </p>
          </div>

          {/* CONTACT CARD — EDIT: email address / CTA copy */}
          <div
            id="contact"
            ref={registerCard}
            className="card card--contact span-1c span-1r"
          >
            <h3>Let's work together</h3>
            <a className="btn" href="mailto:arvindhcm7@gmail.com">
              Contact
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
          </div>

          {/* SOCIALS CARD — EDIT: your real profile links.
              Sized at span-2r so the last link keeps its bottom padding;
              it has enough headroom for a 3rd link without growing further. */}
          <div ref={registerCard} className="card card--socials ">
            <p className="eyebrow">Find me</p>
            <div className="social-list">
              {/* <a
                href="https://x.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter <span className="arrow">→</span>
              </a> */}
              <a
                href="https://linkedin.com/in/arvindhcm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-label">
                  <img
                    src={linkedinIcon}
                    alt=""
                    className="social-icon"
                    aria-hidden="true"
                  />
                  LinkedIn
                </span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
