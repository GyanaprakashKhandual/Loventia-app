# Social Media Frontend

<p align="center">
  <img alt="Logo" src="https://img.shields.io/badge/Social%20Media-Frontend-000?style=for-the-badge&logo=vercel&logoColor=white">
</p>

<p align="center">
  <a href="#"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-14+-000?style=for-the-badge&logo=nextdotjs&logoColor=white"></a>
  <a href="#"><img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"></a>
  <a href="#"><img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-Animation-0055FF?style=for-the-badge&logo=framer&logoColor=white"></a>
  <a href="#"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></a>
  <a href="#"><img alt="ESLint" src="https://img.shields.io/badge/ESLint-Configured-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"></a>
  <a href="#"><img alt="Prettier" src="https://img.shields.io/badge/Prettier-Formatted-F7B93E?style=for-the-badge&logo=prettier&logoColor=black"></a>
  <a href="#"><img alt="Vercel" src="https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white"></a>
</p>

<p align="center">
  <a href="#"><img alt="build status" src="https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white"></a>
  <a href="#"><img alt="license" src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square"></a>
</p>

---

## ✨ Overview

A modern, blazing-fast social media frontend built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. It delivers smooth page transitions, accessible UI components, and a scalable architecture suitable for real-world apps.

## ✅ Features

- ✅ Auth-ready pages (Login/Signup/Reset) with form validation  
- ✅ Responsive feed with skeleton loading states  
- ✅ Post composer (text, images, emojis, character counter)  
- ✅ Reactions, comments, and bookmark stubs (API-ready)  
- ✅ User profiles with editable bio, avatar, cover image  
- ✅ Dark/Light theme toggle with system preference  
- ✅ Infinite scroll & optimistic UI patterns  
- ✅ Route-level animations (Framer Motion)  
- ✅ Reusable UI primitives (buttons, modals, toasts)  
- ✅ Accessible components (ARIA, keyboard nav)

> Swap stubbed APIs with your backend when ready.

## 🧰 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, CSS Variables
- **Animations:** Framer Motion
- **Lang/Tooling:** TypeScript, ESLint, Prettier
- **State:** React Query / Server Components (choose one)
- **Deployment:** Vercel

## 🚀 Quick Start

```bash
# 1) Clone
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2) Install
pnpm install    # or npm i / yarn

# 3) Env
cp .env.example .env.local
# Fill keys in .env.local (see below)

# 4) Dev
pnpm dev        # http://localhost:3000

# 5) Build & Preview
pnpm build
pnpm start
