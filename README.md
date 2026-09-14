# Personal Portfolio

React + Tailwind CSS + React Router.

## Run it locally

```
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Project structure

```
src/
  components/   reusable pieces (Navbar, Footer, ProjectCard, SkillBadge)
  pages/        one component per route (Home, About, Projects, Contact)
  App.jsx       defines the routes
  main.jsx      mounts the app and wraps it in <BrowserRouter>
```

## Before you submit

Search the project for `TODO` — that's every spot with placeholder content
(email address, missing project links, About page copy) that's written as
a starting point, not the final version. Rewrite those in your own words.

## Deploy to Netlify

Same pipeline as your other projects:

```
npm run build
```

This creates a `dist/` folder. Either:
- Drag that `dist/` folder into Netlify's manual deploy screen, or
- Push this repo to GitHub and connect it in Netlify, with build command
  `npm run build` and publish directory `dist`.
