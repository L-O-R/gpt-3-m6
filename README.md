# GPT-3 Landing Page 🚀

A modern, responsive **one-page landing website** built using **React, Vite, and CSS3**, inspired by an AI-focused product landing page.

---

## 🛠 Tech Stack

- **React 19.2.0**
- **Vite** (Fast build tool)
- **CSS3** (No UI frameworks)
- **ES6+ JavaScript**

---

## 📁 Folder Structure Explained

### `public/`

Static files accessible directly by the browser.

### `src/assets/`

Contains images and icons used across the application.

### `src/components/`

Reusable UI sections split by feature:

- Each component has its own `.jsx` and `.css` file
- Improves maintainability and readability

### `src/pages/`

Page-level components.  
Currently includes:

- `Home.jsx` → assembles all sections for the one-page layout

### `src/index.css`

Global styling utilities:

- `src/index.css` → shared styles

### `App.jsx`

Root component that renders the Home page.

### `main.jsx`

Entry point for React DOM rendering.

---

## 🧩 Component-Based Architecture

Each section of the landing page is built as an isolated component:

- Easy to refactor or reuse
- Clean separation of concerns
- Scales well for future features

---

## ▶️ Getting Started

### 1. Install Dependencies

```bash
npm install
```
