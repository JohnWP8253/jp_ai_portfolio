import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/case-study.css';

export default function CaseStudyCurriculumPipeline() {
  useEffect(() => {
    document.title = 'Case Study — MOB/GLOB Pipeline | John Pendergrass';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-root">
      <header className="cs-header">
        <div className="cs-header-brand">AI Integration Case Study</div>
        <nav className="cs-nav">
          <a href="#challenge">Challenge</a>
          <a href="#architecture">Architecture</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#results">Results</a>
          <a href="#lessons">Lessons</a>
          <Link to="/" className="cs-header-back">← Portfolio</Link>
        </nav>
      </header>

      <section className="cs-hero">
        <div className="cs-hero-inner">
          <p className="cs-hero-label">Director of AI Integration &nbsp;·&nbsp; EdTech &nbsp;·&nbsp; AI Engineering &amp; Agile Leadership &nbsp;·&nbsp; 2024–2025</p>
          <h1>MOB/GLOB<br /><em>Pipeline</em></h1>
          <div className="cs-hero-bottom">
            <p className="cs-hero-sub">
              How a two-person AI team shipped a serverless RAG + ETL pipeline on AWS Bedrock —
              processing module and grade-level overviews (MOBs and GLOBs) in under 8 seconds per
              module in parallel — then scaled it into production across a full K–5 curriculum
              using a purpose-built Agile framework for AI delivery.
            </p>
            <div className="cs-hero-meta">
              <div className="cs-meta-chip">Role: <span>Director, AI Integration</span></div>
              <div className="cs-meta-chip">Team: <span>2 Entry-Level Engineers</span></div>
              <div className="cs-meta-chip">Platform: <span>AWS Bedrock + Lambda + EventBridge</span></div>
              <div className="cs-meta-chip">Timeline: <span>Nov 2025 – Feb 2026 · 5 Sprints</span></div>
              <div className="cs-meta-chip">Translation: <span>DeepL API (EN → ES)</span></div>
            </div>
          </div>
          <div className="cs-hero-stats">
            <div className="cs-stat"><div className="cs-stat-num">&lt;8s</div><div className="cs-stat-label">Per-Module Processing, In Parallel</div></div>
            <div className="cs-stat"><div className="cs-stat-num">78:9</div><div className="cs-stat-label">Completed-to-Backlog Ratio at Peak</div></div>
            <div className="cs-stat"><div className="cs-stat-num">216+</div><div className="cs-stat-label">Lesson Plans Processed</div></div>
            <div className="cs-stat"><div className="cs-stat-num">6</div><div className="cs-stat-label">Grade Levels Scaled</div></div>
          </div>
        </div>
      </section>

      <div className="cs-section-inner" style={{ paddingTop: '2rem', paddingBottom: 0 }}>
        <div className="cs-ip-notice">
          <strong>Portfolio Note:</strong> This case study describes original technical architecture and methodology developed in the role of Director of AI Integration. Company and client identities are anonymised. No proprietary content, lesson plan material, or trade secrets belonging to any former employer are reproduced herein. All architectural descriptions reference publicly documented AWS services and standard industry patterns.
        </div>
      </div>

      <section id="challenge">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">01 — The Challenge</p>
          <h2>A curriculum without a map</h2>
          <p>
            A K–12 educational publisher had authored a complete K–5 music curriculum: six grade levels,
            each comprising <strong>36 individual lesson plans</strong>. Each lesson plan contained rich
            instructional content — essential questions, assessments, vocabulary, teacher guidance, and
            purpose statements — but there were no higher-level artifacts to help teachers and administrators
            understand the scope, sequence, or pedagogical intent of the programme.
          </p>
          <p>
            Creating module overviews (one per three lessons, twelve per grade) and a grade-level overview
            manually required content specialists to synthesise, extract, and write across hundreds of
            documents — inconsistently, slowly, and at significant cost to their capacity for higher-order
            curriculum work.
          </p>
          <div className="cs-callout">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;We needed a system that could process curriculum content reliably, quickly, and with guardrails baked in — not bolted on after the fact.&rdquo;</p>
          </div>
          <h3>Core constraints</h3>
          <ul>
            <li><strong>Strict-copy fidelity:</strong> Several sections required verbatim extraction — no paraphrasing allowed. Any error here would propagate to teacher-facing materials.</li>
            <li><strong>Bloom's taxonomy alignment:</strong> Generative copy needed to reflect specific cognitive levels for teacher vs. administrator audiences.</li>
            <li><strong>Multilingual output:</strong> Parent-facing letters required accurate Spanish translation.</li>
            <li><strong>Scale + consistency:</strong> Quality and formatting had to remain identical across 72 modules and 6 grade levels.</li>
            <li><strong>Auditability:</strong> Every generated section needed to be traceable back to its source content.</li>
          </ul>
        </div>
      </section>

      <section id="architecture">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">02 — Architecture</p>
          <h2>A three-layer knowledge foundation</h2>
          <p>
            Before building the pipeline, I architected the Knowledge Base (KB) layer in AWS Bedrock —
            working solo in this first phase. The KB served not just as a retrieval store but as a
            <strong> structured reference system</strong> that grounded all downstream generation. I designed
            what I called the <em>three neural documents</em>: a trio of interoperable JSON files that,
            together, gave the agent a complete and queryable model of the curriculum's structure.
          </p>

          <div className="cs-kb-grid">
            <div className="cs-kb-card">
              <div className="cs-kb-card-icon">Neural Doc 01 · JSON</div>
              <div className="cs-kb-card-title">KB Manifest</div>
              <div className="cs-kb-card-desc">
                Mapped every field present in both the module overview and grade-level overview document
                structures. Acted as the authoritative index of what the pipeline was responsible for
                producing — and where each piece of content belonged in the final output.
              </div>
            </div>
            <div className="cs-kb-card">
              <div className="cs-kb-card-icon">Neural Doc 02 · JSON</div>
              <div className="cs-kb-card-title">Field Definitions</div>
              <div className="cs-kb-card-desc">
                Defined every key referenced in the manifest: data type, expected format, valid values,
                content description, and whether the field was strict-copy (ETL) or generative (RAG).
                This document was the pipeline's source of truth for output validation.
              </div>
            </div>
            <div className="cs-kb-card">
              <div className="cs-kb-card-icon">Neural Doc 03 · JSON</div>
              <div className="cs-kb-card-title">Vector Index Schema</div>
              <div className="cs-kb-card-desc">
                Defined the OpenSearch Serverless index mapping for the KB — specifying which document
                fields to embed for semantic retrieval vs. which to store as filterable metadata attributes
                (e.g., <code style={{ fontFamily: 'monospace', fontSize: '.8em', color: 'var(--cs-accent)' }}>grade_level</code>,{' '}
                <code style={{ fontFamily: 'monospace', fontSize: '.8em', color: 'var(--cs-accent)' }}>module_number</code>,{' '}
                <code style={{ fontFamily: 'monospace', fontSize: '.8em', color: 'var(--cs-accent)' }}>section_type</code>).
                This enabled the retrieval Lambdas to apply precise metadata filters during KB queries,
                preventing cross-grade or cross-module content bleed.
              </div>
            </div>
          </div>

          <div className="cs-callout">
            <div className="cs-callout-label">Design Rationale</div>
            <p>The schema document was the key to making retrieval <em>precise</em>, not just <em>semantic</em>. By storing grade level, module number, and section type as indexed metadata attributes alongside the vector embeddings, Lambda functions could retrieve content like "all strict-copy fields from Grade 3, Module 4" using a structured filter — eliminating ambiguity and ensuring the right lesson plans always grounded the right outputs.</p>
          </div>

          <h3>Content segmentation</h3>
          <p>A critical architectural decision was the explicit bifurcation of the document into two processing paths before any content was generated:</p>
          <div className="cs-split-table">
            <div className="cs-split-col">
              <div className="cs-split-head etl">Strict-Copy Sections · ETL Lambda</div>
              <div className="cs-split-item">Table of Contents</div>
              <div className="cs-split-item">Lesson Names</div>
              <div className="cs-split-item">Summative Assessments</div>
              <div className="cs-split-item">Formative Assessments</div>
              <div className="cs-split-item">Essential Questions</div>
              <div className="cs-split-item">Module Vocabulary</div>
            </div>
            <div className="cs-split-col">
              <div className="cs-split-head rag">Generated Sections · RAG + Agent Lambda</div>
              <div className="cs-split-item">Module Overview Narrative</div>
              <div className="cs-split-item">Assessment Guidance Questions</div>
              <div className="cs-split-item">Interdisciplinary Activities (Maths, Literacy)</div>
              <div className="cs-split-item">Music &amp; Skills Integration Copy</div>
              <div className="cs-split-item">Teacher &amp; Admin Copy (Bloom's Taxonomy)</div>
              <div className="cs-split-item">Parent Home-Engagement Letter (EN + ES)</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pipeline">
        <div className="cs-section-inner" style={{ maxWidth: '960px' }}>
          <p className="cs-eyebrow">03 — Pipeline</p>
          <h2>Five Lambdas, one payload</h2>
          <p>
            Lesson plans were received as <strong>JSON exports of Google Docs</strong>. The pipeline
            ingested each set of three lesson plans assigned to a module and passed a single, accumulating
            JSON payload through a chain of purpose-built Lambda functions.
          </p>
          <div className="cs-callout cs-callout-amber">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;No LangChain, no orchestration framework — just clean AWS primitives wired together intentionally. The simplicity was a feature, not a constraint.&rdquo;</p>
          </div>

          <div className="cs-diagram-wrap">
            <svg viewBox="0 0 860 320" xmlns="http://www.w3.org/2000/svg" fontFamily="DM Sans, sans-serif">
              <defs>
                <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#00c8ff" opacity=".7" />
                </marker>
                <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#162040" />
                  <stop offset="100%" stopColor="#0f1830" />
                </linearGradient>
              </defs>

              <rect x="8" y="120" width="110" height="80" rx="8" fill="url(#cardGrad)" stroke="rgba(0,200,255,.3)" strokeWidth="1" />
              <text x="63" y="150" textAnchor="middle" fill="#8492a6" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">SOURCE</text>
              <text x="63" y="167" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Google Docs</text>
              <text x="63" y="182" textAnchor="middle" fill="#8492a6" fontSize="10">JSON Export</text>
              <line x1="118" y1="160" x2="138" y2="160" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr)" opacity=".6" />

              <rect x="142" y="100" width="126" height="120" rx="8" fill="url(#cardGrad)" stroke="rgba(0,200,255,.4)" strokeWidth="1.2" />
              <text x="205" y="124" textAnchor="middle" fill="#00c8ff" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">λ 01</text>
              <text x="205" y="142" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Preprocessor</text>
              <text x="205" y="165" textAnchor="middle" fill="#8492a6" fontSize="9.5">Cleans raw JSON,</text>
              <text x="205" y="179" textAnchor="middle" fill="#8492a6" fontSize="9.5">normalises structure,</text>
              <text x="205" y="193" textAnchor="middle" fill="#8492a6" fontSize="9.5">strips GDoc artefacts</text>
              <line x1="268" y1="160" x2="288" y2="160" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr)" opacity=".6" />

              <rect x="292" y="100" width="126" height="120" rx="8" fill="url(#cardGrad)" stroke="rgba(0,200,255,.5)" strokeWidth="1.2" />
              <text x="355" y="124" textAnchor="middle" fill="#00c8ff" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">λ 02</text>
              <text x="355" y="142" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Strict Copy</text>
              <text x="355" y="165" textAnchor="middle" fill="#8492a6" fontSize="9.5">Extracts verbatim</text>
              <text x="355" y="179" textAnchor="middle" fill="#8492a6" fontSize="9.5">fields, appends to</text>
              <text x="355" y="193" textAnchor="middle" fill="#8492a6" fontSize="9.5">payload (ETL path)</text>
              <line x1="418" y1="160" x2="438" y2="160" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr)" opacity=".6" />

              <rect x="430" y="18" width="136" height="38" rx="6" fill="rgba(245,166,35,.08)" stroke="rgba(245,166,35,.3)" strokeWidth="1" strokeDasharray="4,3" />
              <text x="498" y="35" textAnchor="middle" fill="#f5a623" fontSize="9" fontFamily="DM Mono,monospace">Bedrock KB</text>
              <text x="498" y="49" textAnchor="middle" fill="#f5a623" fontSize="9" fontFamily="DM Mono,monospace">3 Neural Documents</text>
              <line x1="498" y1="56" x2="498" y2="97" stroke="#f5a623" strokeWidth="1" strokeDasharray="3,3" opacity=".6" markerEnd="url(#arr)" />

              <rect x="442" y="100" width="126" height="120" rx="8" fill="url(#cardGrad)" stroke="rgba(0,200,255,.6)" strokeWidth="1.4" />
              <text x="505" y="124" textAnchor="middle" fill="#00c8ff" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">λ 03</text>
              <text x="505" y="142" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Ref Copy + RAG</text>
              <text x="505" y="165" textAnchor="middle" fill="#8492a6" fontSize="9.5">Pulls purpose stmts</text>
              <text x="505" y="179" textAnchor="middle" fill="#8492a6" fontSize="9.5">+ lesson objectives,</text>
              <text x="505" y="193" textAnchor="middle" fill="#8492a6" fontSize="9.5">generates via Bloom's</text>
              <line x1="568" y1="160" x2="588" y2="160" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr)" opacity=".6" />

              <rect x="592" y="100" width="126" height="120" rx="8" fill="url(#cardGrad)" stroke="rgba(0,200,255,.75)" strokeWidth="1.6" />
              <text x="655" y="124" textAnchor="middle" fill="#00c8ff" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">λ 04 · AGENT</text>
              <text x="655" y="142" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Gen + Translate</text>
              <text x="655" y="165" textAnchor="middle" fill="#8492a6" fontSize="9.5">Summaries, Qs,</text>
              <text x="655" y="179" textAnchor="middle" fill="#8492a6" fontSize="9.5">activities, parent</text>
              <text x="655" y="193" textAnchor="middle" fill="#8492a6" fontSize="9.5">letter · EN + ES</text>

              <rect x="628" y="246" width="110" height="30" rx="6" fill="rgba(0,200,255,.06)" stroke="rgba(0,200,255,.2)" strokeWidth="1" strokeDasharray="4,3" />
              <text x="683" y="265" textAnchor="middle" fill="#8492a6" fontSize="9.5" fontFamily="DM Mono,monospace">DeepL API → ES</text>
              <line x1="655" y1="220" x2="655" y2="246" stroke="#00c8ff" strokeWidth="1" strokeDasharray="3,3" opacity=".5" />

              <line x1="718" y1="160" x2="738" y2="160" stroke="#00c8ff" strokeWidth="1.2" markerEnd="url(#arr)" opacity=".6" />

              <rect x="742" y="108" width="110" height="104" rx="8" fill="rgba(0,200,255,.07)" stroke="rgba(0,200,255,.5)" strokeWidth="1.5" />
              <text x="797" y="132" textAnchor="middle" fill="#00c8ff" fontSize="9" letterSpacing="1" fontFamily="DM Mono,monospace">OUTPUT</text>
              <text x="797" y="150" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Module &amp;</text>
              <text x="797" y="165" textAnchor="middle" fill="#f0f4fa" fontSize="11" fontWeight="600">Grade Overview</text>
              <text x="797" y="185" textAnchor="middle" fill="#8492a6" fontSize="9.5">EN + ES</text>
              <text x="797" y="200" textAnchor="middle" fill="#8492a6" fontSize="9.5">JSON → Doc</text>

              <rect x="195" y="252" width="430" height="28" rx="6" fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
              <text x="410" y="271" textAnchor="middle" fill="#506070" fontSize="9.5" fontFamily="DM Mono,monospace">CloudWatch — logs, KPI dashboards, error alerts at every Lambda boundary</text>
            </svg>
          </div>

          <h3>Stage-by-stage breakdown</h3>
          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">λ1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Preprocessor Lambda</div>
                <div className="cs-phase-desc">Received the raw JSON export of each Google Docs lesson plan. Cleaned structural noise from the Google Docs format, normalised field naming, and produced a well-formed JSON payload ready for downstream processing.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">λ2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Strict Copy Lambda</div>
                <div className="cs-phase-desc">Extracted all verbatim fields — table of contents, lesson names, summative and formative assessments, essential questions, and module vocabulary — from all three lesson plans and appended them directly to the payload. No generation; zero paraphrasing.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">λ3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Reference Copy + RAG Lambda</div>
                <div className="cs-phase-desc">Queried the Bedrock Knowledge Base using structured metadata filters to retrieve the three assigned lesson plans and relevant reference context. Combined purpose statements and lesson objectives from source content to generate the Module Overview Summary — applying Bloom's taxonomy cognitive levels appropriate for teacher and administrator audiences.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">λ4</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Agent Lambda — Generation + Translation</div>
                <div className="cs-phase-desc">Wired to a Bedrock Agent, this Lambda generated all remaining sections: detailed summaries, assessment guidance questions, suggested interdisciplinary activities, music-skills integration copy, and a parent-facing home-engagement letter. All parent-letter output was translated from English to Spanish via the DeepL API.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">λ5</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">HTML Injection &amp; Pre-Production Validation</div>
                <div className="cs-phase-desc">The final Lambda in the chain served two purposes. First, it rendered the completed JSON payload into a production-ready Google Document using a structured HTML template injected via the Google Docs API — keeping all output natively within the company's GSuite environment and matching the publisher's established document format. Second, before injection, it ran every generated section through a configurable guardrails layer that validated content against editorial guidelines, structural requirements, and output schema constraints. Any validation failure triggered a CloudWatch alarm, routing the affected module to an error queue for triage. Outputs that cleared all checks were staged for mandatory human-in-the-loop (HITL) review — the final gate before content was approved for deployment to the curriculum.</div>
              </div>
            </div>
          </div>

          <div className="cs-callout cs-callout-amber" style={{ marginTop: '2rem' }}>
            <div className="cs-callout-label">Human-in-the-Loop Gate</div>
            <p>λ5 was designed as a hard gate, not a soft warning. No output reached the HITL review queue without passing guardrails validation — ensuring that content specialists spent their review time on editorial judgement, not catching structural or schema errors that automation could own. CloudWatch alarms provided immediate visibility into any failure, with enough context to diagnose the root cause without re-running the full pipeline.</p>
          </div>

          <h3>Project timeline</h3>
          <div className="cs-phase-list">
            <div className="cs-phase">
              <div className="cs-phase-num">1</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">KB Architecture &amp; Neural Document Design <span className="cs-phase-date">November 2025</span></div>
                <div className="cs-phase-desc">Sole architect and builder. Designed the Bedrock Knowledge Base, authored the three neural documents, and established the pipeline's content segmentation model — splitting all output fields into strict-copy (ETL) and generative (RAG) processing paths before a single Lambda was written.</div>
                <div className="cs-phase-solo">Solo phase — Director of AI Integration</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">2</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Module Overview Pipeline — 3rd Grade POC <span className="cs-phase-date">Sprint 1 · Nov–Dec 2025</span></div>
                <div className="cs-phase-desc">Built the full four-Lambda chain end-to-end and ran a complete proof-of-concept against 3rd grade: ingested all 36 lesson plans, generated 12 module overviews, validated strict-copy fidelity and Bloom's taxonomy alignment with the content team. POC validated and signed off December 2025.</div>
                <div className="cs-phase-solo">Solo phase — Director of AI Integration</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">3</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Pipeline Hardening &amp; E2E Automation <span className="cs-phase-date">Sprints 2–3 · Dec 2025–mid-Jan 2026</span></div>
                <div className="cs-phase-desc">Led the team (2 entry-level engineers) through pipeline hardening: resolved JSON extraction edge cases, standardised section templates, completed Bloom's taxonomy prompt calibration, and wired CloudWatch KPI dashboards at every Lambda boundary.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">4</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Grade-Level Overview Pipeline — POC <span className="cs-phase-date">Sprint 4 · late Jan 2026</span></div>
                <div className="cs-phase-desc">Pivoted to the grade-level overview. Added an Amazon EventBridge rule that automatically triggered the grade-level pipeline once 12 module overviews for a given grade had been completed. POC achieved within the sprint.</div>
              </div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-num">5</div>
              <div className="cs-phase-body">
                <div className="cs-phase-title">Grade-Level Overview — MVP &amp; K–5 Rollout <span className="cs-phase-date">Sprint 5 · mid-Feb 2026</span></div>
                <div className="cs-phase-desc">Hardened the grade-level pipeline to MVP. EventBridge trigger validated in production. Scaled across all 6 grade levels — 216+ lesson plans processed, 72 module overviews and 6 grade-level overviews generated, 144 parent letters in English and Spanish delivered to stakeholders.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">04 — Results</p>
          <h2>From days to hours, at every grade</h2>
          <div className="cs-kpi-grid">
            <div className="cs-kpi-card"><div className="cs-kpi-val">216+</div><div className="cs-kpi-label">Lesson plans ingested across K–5</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">72</div><div className="cs-kpi-label">Module overviews generated</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">6</div><div className="cs-kpi-label">Grade-level overviews produced</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">144</div><div className="cs-kpi-label">Parent letters (EN + ES)</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">&lt;2h</div><div className="cs-kpi-label">End-to-end per grade level</div></div>
            <div className="cs-kpi-card"><div className="cs-kpi-val">0</div><div className="cs-kpi-label">Strict-copy errors in final output</div></div>
          </div>
          <h3>Technology stack</h3>
          <div className="cs-tech-list">
            <span className="cs-tech-tag">AWS Bedrock</span>
            <span className="cs-tech-tag">AWS Lambda</span>
            <span className="cs-tech-tag">Amazon CloudWatch</span>
            <span className="cs-tech-tag">OpenSearch Serverless</span>
            <span className="cs-tech-tag">RAG Architecture</span>
            <span className="cs-tech-tag">ETL Pipeline</span>
            <span className="cs-tech-tag">Bedrock Knowledge Base</span>
            <span className="cs-tech-tag">Bedrock Agent</span>
            <span className="cs-tech-tag">Amazon EventBridge</span>
            <span className="cs-tech-tag">DeepL API</span>
            <span className="cs-tech-tag">Bloom's Taxonomy Engine</span>
            <span className="cs-tech-tag">JSON / Google Docs API</span>
            <span className="cs-tech-tag">Scrum</span>
            <span className="cs-tech-tag">Jira Cloud</span>
          </div>
        </div>
      </section>

      <section>
        <div className="cs-section-inner">
          <p className="cs-eyebrow">05 — Role &amp; Team</p>
          <h2>Director of AI Integration</h2>
          <div className="cs-role-card">
            <div className="cs-role-block">
              <h3>My Responsibilities</h3>
              <p>Full pipeline architecture and design; Bedrock KB setup and neural document authorship; solo POC build (Phases 1–2); Bloom's taxonomy prompt engineering; agent workflow design; EventBridge integration design; team technical direction; stakeholder alignment; QA framework and quality benchmarks.</p>
            </div>
            <div className="cs-role-block">
              <h3>Team Structure</h3>
              <p>Two entry-level engineers joined from Phase 3 onward, contributing to pipeline hardening, production agent workflow implementation, the grade-level overview build, and the K–5 rollout. I provided technical direction, code review, and architectural decision-making throughout.</p>
            </div>
          </div>

          <h3>Building Agile habits inside an AI engineering team</h3>
          <p>
            The team was new to Agile — two engineers with strong technical instincts but no
            formal Scrum background. My role was dual: technical product owner and Scrum coach
            simultaneously. We started with lightweight sprint cadences and basic backlog rituals
            before introducing retrospectives and velocity tracking — building the habits first,
            then layering in the framework. At peak, the team maintained a{' '}
            <strong>78:9 completed-to-backlog ratio</strong>, a direct result of tight Epic and
            Story decomposition, clear acceptance criteria, and a team culture of finishing before
            starting.
          </p>
          <p>
            This tooling mindset carried forward from the WCAG 2.2 Custom GPT I built in the
            preceding Director of Project Management role — which reduced art-accessibility
            revision cycles from 3 rounds to 0, saving an estimated $75K — and became a model for
            AI-assisted QA on the MOB/GLOB pipeline.
          </p>
        </div>
      </section>

      <section id="lessons">
        <div className="cs-section-inner">
          <p className="cs-eyebrow">06 — Lessons Learned</p>
          <h2>What I'd tell myself at the start</h2>
          <h3>What worked well</h3>
          <ul>
            <li><strong>Bifurcate before you generate.</strong> Separating strict-copy and generative paths at the architecture level — not the prompt level — eliminated an entire category of quality problems.</li>
            <li><strong>The schema document earns its weight.</strong> Designing the vector index to support metadata-filtered retrieval from the start prevented cross-grade content bleed and made each Lambda query deterministic.</li>
            <li><strong>POC on the hardest realistic case.</strong> 3rd grade was a real, complete grade — not a toy dataset. Edge cases in extraction surfaced in the POC rather than in production.</li>
            <li><strong>CloudWatch KPIs from day one.</strong> Having visibility into pipeline performance before scale made the rollout straightforward rather than tense.</li>
          </ul>
          <h3>Challenges navigated</h3>
          <ul>
            <li>Google Docs JSON exports had minor formatting inconsistencies that required iterative hardening of the preprocessor Lambda — caught early in the POC phase.</li>
            <li>Bloom's taxonomy level calibration required several prompt engineering iterations and collaborative review sessions before output was consistently on-target.</li>
            <li>Establishing a shared definition of "good" between the AI team and content specialists was deliberate work. Early alignment reduced review cycle counts significantly from POC to rollout.</li>
          </ul>
          <h3>Future opportunities</h3>
          <ul>
            <li><strong>Cross-subject expansion:</strong> The same architecture applies directly to maths, ELA, and science curricula.</li>
            <li><strong>Vertical alignment documents:</strong> Grade-level overview data could roll up into multi-year scope-and-sequence documents.</li>
            <li><strong>Closed-loop quality management:</strong> CloudWatch KPI thresholds could trigger human review queues for sections scoring below confidence benchmarks.</li>
          </ul>
          <div className="cs-callout">
            <div className="cs-callout-label">In Their Words</div>
            <p style={{ fontStyle: 'italic' }}>&ldquo;The best AI systems aren&apos;t impressive because of the model. They&apos;re impressive because someone thought carefully about what happens before and after the model call.&rdquo;</p>
          </div>
        </div>
      </section>

      <footer className="cs-footer">
        <div className="cs-footer-inner">
          <div>
            <div className="cs-footer-label">IP &amp; Confidentiality</div>
            <p className="cs-footer-note">
              Original methodology and architecture. Company and client identities anonymised.
              No proprietary content or trade secrets reproduced. AWS service references are publicly documented.
            </p>
          </div>
          <p className="cs-footer-note"><Link to="/">← Back to portfolio</Link></p>
        </div>
      </footer>
    </div>
  );
}
