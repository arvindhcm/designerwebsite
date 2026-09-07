import { useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CursorTrail from "./components/CursorTrail.jsx";
import FooterPhysics from "./components/FooterPhysics.jsx";
import Cover from "./components/Cover.jsx";
import profilePic from "./components/assets/myprofilepic.jpeg";
import CaseStudyRunbooks from "./work/runbooks/CaseStudyRunbooks.jsx";
import "./App.css";
import thumbnail from "./work/runbooks/assets/thumbnail.png";
import runbookDemo from "./work/runbooks/assets/runbookDemo.mp4";
import canvasWide from "./work/runbooks/assets/canvasWide.png";

import linkedinIcon from "./assets/linkedin.svg";
import zohoLogo from "./assets/zoho.svg";
import superopsLogo from "./assets/SuperOps.svg";
import figmaLogo from "./assets/tools/figma.svg";
import framerLogo from "./assets/tools/framer.svg";
import reactLogo from "./assets/tools/react.svg";
import webflowLogo from "./assets/tools/webflow.svg";
import notionLogo from "./assets/tools/notion.svg";
import linearLogo from "./assets/tools/linear.svg";
import claudeLogo from "./assets/tools/claude.svg";
import claudeCodeLogo from "./assets/tools/claudecode.svg";
import htmlLogo from "./assets/tools/html5.svg";
import cssLogo from "./assets/tools/css3.svg";
import sassLogo from "./assets/tools/sass.svg";
import jsLogo from "./assets/tools/javascript.svg";
import githubLogo from "./assets/tools/github.svg";

// EDIT: swap/add entries to match the "Tools" card above — each drops in,
// settles, and scatters when you hover near it in the footer.
const FOOTER_LOGOS = [
  { url: figmaLogo, shape: "circle", size: 48, count: 2 },
  { url: framerLogo, shape: "square", size: 44, count: 2 },
  { url: reactLogo, shape: "circle", size: 46, count: 2 },
  { url: webflowLogo, shape: "square", size: 44, count: 2 },
  { url: notionLogo, shape: "circle", size: 44, count: 2 },
  { url: linearLogo, shape: "square", size: 42, count: 2 },
  { url: claudeLogo, shape: "circle", size: 46, count: 2 },
  { url: claudeCodeLogo, shape: "square", size: 44, count: 2 },
  { url: htmlLogo, shape: "circle", size: 44, count: 2 },
  { url: cssLogo, shape: "circle", size: 44, count: 2 },
  { url: sassLogo, shape: "square", size: 42, count: 2 },
  { url: jsLogo, shape: "square", size: 44, count: 2 },
  { url: githubLogo, shape: "circle", size: 46, count: 2 },
];

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
      <header className="site-nav">
        <div className="wrap">
          <div className="logo"></div>
          <nav className="links">
            <a href="#work1">Work</a>
            <a id="aboutpagelink" href="#about">
              About
            </a>
            <a href="#contact">Contact</a>
          </nav>
          <div></div>
        </div>
      </header>

      {/* <Cover /> */}

      <main className="wrap">
        <div className="bento">
          {/* PROFILE CARD — EDIT: your name, role, initials */}
          <div
            ref={registerCard}
            className="card card--profile span-2c span-2r"
          >
            <div className="flex items-center">
              <img
                src={profilePic}
                alt="Arvindh C M"
                className="avatar mt-5 size-16 rounded-full object-cover"
              />
              <div className="ml-3">
                <h1>Arvindh C M</h1>
                <div className="role">Product Designer / UX Engineer</div>
              </div>
            </div>

            <p className="lede">
              I’m a product designer who loves crafting calm, clear experiences
              that users love and teams trust. I design with a systems mindset
              simplifying complex workflows, elevating visual clarity, and
              shaping products that scale with intention. Currently at Superops,
              designing AI native ticketing platform. Previously at Zoho.
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
            className="card card--experience span-2c span-1r"
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
              <span className="tag">React</span>
              <span className="tag">Html5</span>
              <span className="tag">css</span>
              <span className="tag">sass</span>
              <span className="tag">Linear</span>
              <span className="tag">Claude Design</span>
              <span className="tag">Claude Code</span>
            </div>
          </div>

          {/* META CARD — EDIT: experience, focus, location */}
          <div ref={registerCard} className="card card--meta span-1c span-1r">
            {/* <p className="eyebrow">Experience</p> */}
            <div className="meta-row">
              <div>
                <h2
                  className="font-medium
"
                >
                  7+yrs
                </h2>
                <div className="value-sub">⏳ Exp</div>
              </div>
              <div className="label">Design &amp; development</div>
            </div>
            <div className="meta-row">
              <div>
                <h2 className="font-medium">Chennai</h2>
                <div className="value-sub ">📍Location</div>
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
              <span className="work-tag">2024 - 2025</span>
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
          {/* <div
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
              <span className="work-tag">2023</span>
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
            /> */}
          {/* <img
              className="work-thumb"
              src={thumbnail}
              alt="Close-up of the runbook canvas with checklist and script nodes"
              loading="lazy"
            /> */}
          {/* </div> */}

          {/* ABOUT CARD — EDIT: your story */}
          <div
            id="about"
            ref={registerCard}
            className="card card--about span-3c span-2r flex justify-between"
          >
            <div>
              {/* <p className="eyebrow">About</p> */}
              <h3>The story so far</h3>
            </div>
            <p>
              Started out untangling complex ETL workflows and SQL editors at
              Zoho , learning that good design is really about making hard
              things feel obvious. That systems thinking followed me to
              SuperOps, where I've spent the last two years building an
              AI-native ticketing platform from scratch. Somewhere between
              shipping Runbooks and chasing state sync bugs, I found the kind of
              work I actually want to keep doing.{" "}
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

          {/* HOBBIES CARD — EDIT: what you get up to outside of design */}
          <div
            ref={registerCard}
            className="card card--hobbies span-1c span-1r"
          >
            <p className="eyebrow">Off the clock</p>
            <div className="tag-grid">
              <span className="tag">
                <span aria-hidden="true">⚽</span> Football
              </span>
              {/* <span className="tag">
                <span aria-hidden="true">🎾</span> Football
              </span> */}
              <span className="tag">
                <span aria-hidden="true">🏔️</span> Mountain drives
              </span>
            </div>
          </div>

          {/* SOCIALS CARD — EDIT: your real profile links.
              Sized at span-2r so the last link keeps its bottom padding;
              it has enough headroom for a 3rd link without growing further. */}
          <div ref={registerCard} className="card card--socials span-2r">
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
              <a href="tel:+916384769554">
                ☎️ +91 6384769554 <span className="arrow">→</span>
              </a>
              <a href="mailto:arvindhcm7@gmail.com">
                📧 arvindhcm7@gmail <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <FooterPhysics logos={FOOTER_LOGOS} />
        {/* <div className="wrap site-footer-line">
          <span>© {year} · Built by hand</span>
        </div> */}
      </footer>
    </>
  );
}
