# John Pendergrass — Portfolio

Personal portfolio site for John Pendergrass — AI practitioner, Certified ScrumMaster, and educator.

[![Linkedin Badge](https://img.shields.io/badge/-johnp-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/j-pendergrass/)](https://www.linkedin.com/in/j-pendergrass/)
[![Gmail Badge](https://img.shields.io/badge/-j.w.pendergrass-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:j.w.pendergrass@gmail.com)](mailto:j.w.pendergrass@gmail.com)
[![iCloud Badge](https://img.shields.io/badge/-john.pendergrass-006ee6?style=flat&logo=iCloud&logoColor=white&link=mailto:john.pendergrass@me.com)](mailto:john.pendergrass@me.com)

**Live site:** [johnwp8253.github.io](https://johnwp8253.github.io) *(GitHub Pages)*

---

### Languages & Libraries
![Python Badge](https://shields.io/badge/language-Python-green)
![JavaScript Badge](https://shields.io/badge/language-JavaScript-yellow)
![HTML Badge](https://shields.io/badge/language-HTML-orange)
![CSS Badge](https://shields.io/badge/language-CSS-blue)
![React Badge](https://shields.io/badge/library-React-61dafb)
![Node.js Badge](https://shields.io/badge/runtime-Node.js-lightgreen)
![SQL Badge](https://shields.io/badge/language-SQL-lightgrey)
![MongoDB Badge](https://shields.io/badge/database-MongoDB-brightgreen)
![Vite Badge](https://shields.io/badge/vite-brightblue)


### AI & ML
![LangChain Badge](https://shields.io/badge/framework-LangChain-brightgreen)
![LlamaIndex Badge](https://shields.io/badge/framework-LlamaIndex-blue)
![CrewAI Badge](https://shields.io/badge/framework-CrewAI-orange)
![Hugging Face Badge](https://shields.io/badge/platform-Hugging%20Face-yellow)
![ChromaDB Badge](https://shields.io/badge/database-ChromaDB-purple)
![Ollama Badge](https://shields.io/badge/tool-Ollama-black)
![MLX Badge](https://shields.io/badge/framework-MLX-lightgrey)
![RAG Badge](https://shields.io/badge/technique-RAG-teal)
![Fine Tuning Badge](https://shields.io/badge/technique-Fine%20Tuning-blueviolet)
![Prompt Engineering Badge](https://shields.io/badge/skill-Prompt%20Engineering-blue)
![ClaudeAI Badge](https://shields.io/badge/skill-ClaudeAI-orange)
![Claude Code Badge](https://shields.io/badge/skill-Claude%20Code-orange)

### Agile & Practices
![Scrum Badge](https://shields.io/badge/framework-Scrum-blue)
![Kanban Badge](https://shields.io/badge/framework-Kanban-yellow)
![Product Ownership Badge](https://shields.io/badge/role-Product%20Ownership-purple)
![KPI Development Badge](https://shields.io/badge/skill-KPI%20Development-green)
![Instructional Design Badge](https://shields.io/badge/skill-Instructional%20Design-red)
![Agile Badge](https://shields.io/badge/coaching-agile-magenta)

### Platforms
![Azure DevOps Badge](https://shields.io/badge/platform-Azure%20DevOps-blue)
![AWS Badge](https://shields.io/badge/platform-AWS-yellow)
![AWS Bedrock Badge](https://shields.io/badge/role-AWS%20Bedrock-green)
![AWS Cloudwatch Badge](https://shields.io/badge/role-AWS%20Cloudwatch-red)
![AWS Lambda Badge](https://shields.io/badge/role-AWS%20Lambda-orange)
![AWS S3 Badge](https://shields.io/badge/role-AWS%20S3-orange)
![Gemini Enterprise Badge](https://shields.io/badge/role-Gemini%20Engerprise-blue)
![CrewAI Badge](https://shields.io/badge/role-CrewAI-blue)

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite 5 |
| Styling | Plain CSS — one file per component in `src/styles/` |
| Data | `src/data/content.js` — portfolio content decoupled from markup |
| Deploy | `vite build` → static `dist/` to GitHub Pages |

No CSS framework, no UI library, no unnecessary dependencies.

## Project structure

```
src/
├── components/     # One component per section
├── data/
│   └── content.js  # All portfolio content as plain JS objects
├── styles/         # One CSS file per component + globals
├── App.jsx         # Root — mounts sections, runs IntersectionObserver
└── main.jsx
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Design decisions

- **Plain CSS over a framework** — readable at a glance, no abstraction to decode
- **Content in `data/content.js`** — updating the portfolio means editing one data file, not hunting through JSX
- **IntersectionObserver for scroll animations** — no animation library, ~10 lines of vanilla JS
- **`base: './'` in vite.config.js** — assets resolve correctly on GitHub Pages without a custom domain
