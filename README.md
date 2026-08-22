# Udyama: Bodyweight Mastery & Apex Engine

Welcome to **Udyama**, a comprehensive fitness and bodyweight mastery application. Designed with modern web technologies, Udyama provides a highly structured 7-Day Bodyweight Strength Program (The Apex Engine) and tools to track your progress through the layers of mastery.

View your app in AI Studio: https://ai.studio/apps/f7db341b-8640-41cc-a196-4b4700c6aeb5

## 🚀 Project Overview

Udyama is built to guide users through progressive calisthenics, conditioning, and strength training. The application is divided into several core modules:

- **Apex Engine**: A complete 7-Day Bodyweight Strength Program incorporating conditioning, strength, endurance, active recovery, high-volume training, and balance. It provides daily structured protocols, rep targets, and rest structures.
- **Movement Library**: A comprehensive visual guide and library of bodyweight exercises.
- **Layers of Mastery (Level)**: A visual progression tree that tracks your journey across 7 distinct layers of calisthenics mastery, tracking your rank and achievements.
- **Pillar Matrix**: A structured breakdown of the core pillars of physical development.
- **Dashboard Bento**: A clean user dashboard summarizing your current stats and progress.

## 🛠️ Technologies & Dependencies

This project is built using a modern React stack:

- **React 19**: Core UI library.
- **Vite 6**: Next-generation frontend tooling and bundler.
- **Tailwind CSS 4**: Utility-first CSS framework for rapid UI styling and responsive design.
- **Motion (Framer Motion)**: For fluid, performant UI animations and transitions.
- **Lucide React**: Beautiful, consistent icon set.
- **TypeScript**: For robust, type-safe code.

## 📂 Project Structure

```text
.
├── src/
│   ├── components/
│   │   ├── ApexEngine.tsx         # The 7-Day Bodyweight Strength Program view
│   │   ├── DashboardBento.tsx     # Bento-grid style user dashboard
│   │   ├── HomeView.tsx           # Movement Library view
│   │   ├── LayerProgressionTree.tsx # Visual skill tree for mastery levels
│   │   ├── PillarMatrix.tsx       # Core pillars layout
│   │   └── SplashScreen.tsx       # Animated entry screen
│   ├── context/
│   │   └── ProgressContext.tsx    # State management for user progress
│   ├── App.tsx                    # Main application layout and routing
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global Tailwind styles
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Tailwind configuration (if applicable)
└── vite.config.ts                 # Vite bundler configuration
```

## ⚙️ Setup and Installation

**Prerequisites:** Ensure you have **Node.js** (v18 or higher) installed on your machine.

1. **Clone or Download the Repository**
2. **Install dependencies:**
   Navigate to the project directory in your terminal and run:
   ```bash
   npm install
   ```
3. **Environment Setup (Optional):**
   If you plan to integrate Gemini AI features in the future, set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key.
4. **Run the Development Server:**
   Start the app locally:
   ```bash
   npm run dev
   ```
5. **View the App:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## 📖 Usage Guidelines

- **Navigating the App:** Use the top navigation bar to switch between the **Apex Engine**, **Library**, **Level**, and **Matrix** views.
- **Apex Engine:** Click on any day (e.g., Day 1: Centurion Engine) to view the workout protocol, structure, pacing, and specific exercises. It adapts dynamically on mobile to show details inline.
- **Progression:** The app uses a global context to track your current "Layer" of mastery, which is reflected in the top right corner of the header.

## ✨ Features Highlight
- Fully responsive design that works beautifully on mobile and desktop.
- Custom scrollbar styling and glassmorphism elements.
- Fluid animations using Framer Motion for entering views and expanding cards.
- Mobile-optimized layout for workout routines.
