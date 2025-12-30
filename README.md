# Thunder Gym

**Thunder Gym** is a high-performance, professional **Landing Page** developed for a real-world fitness business in Pachacamac, Lima. Built with **React 18** and **Vite**, it leverages a modern Component-Based Architecture and SCSS Modules to deliver a fast, responsive, and visually striking user experience.

This project represents a shift from simulation to **real-world application**, focusing on lead generation (conversion), brand identity, and mobile optimization for actual customers.

---
## Live Demo



## Features

- **Industrial & Modern UI:** - Custom "Dark Mode" aesthetic with gold accents (`#E6B325`) to reflect the gym's brand identity.
  - Professional typography hierarchy and high-contrast layout for maximum readability.
- **Advanced Gallery System:**
  - **Masonry Grid Layout:** A dynamic CSS Grid implementation that seamlessly mixes vertical/horizontal images and auto-playing videos.
  - **Smart Social Linking:** Logic that automatically detects URL types (TikTok, Facebook, Instagram) and renders the correct icon dynamically.
  - **Multimedia Support:** Optimized handling of MP4 video loops and high-res imagery.
- **Business-First Functionality:**
  - **Direct WhatsApp Conversion:** CTAs (Call to Actions) are programmed with pre-filled messages to streamline sales directly to the owner's WhatsApp.
  - **Google Maps Integration:** Embedded, responsive map for real-time location tracking.
- **Component-Based Architecture:**
  - Modular file structure using **React Components** and **SCSS Modules** to avoid style conflicts.
  - Reusable components for Buttons, Cards, and Section Headers.
- **Responsive & Performance:**
  - **Mobile-First Approach:** Fully optimized for smartphones, where 90% of the target audience interacts.
  - Lazy loading implementation for media assets to ensure high Lighthouse scores.

---

## Tech Stack

* **Core:** React 18, JSX, JavaScript (ES6+)
* **Build Tool:** Vite (Super-fast HMR and bundling)
* **Styling:** SCSS / SASS Modules (Variables, Nesting, Mixins)
* **Icons:** React Icons (FontAwesome & Material Design)
* **Deployment:** Vercel (CI/CD)

---

## Project Structure

```bash
GYM-PRO/
├─ node_modules/
├─ public/
│  └─ favicon.png
├─ src/
│  ├─ assets/
│  │  └─ images/
│  │     ├─ gallery/
│  │     ├─ logo.png
│  │     └─ logoT.png
│  ├─ components/
│  │  ├─ Contact/
│  │  │  ├─ Contact.jsx
│  │  │  └─ Contact.module.scss
│  │  ├─ Gallery/
│  │  │  ├─ Gallery.jsx
│  │  │  └─ Gallery.module.scss
│  │  ├─ Header/
│  │  │  ├─ Header.jsx
│  │  │  └─ Header.module.scss
│  │  ├─ Hero/
│  │  │  ├─ Hero.jsx
│  │  │  └─ Hero.module.scss
│  │  ├─ Plans/
│  │  │  ├─ Plans.jsx
│  │  │  └─ Plans.module.scss
│  │  └─ Services/
│  │     ├─ Services.jsx
│  │     └─ Services.module.scss
│  ├─ styles/
│  │  ├─ _variables.scss
│  │  └─ global.scss
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ .gitattributes
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
└─ README.md

```

# Clone repository

git clone 


# Navigate to project directory

cd ThunderGym

# Install Dependencies
npm install

# Run Development Server
npm run dev

# Build for Production
npm run build


##  Notes


- Real-World Solution: Unlike portfolio simulations, this project solves a specific business need: providing an online presence for a local gym without the overhead of a backend or database.

- Serverless Architecture: The site relies on static generation and direct API links (WhatsApp API, Google Maps Embed), ensuring zero maintenance costs and maximum security.


- SCSS Modules: Uses modular CSS to encapsulate styles per component, ensuring maintainability and scalability for future updates.

## Author


Guillermo Contreras

Front-End Developer

This project demonstrates the ability to deliver professional, production-ready code that solves real business problems using modern React ecosystems.