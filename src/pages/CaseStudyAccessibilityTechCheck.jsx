import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/case-study.css';

export default function CaseStudyAccessibilityTechCheck() {
  useEffect(() => {
    document.title = 'Case Study — Accessibility Tech Check | John Pendergrass';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-root">
      <header className="cs-header">
        <div className="cs-header-brand">AI Integration Case Study</div>
        <nav className="cs-nav">
          <a href="#challenge">Challenge</a>
          <a href="#solution">Solution</a>
          <a href="#development">Development</a>
          <a href="#results">Results</a>
          <a href="#lessons">Lessons</a>
          <Link to="/" className="cs-header-back">← Portfolio</Link>
        </nav>
      </header>

      <section className="cs-hero">
        <div className="cs-hero-inner">
          <p className="cs-hero-label">Director of Project Management &nbsp;·&nbsp; EdTech &nbsp;·&nbsp; Custom GPT &nbsp;·&nbsp; WCAG 2.2</p>
          <h1>Accessibility<br /><em>Tech Check</em></h1>
          <div className="cs-hero-bottom">
            <p className="cs-hero-sub">
              Designed and deployed a fine-tuned Custom GPT agent that automated ADA and WCAG 2.2
              compliance review for 500,000+ digital art assets — eliminating a costly revision
              feedback loop and saving over $75K in operational costs.
            </p>
            <div className="cs-hero-meta">
              <div className="cs-meta-chip">Role: <span>Director, Project Management</span></div>
              <div className="cs-meta-chip">Team: <span>10 Artists · Accessibility Reviewers</span></div>
              <div className="cs-meta-chip">Platform: <span>Custom GPT + Python Fine-Tuning</span></div>
              <div className="cs-meta-chip">Compliance: <span>ADA · WCAG 2.2 by June 2027</span></div>
              <div className="cs-meta-chip">Outcome: <span>Feedback Loop Reduced 3 → 0</span></div>
            </div>
          </div>
          <div className="cs-hero-stats">
            <div className="cs-stat"><div className="cs-stat-num">500K+</div><div className="cs-stat-label">Art Assets in Scope</div></div>
            <div className="cs-stat"><div className="cs-stat-num">3 → 0</div><div className="cs-stat-label">Avg. Revision Cycles</div></div>
            <div className="cs-stat"><div className="cs-stat-num">$75K+</div><div className="cs-stat-label">Operational Cost Savings</div></div>
            <div className="cs-stat"><div className="cs-stat-num">10</div><div className="cs-stat-label">Artists Onboarded in Beta</div></div>
          </div>
        </div>
      </section>

      <div className="cs-section-inner" style={{ paddingTop: '2rem', paddingBottom: 0 }}>
        <div className="cs-ip-notice">
          <strong>Portfolio Note:</strong> This case study describes original methodology and tooling developed in the role of Director of Project Management. Company identities are anonymised. No proprietary assets, accessibility documents, or trade secrets belonging to any former employer are reproduced herein. All references to compliance standards reflect publicly documented WCAG 2.2 and ADA guidelines.
        </div>
      </div>

      <section id="challenge">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">01 — The Challenge</p>
          <h2>A feedback loop eating time and budget</h2>
          <p>
            A K–12 educational technology company faced a hard compliance deadline: all digital
            content on the platform needed to meet <strong>ADA accessibility standards</strong> and{' '}
            <strong>WCAG 2.2 guidelines</strong> by June 2027. With over <strong>500,000 art assets</strong>{' '}
            requiring review and update, the scale of the work was enormous.
          </p>
          <p>
            The established workflow placed the Accessibility team as quality gate: they reviewed each
            screen against an Accessibility Standards Document (ASD) and returned feedback to the Art team
            for remediation. In theory, the ASD gave artists a clear checklist. In practice, a damaging
            feedback loop had emerged.
          </p>
          <h3>The root cause: small things, compounding</h3>
          <p>
            Artists were missing individual line items on the ASD — not from carelessness, but
            because the document was dense and the checks were numerous. Missed items triggered a full
            revision cycle back through Accessibility review. Over time, the average number of revision
            rounds per asset had climbed to <strong>3</strong> — a significant drag on capacity,
            budget, and morale on both teams.
          </p>

          <div className="cs-split-table">
            <div className="cs-split-col">
              <div className="cs-split-head problem">The Problem Pattern</div>
              <div className="cs-split-item">Art team submits updated assets for Accessibility review</div>
              <div className="cs-split-item">Accessibility team finds missed ASD items</div>
              <div className="cs-split-item">Assets returned to Art team for another revision pass</div>
              <div className="cs-split-item">Cycle repeats — average 3 revolutions per asset</div>
              <div className="cs-split-item">Scope creep accumulates; deadline pressure increases</div>
              <div className="cs-split-item">$75K+ wasted in time and wages on avoidable rework</div>
            </div>
            <div className="cs-split-col">
              <div className="cs-split-head solution">The Required Solution</div>
              <div className="cs-split-item">Pre-flight QA check before assets reach Accessibility review</div>
              <div className="cs-split-item">ASD-aware: checks every item, not just obvious ones</div>
              <div className="cs-split-item">Detects contrast ratios, baked-in text, stroke/letter ratio</div>
              <div className="cs-split-item">Provides a scored report — pass/fail with percentage</div>
              <div className="cs-split-item">Educational: teaches artists <em>why</em> items fail</div>
              <div className="cs-split-item">Human-in-the-loop review remains the final gate</div>
            </div>
          </div>

          <div className="cs-callout cs-callout-amber">
            <div className="cs-callout-label">Key Insight</div>
            <p>The feedback loop was not a people problem — it was a tooling problem. Artists lacked a reliable way to self-check assets against the full ASD before submission. The solution needed to make compliance knowledge accessible, not just enforceable.</p>
          </div>
        </div>
      </section>

      <section id="solution">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">02 — Solution Design</p>
          <h2>A three-mode agent: QA, educator, and auditor</h2>
          <p>
            I designed and built a <strong>Custom GPT on ChatGPT</strong> that functioned as a pre-flight
            compliance agent for the Art team. The agent ingested the full Accessibility Standards Document
            at setup, retaining it as persistent context. Artists could submit asset screenshots or
            descriptions and receive a structured compliance report before sending anything to the
            Accessibility team.
          </p>

          <div className="cs-kb-grid">
            <div className="cs-kb-card">
              <div className="cs-kb-card-icon">Mode 01</div>
              <div className="cs-kb-card-title">Technical QA Check</div>
              <div className="cs-kb-card-desc">
                Evaluated each asset against every line item in the ASD. Checked contrast ratios,
                detected baked-in text, assessed stroke-to-letter ratio, and identified structural
                accessibility failures. Returned a percentage compliance score and a line-by-line pass/fail report.
              </div>
            </div>
            <div className="cs-kb-card">
              <div className="cs-kb-card-icon">Mode 02</div>
              <div className="cs-kb-card-title">Educational Explainer</div>
              <div className="cs-kb-card-desc">
                When an item failed, the agent explained <em>why</em> it failed — referencing the
                relevant WCAG 2.2 criterion, what the standard requires, and how to remediate the specific
                issue. Artists reported learning more about accessibility through the tool than through
                any previous training.
              </div>
            </div>
            <div className="cs-kb-card">
              <div className="cs-kb-card-icon">Mode 03</div>
              <div className="cs-kb-card-title">Pre-HIL Audit</div>
              <div className="cs-kb-card-desc">
                The agent served as a structured pre-check before the mandatory Human-in-the-Loop (HIL)
                review by the Accessibility team. It did not replace human judgement — it ensured
                the assets reaching human review were already clean on the mechanical checks that the
                agent could own reliably.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="development">
        <div className="cs-section-inner" style={{ maxWidth: '960px' }}>
          <p className="cs-eyebrow">03 — Development</p>
          <h2>Alpha, beta, and three Python fine-tunes</h2>
          <p>
            The agent did not ship at full capability on day one. Alpha and beta testing revealed three
            specific failure modes that required custom Python tooling to resolve. Each failure was
            diagnosed, a script was written, and the script was plugged into the agent's evaluation
            pipeline as a fine-tuning layer — extending what the model could reliably detect.
          </p>

          <div className="cs-diagram-wrap">
            <svg viewBox="0 0 860 300" xmlns="http://www.w3.org/2000/svg" fontFamily="DM Sans, sans-serif">
              <defs>
                <marker id="arr2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#00c8ff" opacity=".7" />
                </marker>
                <linearGradient id="cardGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#162040" />
                  <stop offset="100%" stopColor="#0f1830" />
                </linearGradient>
              </defs>

              <rect x="8" y="110" width="110" height="80" rx="8" fill="url(#cardGrad2)" stroke="rgba(0,200,255,.3)" strokeWidth="1" />
              <text x="63" y="140" textAnchor="middle" fill="#8492a6" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">INPUT</text>
              <text x="63" y="157" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Art Asset</text>
              <text x="63" y="172" textAnchor="middle" fill="#8492a6" fontSize="10">Screenshot / File</text>
              <line x1="118" y1="150" x2="138" y2="150" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr2)" opacity=".6" />

              <rect x="100" y="18" width="130" height="38" rx="6" fill="rgba(245,166,35,.08)" stroke="rgba(245,166,35,.3)" strokeWidth="1" strokeDasharray="4,3" />
              <text x="165" y="35" textAnchor="middle" fill="#f5a623" fontSize="9" fontFamily="DM Mono,monospace">Accessibility Standards</text>
              <text x="165" y="49" textAnchor="middle" fill="#f5a623" fontSize="9" fontFamily="DM Mono,monospace">Document (ASD)</text>
              <line x1="165" y1="56" x2="185" y2="108" stroke="#f5a623" strokeWidth="1" strokeDasharray="3,3" opacity=".6" markerEnd="url(#arr2)" />

              <rect x="142" y="90" width="126" height="120" rx="8" fill="url(#cardGrad2)" stroke="rgba(0,200,255,.5)" strokeWidth="1.4" />
              <text x="205" y="114" textAnchor="middle" fill="#00c8ff" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">CUSTOM GPT</text>
              <text x="205" y="132" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">ASD Evaluator</text>
              <text x="205" y="155" textAnchor="middle" fill="#8492a6" fontSize="9.5">Checks asset against</text>
              <text x="205" y="169" textAnchor="middle" fill="#8492a6" fontSize="9.5">every ASD line item,</text>
              <text x="205" y="183" textAnchor="middle" fill="#8492a6" fontSize="9.5">scores + explains</text>
              <line x1="268" y1="150" x2="288" y2="150" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr2)" opacity=".6" />

              <rect x="292" y="68" width="260" height="164" rx="8" fill="rgba(255,255,255,.015)" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="5,4" />
              <text x="422" y="88" textAnchor="middle" fill="#506070" fontSize="9" fontFamily="DM Mono,monospace">Python Fine-Tuning Layer</text>

              <rect x="304" y="96" width="112" height="52" rx="6" fill="url(#cardGrad2)" stroke="rgba(0,200,255,.4)" strokeWidth="1" />
              <text x="360" y="116" textAnchor="middle" fill="#00c8ff" fontSize="8.5" fontFamily="DM Mono,monospace">Script 01</text>
              <text x="360" y="130" textAnchor="middle" fill="#f0f4fa" fontSize="10" fontWeight="600">Contrast Ratio</text>
              <text x="360" y="143" textAnchor="middle" fill="#8492a6" fontSize="8.5">Pixel-level detection</text>

              <rect x="304" y="160" width="112" height="52" rx="6" fill="url(#cardGrad2)" stroke="rgba(0,200,255,.4)" strokeWidth="1" />
              <text x="360" y="180" textAnchor="middle" fill="#00c8ff" fontSize="8.5" fontFamily="DM Mono,monospace">Script 02</text>
              <text x="360" y="194" textAnchor="middle" fill="#f0f4fa" fontSize="10" fontWeight="600">Baked-In Text</text>
              <text x="360" y="207" textAnchor="middle" fill="#8492a6" fontSize="8.5">OCR-based detection</text>

              <rect x="428" y="128" width="112" height="52" rx="6" fill="url(#cardGrad2)" stroke="rgba(0,200,255,.4)" strokeWidth="1" />
              <text x="484" y="148" textAnchor="middle" fill="#00c8ff" fontSize="8.5" fontFamily="DM Mono,monospace">Script 03</text>
              <text x="484" y="162" textAnchor="middle" fill="#f0f4fa" fontSize="10" fontWeight="600">Stroke / Letter</text>
              <text x="484" y="175" textAnchor="middle" fill="#8492a6" fontSize="8.5">Ratio measurement</text>

              <line x1="552" y1="150" x2="572" y2="150" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr2)" opacity=".6" />

              <rect x="576" y="96" width="126" height="108" rx="8" fill="url(#cardGrad2)" stroke="rgba(0,200,255,.6)" strokeWidth="1.4" />
              <text x="639" y="120" textAnchor="middle" fill="#00c8ff" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">REPORT</text>
              <text x="639" y="138" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Scored Output</text>
              <text x="639" y="158" textAnchor="middle" fill="#8492a6" fontSize="9.5">% compliance score</text>
              <text x="639" y="172" textAnchor="middle" fill="#8492a6" fontSize="9.5">Pass/fail per item</text>
              <text x="639" y="186" textAnchor="middle" fill="#8492a6" fontSize="9.5">Remediation guidance</text>
              <line x1="702" y1="150" x2="722" y2="150" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr2)" opacity=".6" />

              <rect x="726" y="108" width="120" height="84" rx="8" fill="rgba(0,200,255,.07)" stroke="rgba(0,200,255,.5)" strokeWidth="1.5" />
              <text x="786" y="130" textAnchor="middle" fill="#00c8ff" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">HIL REVIEW</text>
              <text x="786" y="148" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Accessibility</text>
              <text x="786" y="163" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Team Gate</text>
              <text x="786" y="181" textAnchor="middle" fill="#8492a6" fontSize="9.5">Final approval</text>

              <rect x="142" y="240" width="560" height="28" rx="6" fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
              <text x="422" y="259" textAnchor="middle" fill="#506070" fontSize="9.5" fontFamily="DM Mono,monospace">Alpha testing → Beta testing → Team rollout → Feedback loop eliminated</text>
            </svg>
          </div>

          <h3>The three failure modes — and how they were fixed</h3>
          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">P1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Failure: Contrast Ratio Recognition</div>
                <div className="cs-phase-desc">During alpha testing, the agent could not reliably compute contrast ratios between foreground and background colours — particularly in complex gradient backgrounds or semi-transparent UI layers. It would misreport or approximate ratios in ways that would pass assets that should fail the WCAG 2.2 minimum (4.5:1 for normal text, 3:1 for large text). A Python script was written to perform pixel-level colour sampling and compute the exact WCAG contrast ratio, feeding the calculated value back to the agent rather than asking the model to estimate it visually.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">P2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Failure: Baked-In Text Detection</div>
                <div className="cs-phase-desc">"Baked-in text" — text rendered directly into an image rather than as a separate text layer — is an accessibility concern because it cannot be resized, reformatted, or read by screen readers without alt-text. The agent consistently failed to flag baked-in text because it was processing the asset as an image and lacked the ability to distinguish rasterised type from illustrative elements. A Python OCR script was written to scan each asset for embedded text regions, flagging them with bounding boxes and passing the detection output to the agent as structured context.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">P3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Failure: Stroke-to-Letter Ratio</div>
                <div className="cs-phase-desc">The ASD included a requirement around the ratio between stroke weight and letter size — a typographic accessibility check that ensures letterforms remain legible at small sizes and for users with low vision. The agent was incorrectly evaluating this by comparing stroke colour contrast to the letter's fill colour, rather than measuring the geometric relationship between stroke width and the cap height of the character. A Python script was written to perform the geometric measurement on detected text regions, producing a numeric ratio that the agent could then evaluate cleanly against the ASD threshold.</div>
              </div>
            </div>
          </div>

          <div className="cs-callout">
            <div className="cs-callout-label">Engineering Rationale</div>
            <p>Each Python script followed the same pattern: isolate the measurement the model couldn't make reliably, compute it programmatically, and return a structured result the agent could reason against. This kept the agent's role in its strength zone — contextual reasoning and explanation — while offloading precise technical measurement to deterministic code.</p>
          </div>

          <h3>Development timeline</h3>
          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Problem Identification &amp; Design <span className="cs-phase-date">Early 2025</span></div>
                <div className="cs-phase-desc">Identified the revision feedback loop as the root cause of scope creep and budget drain. Mapped the ASD against the types of checks an AI agent could own vs. those requiring human judgement. Defined the three-mode agent architecture: QA check, educational explainer, and pre-HIL audit. Chose Custom GPT as the delivery platform for accessibility by non-technical art team members.</div>
                <div className="cs-phase-solo">Solo phase — Director of Project Management</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Alpha Build &amp; Failure Mode Discovery <span className="cs-phase-date">Alpha Testing</span></div>
                <div className="cs-phase-desc">Configured the Custom GPT with the full ASD as persistent context. Ran structured alpha testing against a representative sample of art assets. Identified all three core failure modes: contrast ratio approximation, baked-in text blindness, and stroke/letter ratio misinterpretation. Documented each failure with reproducible test cases before writing any remediation code.</div>
                <div className="cs-phase-solo">Solo phase — Director of Project Management</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Python Fine-Tuning — Three Scripts <span className="cs-phase-date">Alpha → Beta</span></div>
                <div className="cs-phase-desc">Wrote and integrated three Python scripts — one per failure mode — as evaluation-layer extensions to the agent. Each script was tested against the alpha failure cases and validated against ground-truth WCAG measurements before integration. Beta testing confirmed all three failure modes resolved and no new regressions introduced.</div>
                <div className="cs-phase-solo">Solo phase — Director of Project Management</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">4</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Beta Test — Pass &amp; Stakeholder Sign-Off <span className="cs-phase-date">Beta Completion</span></div>
                <div className="cs-phase-desc">Ran a full beta test with a controlled asset set spanning the range of failure modes identified in alpha. Agent passed all test cases. Presented results to Art team lead and Accessibility team lead. Both stakeholders signed off on the agent as fit for team rollout. Defined the HIL handoff protocol: agent pre-check is required before any asset enters the Accessibility review queue.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">5</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Team Rollout — 10 Artists, 2 Months <span className="cs-phase-date">Production</span></div>
                <div className="cs-phase-desc">Rolled the agent out to all 10 artists on the team. Provided onboarding documentation and a live walkthrough session. Monitored adoption, gathered structured feedback at the one-month and two-month marks. Over the two-month production period, the average revision cycle count fell from 3 to 0. Artists reported the agent was genuinely useful — citing both its QA accuracy and its educational explanations as valuable. The VP confirmed the tool had saved over $75K in wages and time previously lost to revision scope creep.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">04 — Results</p>
          <h2>From 3 revision cycles to zero</h2>
          <div className="cs-kpi-grid">
            <div className="cs-kpi-card"><div className="cs-kpi-val">0</div><div className="cs-kpi-label">Average revision cycles after rollout (down from 3)</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">$75K+</div><div className="cs-kpi-label">Operational cost savings confirmed by company VP</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">10</div><div className="cs-kpi-label">Artists using the agent in production</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">3</div><div className="cs-kpi-label">Python scripts fine-tuning the agent's detection capability</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">2 mo.</div><div className="cs-kpi-label">Time from rollout to full feedback loop elimination</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">500K+</div><div className="cs-kpi-label">Art assets in scope for WCAG 2.2 compliance by June 2027</div></div>
          </div>

          <div className="cs-callout">
            <div className="cs-callout-label">Artist Feedback</div>
            <p>At the two-month mark, artists described the agent as a tool that "catches things before they go back for review" — exactly the design intent. Several also noted that working with the agent had materially improved their understanding of accessibility standards, describing it as more educational than any formal training they had received on the subject.</p>
          </div>

          <h3>Technology stack</h3>
          <div className="cs-tech-list">
            <span className="cs-tech-tag">Custom GPT (ChatGPT)</span>
            <span className="cs-tech-tag">Python</span>
            <span className="cs-tech-tag">OCR (Baked-In Text Detection)</span>
            <span className="cs-tech-tag">Pixel-Level Contrast Analysis</span>
            <span className="cs-tech-tag">Typographic Ratio Measurement</span>
            <span className="cs-tech-tag">WCAG 2.2</span>
            <span className="cs-tech-tag">ADA Compliance</span>
            <span className="cs-tech-tag">Prompt Engineering</span>
            <span className="cs-tech-tag">Human-in-the-Loop (HIL)</span>
            <span className="cs-tech-tag">Agent Fine-Tuning</span>
          </div>
        </div>
      </section>

      <section>
        <div className="cs-section-inner">
          <p className="cs-eyebrow">05 — Role &amp; Approach</p>
          <h2>Director of Project Management</h2>
          <div className="cs-role-card">
            <div className="cs-role-block">
              <h3>My Responsibilities</h3>
              <p>Full agent design, build, and iteration from problem identification through production rollout. Root cause analysis of the feedback loop; ASD analysis and agent architecture; Custom GPT configuration; alpha and beta test design; all three Python fine-tuning scripts; stakeholder alignment and sign-off; team onboarding and rollout; outcome measurement and VP reporting.</p>
            </div>
            <div className="cs-role-block">
              <h3>Design Philosophy</h3>
              <p>The agent was deliberately designed to complement human reviewers, not replace them. By handling the mechanical, rule-based checks that the ASD described precisely, it freed the Accessibility team to focus on judgement calls that genuinely required human expertise — while ensuring artists could self-serve on the compliance checks they had historically been missing.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="lessons">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">06 — Lessons Learned</p>
          <h2>What I'd tell myself at the start</h2>
          <h3>What worked well</h3>
          <ul>
            <li><strong>Diagnose before you build.</strong> Taking time to reproduce each failure mode as a documented test case before writing code meant every script addressed a real, validated problem rather than a hypothesis.</li>
            <li><strong>Offload measurement to code, leave reasoning to the model.</strong> The agent performed well when it was reasoning about structured inputs. It underperformed when asked to make precise visual measurements. Python fixed the measurement layer; the model handled everything above it.</li>
            <li><strong>Design for education, not just compliance.</strong> The decision to make the agent explain failures — not just flag them — drove meaningful capability growth in the Art team. The tool became a training resource, not just a gate.</li>
            <li><strong>HIL as a design principle, not an afterthought.</strong> Keeping the Accessibility team's review as a mandatory final gate preserved trust in the workflow and meant the agent's role was clearly bounded from day one.</li>
          </ul>
          <h3>Challenges navigated</h3>
          <ul>
            <li>Getting artists comfortable using an AI tool required a deliberate onboarding session — the walkthrough format, rather than written documentation alone, was critical to early adoption.</li>
            <li>The stroke-to-letter ratio script required multiple iterations to correctly isolate cap height as the reference measurement rather than overall glyph bounding box height.</li>
            <li>Calibrating the agent's explanatory tone took prompt engineering iteration — early versions were too technical for an art audience; later versions struck the right balance between precise and accessible.</li>
          </ul>
          <h3>Future opportunities</h3>
          <ul>
            <li><strong>Expand detection scope:</strong> Additional ASD checks — such as alt-text validation and focus indicator visibility — could be added as further Python modules.</li>
            <li><strong>Asset-level tracking:</strong> Integrating the agent's pass/fail output with a project management dashboard would give leadership real-time visibility into compliance progress across the 500K+ asset backlog.</li>
            <li><strong>Cross-team deployment:</strong> The same architecture could serve other content teams — video, animation, UI — with ASD modules specific to each medium.</li>
          </ul>
        </div>
      </section>

      <footer className="cs-footer">
        <div className="cs-footer-inner">
          <div>
            <div className="cs-footer-label">IP &amp; Confidentiality</div>
            <p className="cs-footer-note">
              Original methodology and tooling. Company identity anonymised.
              No proprietary assets or accessibility documents reproduced. WCAG and ADA references are publicly documented standards.
            </p>
          </div>
          <p className="cs-footer-note"><Link to="/">← Back to portfolio</Link></p>
        </div>
      </footer>
    </div>
  );
}
