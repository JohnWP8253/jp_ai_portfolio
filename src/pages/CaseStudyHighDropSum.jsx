import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/case-study.css';

export default function CaseStudyHighDropSum() {
  useEffect(() => {
    document.title = 'Case Study — High Drop Sum | John Pendergrass';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-root">
      <header className="cs-header">
        <div className="cs-header-brand">Data Analysis &amp; Instructional Design Case Study</div>
        <nav className="cs-nav">
          <a href="#challenge">Problem</a>
          <a href="#research">Research</a>
          <a href="#solution">Solution</a>
          <a href="#results">Results</a>
          <a href="#lessons">Reflection</a>
          <Link to="/" className="cs-header-back">← Portfolio</Link>
        </nav>
      </header>

      <section className="cs-hero">
        <div className="cs-hero-inner">
          <p className="cs-hero-label">Sr. Manager of Program Performance &amp; Success &nbsp;·&nbsp; EdTech &nbsp;·&nbsp; 2022–2023</p>
          <h1>High Drop<br /><em>Sum</em></h1>
          <div className="cs-hero-bottom">
            <p className="cs-hero-sub">
              How a custom KPI, cross-functional touchpoint mapping, and a rapid-response tiger
              team reduced intro-course attrition — and saved cohorts from cancellation.
            </p>
            <div className="cs-hero-meta">
              <div className="cs-meta-chip">Role: <span>Sr. Manager, Program Performance</span></div>
              <div className="cs-meta-chip">Course: <span>10-Day Intro Program</span></div>
              <div className="cs-meta-chip">Departments: <span>5+ Coordinated</span></div>
              <div className="cs-meta-chip">Outcome: <span>+10% Attendance</span></div>
            </div>
          </div>
          <div className="cs-hero-stats">
            <div className="cs-stat"><div className="cs-stat-num">HDS</div><div className="cs-stat-label">New KPI Designed &amp; Implemented</div></div>
            <div className="cs-stat"><div className="cs-stat-num">5+</div><div className="cs-stat-label">Departments Coordinated</div></div>
            <div className="cs-stat"><div className="cs-stat-num">10</div><div className="cs-stat-label">Day Intro Course, Every Shift Tracked</div></div>
            <div className="cs-stat"><div className="cs-stat-num">+10%</div><div className="cs-stat-label">Increase In Course Attendance</div></div>
          </div>
        </div>
      </section>

      <div className="cs-section-inner" style={{ paddingTop: '2rem', paddingBottom: 0 }}>
        <div className="cs-ip-notice">
          <strong>Portfolio Note:</strong> This case study describes original methodology developed in the role of Sr. Manager of Program Performance &amp; Success. Company and client identities are anonymised. No proprietary data, dashboards, or trade secrets belonging to any former employer are reproduced herein.
        </div>
      </div>

      <section id="challenge">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">01 — The Problem</p>
          <h2>Students weren&apos;t finishing the intro course — and nobody knew why.</h2>
          <p>
            A leading EdTech company offered a free 10-day introductory course designed to give
            prospective students a taste of its software development and cybersecurity programs.
            The expectation was straightforward: students who completed all 10 classes would be
            better positioned to commit to the full course.
          </p>
          <p>
            The reality was different. Students were dropping out at high rates before completing
            the 10 days — often in the first half of the course. When cohorts didn&apos;t have
            enough continuing students, they were postponed or cancelled, creating downstream
            problems for scheduling, staffing, and revenue.
          </p>
          <div className="cs-callout">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;The existing feedback data wasn&apos;t objective and couldn&apos;t explain why students were dropping. We were measuring the wrong things — and not measuring the right things at all.&rdquo;</p>
          </div>
          <p>
            Exit surveys existed but were too generic to surface root cause. There was no
            class-by-class attendance tracking, no alert system, and no shared visibility across
            the departments that interacted with students during those 10 days.
          </p>
        </div>
      </section>

      <section id="research">
        <div className="cs-section-inner" style={{ maxWidth: '960px' }}>
          <p className="cs-eyebrow">02 — The Research</p>
          <h2>Mapping every touchpoint in the first five days revealed a barrage.</h2>
          <p>
            Working from a customer touchpoint map created by the marketing director, I overlaid
            every communication interaction that prospective students received during the intro
            course — from every department that touched them.
          </p>
          <p>
            What emerged was striking. Within the first four to five days — just half the course —
            students were being contacted by multiple departments on the same day, sometimes via
            text, email, and phone call all at once. Sales follow-ups, student success check-ins,
            and survey requests were all competing for student attention simultaneously.
          </p>

          <h3>Touchpoint overload: days 1–5</h3>
          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Sales</div>
                <div className="cs-phase-desc">Calls, texts, and emails on overlapping days.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Student Success</div>
                <div className="cs-phase-desc">Daily or near-daily check-in messages.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Surveys</div>
                <div className="cs-phase-desc">Mid-week pulse surveys in addition to program feedback forms.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">4</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Instructional Team</div>
                <div className="cs-phase-desc">Skills assessments and feedback requests layered on top.</div>
              </div>
            </div>
          </div>

          <div className="cs-callout cs-callout-amber">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;Students no longer felt like students — they felt like customers being sold a product. We were asking them to make a high-stakes financial decision while also testing them, surveying them, and implying they might not be good enough.&rdquo;</p>
          </div>
          <p>
            The instructional team&apos;s own touchpoints added to the burden. Feedback requests,
            skills assessments, and early evaluations in the first few days compounded the
            pressure rather than building confidence. The overall message students were receiving
            — intentional or not — was one of doubt and transaction, not support and growth.
          </p>
        </div>
      </section>

      <section id="solution">
        <div className="cs-section-inner" style={{ maxWidth: '960px' }}>
          <p className="cs-eyebrow">03 — The Solution</p>
          <h2>Two parallel workstreams: touchpoint redesign and a real-time attendance KPI.</h2>

          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Cross-functional touchpoint rationalization</div>
                <div className="cs-phase-desc">Working with marketing, student success, sales, software development, cybersecurity, and instructional design, we mapped which department would own which touchpoint on which day. The first two days were protected — students received a structured, calm onboarding focused entirely on learning, not evaluation or sales pressure.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Designing the High Drop Sum (HDS) KPI</div>
                <div className="cs-phase-desc">With a colleague, I designed a method to track shifts in daily attendance from one class to the next across all 10 days. Rather than looking at total attendance at the end of the course, HDS measured the delta between consecutive classes — surfacing drop-off as it happened, not after the fact.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Alert thresholds: yellow and red</div>
                <div className="cs-phase-desc">We established a baseline attendance pattern, then defined two alert tiers:</div>
                <ul style={{ marginTop: '0.6rem' }}>
                  <li><strong>Baseline (0–2 students):</strong> Normal attrition. No intervention required. Monitor next class.</li>
                  <li><strong>Yellow Alert (3–4 students):</strong> Elevated drop. Review communications log. Brief instructor check-in. Flag for tiger team awareness.</li>
                  <li><strong>Red Alert (5–6+ students):</strong> Critical drop. Immediate tiger team activation. Direct student outreach within 24 hours. Leadership notification.</li>
                </ul>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">4</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Tiger team for consecutive absences</div>
                <div className="cs-phase-desc">A dedicated task force was established to personally reach out to any student who missed two consecutive classes. The goal was truth-gathering: were they dealing with extenuating circumstances, or had something in the program failed them? This distinction was critical — it separated churn from fixable problems.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">5</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Instructor energy coaching</div>
                <div className="cs-phase-desc">Using insights from tiger team conversations, we coached instructors on how to open each class with high energy and maintain momentum throughout — especially in the first half of the course where HDS data showed the steepest drops.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">04 — Outcomes</p>
          <h2>What changed when we treated students like students.</h2>
          <p>
            The combined impact of reduced communication overload, real-time HDS tracking, and
            targeted instructor coaching produced measurable improvements across the student
            journey.
          </p>
          <ul>
            <li>First-half retention improved as early touchpoint reduction gave students psychological space to engage with learning rather than sales pressure.</li>
            <li>Cross-functional alignment achieved — for the first time, sales, student success, instructional design, and program leadership shared a single communication calendar.</li>
            <li>HDS provided real-time visibility where none existed before. Cohort health became actionable within 24 hours of each class.</li>
            <li>Tiger team outreach surfaced genuine root causes, separating systemic program failures from individual life circumstances.</li>
            <li>Instructor coaching reduced early energy drop-off, with classes beginning stronger through the critical first five days.</li>
            <li>Course attendance increased by 10% across intro cohorts, contributing to fewer postponed and cancelled courses.</li>
          </ul>
          <h3>Tools &amp; methods</h3>
          <div className="cs-tech-list">
            <span className="cs-tech-tag">KPI Design</span>
            <span className="cs-tech-tag">Touchpoint Mapping</span>
            <span className="cs-tech-tag">Cross-functional Leadership</span>
            <span className="cs-tech-tag">Data Analysis</span>
            <span className="cs-tech-tag">Qlik Cloud</span>
            <span className="cs-tech-tag">Instructional Design</span>
            <span className="cs-tech-tag">Agile Coordination</span>
            <span className="cs-tech-tag">Student Experience Design</span>
          </div>
        </div>
      </section>

      <section>
        <div className="cs-section-inner">
          <p className="cs-eyebrow">05 — Role &amp; Approach</p>
          <h2>Sr. Manager, Program Performance &amp; Success</h2>
          <div className="cs-role-card">
            <div className="cs-role-block">
              <h3>My Responsibilities</h3>
              <p>Touchpoint audit and cross-functional mapping; co-design of the High Drop Sum KPI and alert thresholds; tiger team formation and outreach protocol; instructor coaching program; stakeholder alignment across six departments.</p>
            </div>
            <div className="cs-role-block">
              <h3>Design Philosophy</h3>
              <p>The solution wasn&apos;t to eliminate outreach — it was to orchestrate it around the student&apos;s experience, not around departmental convenience. Measurement without response is just record-keeping; HDS was wired directly to action from day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="lessons">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">06 — Reflection</p>
          <h2>What this project was really about.</h2>
          <p>
            This wasn&apos;t just a data problem. It was a design problem — specifically, the
            design of the student experience during the most vulnerable moment in their journey:
            deciding whether to invest time, money, and belief in themselves.
          </p>
          <p>
            The HDS metric mattered because it was honest. It didn&apos;t smooth over the problem
            with averages or end-of-course rollups. It made the drop visible in real time, class
            by class, forcing the organization to confront attrition as it happened rather than
            after the damage was done.
          </p>
          <p>
            The deeper lesson was organizational: when every department optimizes for its own
            goals without coordination, the student pays the price. The solution wasn&apos;t to
            eliminate outreach — it was to orchestrate it around the student&apos;s experience, not
            around departmental convenience.
          </p>
          <div className="cs-callout">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;Measurement without response is just record-keeping. The HDS worked because it was wired directly to action — a tiger team, a coaching protocol, and a communication calendar that moved in response to the data.&rdquo;</p>
          </div>
        </div>
      </section>

      <footer className="cs-footer">
        <div className="cs-footer-inner">
          <div>
            <div className="cs-footer-label">IP &amp; Confidentiality</div>
            <p className="cs-footer-note">
              Original methodology developed in the role of Sr. Manager of Program Performance &amp; Success.
              Company identity anonymised. No proprietary data or dashboards reproduced.
            </p>
          </div>
          <p className="cs-footer-note"><Link to="/">← Back to portfolio</Link></p>
        </div>
      </footer>
    </div>
  );
}
