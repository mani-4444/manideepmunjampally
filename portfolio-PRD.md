# Portfolio Website — PRD

## Goal
A recruiter-facing portfolio site for Software Engineering / Full-Stack / Generative AI
internship applications. Primary job: convince a recruiter in seconds that Manideep
ships real, working software.

## Stack
Next.js, Tailwind CSS, Framer Motion, GSAP.

## Fonts (required, fixed roles)
- **Akira Expanded** — hero headline + section-opening display moments only.
- **Montserrat** — section headings, nav, project titles.
- **Poppins Italic** — pull quotes / short accent lines under project titles.
- **Open Sans** — all body copy.

## Aesthetic
Bold, high-energy, dark base, one deliberate accent color, aggressive confident
typography. Not a soft SaaS template. Not a minimalist cream/serif portfolio.
One orchestrated motion moment on load; hover/interaction motion elsewhere — no
scattered fade-up-on-scroll on every section.

## Pages / Sections (in order)

1. **Hero** — positioning line (full-stack dev who ships real, deployed products
   and integrates LLMs), CTA to Projects, CTA to Resume/Contact.

2. **About** — CS undergrad, CBIT, CGPA 9.74/10.00. Builds full-stack apps,
   integrates LLMs. Currently deepening into ML and agentic AI.

3. **Projects** (case-study depth):
   - **KrishiCFO — Agricultural Advisory AI** — Python, FastAPI, React, Llama 3.1 (via Groq), Whisper STT, ElevenLabs TTS.
     A 3-agent adversarial AI debate platform giving Indian farmers data-driven crop price advice.
     - Built with team Aurexis-Error-404: an agricultural commodity price advisory platform powered by a 3-agent adversarial AI debate system.
     - Harnessed Llama 3.1 to generate real-time market analysis debates between bullish, bearish, and neutral market agents.
     - Spearheaded the real-time voice pipeline integrating Whisper STT for regional dialect audio input and ElevenLabs TTS for natural speech outputs, leading the final pitch and live demo.
     Core Engineering Highlights: 3-Agent Adversarial Debate · Multilingual Voice Pipeline · Live Hackathon Pitch Leader
     Link: https://github.com/ERROR404-26/A4IMPACT
   - **JARVIS** — Python, Gemini, Groq, Ollama (Qwen). Built with a 5-member
     team as a hackathon submission at BVRIT, with Manideep serving as the
     backend implementor. Story: initial LLM setup didn't meet latency/cost
     needs → migrated to Gemini + Groq pipeline → added Qwen via Ollama as
     local offline fallback.
     Link: https://github.com/Aurexis-Error-404/Project_Jarvis
   - **HabitTracker** — React, TypeScript, Supabase, TanStack Query, Recharts,
     Vercel. Full-stack habit tracker, real-time sync, streak tracking, AI
     recommendation engine from user activity history.
     Live: https://habit-tracker-indol-two.vercel.app/
   - **Attendance Analyzer** — React, TypeScript, Tailwind CSS, Vercel.
     Automates attendance shortage analysis + classes-needed calculation.
     Live: https://attendance-tracker-nine-xi.vercel.app/

4. **Skills** — Languages (C++, Python, TypeScript, SQL); AI/Generative AI
   (LLMs, Prompt Engineering, Gemini, Groq, Ollama, Claude AI); Backend/Data
   (FastAPI, REST APIs, Supabase, MySQL); Web (React, Next.js, Tailwind CSS);
   Tools (Git, GitHub, Vercel).

5. **Certifications** — Programming with Generative AI, NPTEL (Completed).
   AI & Machine Learning, Apna College (Ongoing).

6. **Achievements** — HackWithAI hackathon finalist. 200+ DSA problems
   in C++ (leetcode.com/Yo7vJoRqBP); DP, Game Theory, Divide and Conquer.

7. **Outside of Code** — low-emphasis, near the bottom. Cricket content creation
   ('Strategic Timeout'): founded, manages, and edits the channel. 2,000+
   Instagram followers, 2,700+ YouTube subscribers, built using Adobe Premiere
   Pro and After Effects. Framed as audience-building and production discipline,
   not a fan feature.
   Links: https://www.youtube.com/@StrategicTimeoutOfficial
          https://www.instagram.com/strategic_timeout_official/

8. **Contact / Footer** — email, linkedin.com/in/manideep-munjampally-771254386/,
   github.com/mani-4444, LeetCode profile, resume download.

## Content Rules
No invented metrics or outcomes beyond what's listed above. No generic
portfolio copy ("passionate developer," "I love solving problems").

## Out of Scope (v1)
Blog, long-form about page, additional case studies beyond the four listed.
