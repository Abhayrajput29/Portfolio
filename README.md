# Developer Portfolio

A modern, responsive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, React Icons, EmailJS, and the GitHub API.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Configure EmailJS and GitHub stats

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Then set:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_USERNAME=your_github_username
```

The contact form will show a setup message until the EmailJS values are present.
