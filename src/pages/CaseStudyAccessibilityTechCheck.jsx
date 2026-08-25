import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/case-study.css';

export default function CaseStudyAccessibilityTechCheck() {
  useEffect(() => {
    document.title = 'Case Study — Art Accessibility Workflow | John Pendergrass';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-root">
      <header className="cs-header">
        <div className="cs-header-brand">AI Tooling &amp; Accessibility Case Study</div>
        <nav className="cs-nav">
          <a href="#challenge">Challenge</a>
          <a href="#workflow">Workflow</a>
          <a href="#solution">Solution</a>
          <a href="#results">Results</a>
          <a href="#lessons">Lessons</a>
          <Link to="/" className="cs-header-back">← Portfolio</Link>
        </nav>
      </header>

      <section className="cs-hero">
        <div className="cs-hero-inner">
          <p className="cs-hero-label">Director of Project Management &nbsp;·&nbsp; EdTech &nbsp;·&nbsp; 2023–2024</p>
          <h1>Art Accessibility<br /><em>Workflow</em></h1>
          <div className="cs-hero-bottom">
            <p className="cs-hero-sub">
              How a purpose-built WCAG 2.2 GPT reduced art-accessibility revision rounds from an
              average of three to zero — saving an estimated $75K and fundamentally changing how
              an EdTech company&apos;s art team approached accessibility compliance from day one.
            </p>
            <div className="cs-hero-meta">
              <div className="cs-meta-chip">Role: <span>Director, Project Management</span></div>
              <div className="cs-meta-chip">Framework: <span>WCAG 2.2</span></div>
              <div className="cs-meta-chip">Tool: <span>Custom GPT (OpenAI)</span></div>
              <div className="cs-meta-chip">Outcome: <span>Revision Rounds 3 → 0</span></div>
            </div>
          </div>
          <div className="cs-hero-stats">
            <div className="cs-stat"><div className="cs-stat-num">$75K</div><div className="cs-stat-label">Estimated Savings</div></div>
            <div className="cs-stat"><div className="cs-stat-num">3 → 0</div><div className="cs-stat-label">Avg. Revision Rounds</div></div>
            <div className="cs-stat"><div className="cs-stat-num">WCAG 2.2</div><div className="cs-stat-label">Compliance Framework</div></div>
            <div className="cs-stat"><div className="cs-stat-num">100%</div><div className="cs-stat-label">Assets Reviewed Pre-Delivery</div></div>
          </div>
        </div>
      </section>

      <div className="cs-section-inner" style={{ paddingTop: '2rem', paddingBottom: 0 }}>
        <div className="cs-ip-notice">
          <strong>Portfolio Note:</strong> This case study describes original methodology and tooling developed in the role of Director of Project Management. Company identities are anonymised. No proprietary assets, accessibility documents, or trade secrets belonging to any former employer are reproduced herein. All references to compliance standards reflect publicly documented WCAG 2.2 guidelines.
        </div>
      </div>

      <section id="challenge">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">01 — The Problem</p>
          <h2>Art assets were failing accessibility review — repeatedly.</h2>
          <p>
            A leading EdTech platform produces a high volume of educational art assets:
            illustrations, diagrams, icons, and visual learning materials that ship inside a
            curriculum product used by thousands of students and educators.
          </p>
          <p>
            These assets are subject to WCAG 2.2 accessibility standards — specifically
            requirements around color contrast, alt-text accuracy, and visual clarity for users
            with disabilities. The existing review process was entirely human-driven and
            sequential: artists would submit work, an accessibility reviewer would evaluate it
            against WCAG standards, and revisions would be requested if the asset failed.
          </p>
          <div className="cs-callout">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;The problem wasn&apos;t that artists didn&apos;t care about accessibility — it was that they didn&apos;t have the tools to catch issues before submission. The cost was in the cycles, not the intent.&rdquo;</p>
          </div>
          <p>
            On average, each art asset that failed review required <strong>three rounds of
            revision</strong> before it passed. Multiply that by the volume of assets in a typical
            sprint cycle and the cost — in reviewer time, artist time, and delayed delivery — was
            significant, estimated at <strong>$75K in overhead annually</strong>.
          </p>
          <p>
            The deeper issue was structural: accessibility was a gate at the end of the process
            rather than a lens throughout it. Artists were designing without real-time feedback on
            compliance, which meant problems were discovered too late to fix cheaply.
          </p>
        </div>
      </section>

      <section id="workflow">
        <div className="cs-section-inner" style={{ maxWidth: '960px' }}>
          <p className="cs-eyebrow">02 — The Workflow</p>
          <h2>A sequential process with no accessibility signal until the end.</h2>
          <p>
            The pre-intervention art workflow moved linearly through five stages, with
            accessibility review as a discrete gate rather than an embedded check.
          </p>

          <h3>Before: five sequential stages</h3>
          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Art Director — Briefs artists on asset requirements</div>
                <div className="cs-phase-desc">Learning objectives, visual style, and curriculum context provided at kickoff.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Artist — Creates the asset</div>
                <div className="cs-phase-desc">Design work completed in isolation — no real-time accessibility feedback during creation.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Art Director — Reviews for creative quality</div>
                <div className="cs-phase-desc">First review pass focused on visual fidelity, curriculum alignment, and brand standards.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">4</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Accessibility Reviewer — Evaluates against WCAG 2.2</div>
                <div className="cs-phase-desc">First point at which accessibility is formally assessed. Failures trigger revision requests back to the artist.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">5</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Artist — Revises and resubmits</div>
                <div className="cs-phase-desc">Revision cycle repeats until asset passes. Average: 3 rounds before clearance.</div>
              </div>
            </div>
          </div>

          <div className="cs-callout">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;By the time an asset reached accessibility review, the artist had already moved on to the next piece. Context-switching back to fix compliance issues compounded the cost of every revision.&rdquo;</p>
          </div>
          <p>
            The workflow wasn&apos;t broken in intent — it was broken in structure. Accessibility
            was treated as a quality check rather than a design constraint, which meant it was
            always playing catch-up.
          </p>
        </div>
      </section>

      <section id="solution">
        <div className="cs-section-inner" style={{ maxWidth: '960px' }}>
          <p className="cs-eyebrow">03 — The Solution</p>
          <h2>A custom GPT trained on WCAG 2.2 — built for artists, not compliance officers.</h2>
          <p>
            Working within my role as Director of Project Management, I designed and built a
            custom GPT trained on the WCAG 2.2 guidelines — specifically calibrated for the kinds
            of art assets our team was producing. The goal was to give artists a tool they could
            use during creation, not after submission.
          </p>

          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Training scope</div>
                <div className="cs-phase-desc">The GPT was grounded in WCAG 2.2 success criteria most relevant to educational illustration: color contrast ratios (1.4.3, 1.4.6, 1.4.11), non-text content alt-text guidance (1.1.1), use of color as the sole conveyor of meaning (1.4.1), and focus visibility for interactive elements (2.4.11, 2.4.12). It was not a general-purpose accessibility tool — it was scoped to the specific failure patterns our team was seeing most often.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Integration into the art workflow</div>
                <div className="cs-phase-desc">The GPT was embedded into the workflow at Step 2 — during asset creation, before the first Art Director review. Artists could submit work-in-progress images or describe design decisions, and the GPT would flag potential WCAG conflicts and suggest remediation before the asset was ever submitted for formal review.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Prompt engineering for non-technical users</div>
                <div className="cs-phase-desc">Artists are not compliance specialists. The GPT was prompted to return feedback in plain, action-oriented language — not regulatory citations. &ldquo;This color combination may not meet contrast requirements for users with low vision. Consider increasing the contrast ratio or using the alternative palette provided below&rdquo; rather than &ldquo;Fail: SC 1.4.3, contrast ratio 2.8:1 &lt; 4.5:1 required.&rdquo;</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">4</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Workflow restructure</div>
                <div className="cs-phase-desc">With the GPT in place, the accessibility review step shifted from a late-stage gate to an early-stage signal. Formal accessibility review by a human reviewer was retained — but its role changed from finding problems to confirming that the GPT-assisted pre-check had worked. The result was a dramatic reduction in formal review failures.</div>
              </div>
            </div>
          </div>

          <h3>After: accessibility baked in from step one</h3>
          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Art Director — Briefs artists on asset requirements</div>
                <div className="cs-phase-desc">Learning objectives, visual style, curriculum context — and accessibility constraints — provided at kickoff.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Artist — Creates asset with GPT as live accessibility check</div>
                <div className="cs-phase-desc">WCAG 2.2 GPT provides real-time feedback during creation. Most issues resolved before first submission.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Art Director — Reviews for creative quality + accessibility pre-check</div>
                <div className="cs-phase-desc">Art Director confirms GPT-flagged issues have been addressed before submitting to formal review.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">4</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Accessibility Reviewer — Confirms compliance</div>
                <div className="cs-phase-desc">Formal review now functions as confirmation rather than discovery. Near-zero revision requests.</div>
              </div>
            </div>
          </div>

          <div className="cs-callout cs-callout-amber">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;The revision cycle didn&apos;t just shrink — it nearly disappeared. When artists have the right feedback at the right time, they build accessibility into the work rather than retrofitting it.&rdquo;</p>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">04 — Outcomes</p>
          <h2>Three revision rounds to zero.</h2>
          <p>The impact was immediate and measurable. Within the first sprint cycles after GPT integration:</p>
          <ul>
            <li>Average art-accessibility revision rounds dropped from 3 to 0 — the most direct measure of the GPT&apos;s effectiveness.</li>
            <li>Estimated $75K in annual overhead eliminated — calculated across reviewer time, artist revision time, and delivery delays.</li>
            <li>Formal accessibility review shifted from problem discovery to compliance confirmation — reducing reviewer cognitive load and freeing capacity for more complex accessibility work.</li>
            <li>Artists reported higher confidence in submissions — knowing they had a compliance check available during creation, not just after.</li>
            <li>Accessibility compliance became a design constraint rather than a gate — a fundamental shift in how the team understood their work.</li>
            <li>The GPT became a training artifact — new artists used it to build WCAG literacy organically, reducing the onboarding burden on the accessibility team.</li>
          </ul>
          <h3>Tools &amp; methods</h3>
          <div className="cs-tech-list">
            <span className="cs-tech-tag">Custom GPT (OpenAI)</span>
            <span className="cs-tech-tag">WCAG 2.2</span>
            <span className="cs-tech-tag">Prompt Engineering</span>
            <span className="cs-tech-tag">Instructional Design</span>
            <span className="cs-tech-tag">Workflow Design</span>
            <span className="cs-tech-tag">Agile Sprint Management</span>
            <span className="cs-tech-tag">Accessibility Review</span>
            <span className="cs-tech-tag">Process Optimization</span>
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
              <p>Root cause analysis of the revision feedback loop; mapping the accessibility standards document against checks an AI agent could own vs. those requiring human judgement; custom GPT design, training scope, and prompt engineering; workflow redesign; stakeholder alignment across Art and Accessibility teams.</p>
            </div>
            <div className="cs-role-block">
              <h3>Design Philosophy</h3>
              <p>The agent was deliberately designed to complement human reviewers, not replace them. By moving compliance feedback to the point of creation, it freed the Accessibility team to focus on confirmation rather than discovery — while giving artists a tool that spoke their language, not a compliance officer&apos;s.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="lessons">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">06 — Reflection</p>
          <h2>What this project taught me about AI in the workplace.</h2>
          <p>
            The most important thing this project demonstrated wasn&apos;t technical — it was
            organizational. The same problem that caused artists to submit non-compliant work (no
            feedback during creation) was the same problem that made accessibility review expensive
            (too many surprises at the gate). The GPT didn&apos;t change the standard; it moved the
            feedback closer to the work.
          </p>
          <p>
            This is the pattern I look for when deploying AI tools in organizational workflows: not
            replacement, but repositioning. The accessibility reviewer&apos;s expertise didn&apos;t
            become less valuable — it became better applied. Human review was still the standard;
            AI moved the signal upstream so human review was confirming rather than discovering.
          </p>
          <p>
            Building the GPT also required deep collaboration with the accessibility review team to
            understand which WCAG criteria mattered most in practice, which failures were most
            common, and what language would actually land with a non-technical audience. The
            technical build was straightforward. The instructional design work — figuring out what
            to say, how to say it, and to whom — was where the real work happened.
          </p>
          <div className="cs-callout">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;AI tools that work in organizations are tools that speak the language of the people using them. The GPT wasn&apos;t useful because it knew WCAG — it was useful because it could translate WCAG into something an artist could act on.&rdquo;</p>
          </div>
        </div>
      </section>

      <footer className="cs-footer">
        <div className="cs-footer-inner">
          <div>
            <div className="cs-footer-label">IP &amp; Confidentiality</div>
            <p className="cs-footer-note">
              Original methodology and tooling developed in the role of Director of Project Management.
              Company identity anonymised. No proprietary assets or accessibility documents reproduced.
              WCAG references are publicly documented standards.
            </p>
          </div>
          <p className="cs-footer-note"><Link to="/">← Back to portfolio</Link></p>
        </div>
      </footer>
    </div>
  );
}
