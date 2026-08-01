# SkillSwap Client

Frontend application for the SkillSwap platform — a skill-sharing app where users can add, browse, view details, update, and delete skills. Users authenticate with Firebase and interact with the [SkillSwap Server API](../server/README.md).

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool & development server
- [React Router](https://reactrouter.com/) — Routing
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [daisyUI](https://daisyui.com/) — Tailwind component library
- [Firebase Authentication](https://firebase.google.com/docs/auth) — Authentication (email/password, Google)
- [react-hook-form](https://react-hook-form.com/) — Form handling
- [lucide-react](https://lucide.dev/) / [react-icons](https://react-icons.github.io/react-icons/) — Icons

## Features

- **Home** — Hero section, popular categories, latest 6 skills, how-it-works section
- **Browse Skills** — Browse all skills shared by the community
- **Skill Details** — View full details of a skill
- **Add Skill** — Add a new skill (stored in MongoDB)
- **My Skills** — View the logged-in user's skills with Update & Delete actions
- **Update Skill** — Edit and save changes to a skill
- **Register / Login** — Firebase email-password and Google authentication
- **Dashboard** — Protected user profile page
- **Protected Routes** — Private pages require authentication

## Project Structure

```
client/
├── public/
├── src/
│   ├── components/
│   │   ├── home/               # Hero, FeaturedCategories, LatestSkills, HowItWorks
│   │   ├── shared/             # Navbar, Footer
│   │   └── PrivateRoute.jsx    # Route guard for protected pages
│   ├── context/
│   │   └── AuthContext.jsx     # Firebase auth context provider
│   ├── firebase/
│   │   └── firebase.config.js  # Firebase app initialization
│   ├── layouts/
│   │   └── MainLayout.jsx      # Navbar + content + Footer wrapper
│   ├── pages/
│   │   ├── Home/               # Landing page
│   │   ├── BrowseSkills/       # Skill grid + SkillCard
│   │   ├── SkillDetails/       # Single skill details
│   │   ├── AddSkill/           # Add skill form
│   │   ├── MySkills/           # User's skills (update/delete)
│   │   ├── UpdateSkill/        # Edit skill form
│   │   ├── Login/              # Login page
│   │   ├── Register/           # Registration page
│   │   └── Dashboard/          # Protected dashboard
│   ├── routes/
│   │   └── router.jsx          # App routes
│   ├── index.css
│   └── main.jsx                # App entry point
├── .env.local                  # Frontend environment variables
└── package.json
```

