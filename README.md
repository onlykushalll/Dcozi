# Dcozi Enterprises — Smart Signage & Digital Podiums

Interactive web showcase and inquiry storefront for **Dcozi Enterprises**, featuring digital podiums, interactive standees, commercial signage displays, and heavy-duty industrial smart locker systems.

---

## ✨ Features

- **Modern Responsive Layout**: Editorial industrial aesthetic built with React 19, Vite 6, and Tailwind CSS v4.
- **Lenis Smooth Scroll**: Inertia-based vertical scrolling with synchronized anchor navigation across all sections and footer shortcuts.
- **Interactive Product Showcase**: Dynamic showcase for all five core hardware systems with product specs, indicative pricing, and one-click inquiry pre-selection.
- **Motion Choreography**: Subtle cursor-reactive parallax hero typography, scroll-progress indicator, and viewport entrance transitions via `motion/react`.
- **Inquiry & Newsletter Flows**: Validated front-end inquiry form with pre-filled product selection and interactive newsletter confirmation.

---

## 🛠️ Tech Stack

- **Core Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Motion & Scroll**: [Motion](https://motion.dev/) + [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript (strict mode)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)

### Installation

1. Clone the repository and enter the project directory:
   ```bash
   git clone https://github.com/onlykushalll/Dcozi.git
   cd Dcozi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. Typecheck and build for production:
   ```bash
   npm run lint
   npm run build
   ```
   Static production assets are emitted to `dist/`.

---

## ⚙️ Configuration

All company profile metadata, product catalog entries, features, specifications, and partner directory URLs live in [`src/lib/constants.ts`](./src/lib/constants.ts). Replace the placeholder contact/directory strings in `COMPANY` before deploying to live production.

---

## 📂 Directory Structure

```
Dcozi/
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx   # Inquiry form & corporate contact block
│   │   ├── Footer.tsx        # Anchor navigation, catalog links & newsletter
│   │   ├── Hero.tsx          # Parallax hero showcase
│   │   └── ProductScroll.tsx # Product lineup & verification section
│   ├── lib/
│   │   ├── constants.ts      # Brand metadata & product catalog
│   │   └── scroll.ts         # Lenis smooth-scroll helper
│   ├── App.tsx               # App layout, navbar & scroll progress
│   ├── index.css             # Tailwind v4 theme & utility styles
│   └── main.tsx              # React entrypoint
├── index.html                # HTML shell
├── metadata.json             # App descriptor
├── package.json              # Scripts & dependencies
├── tsconfig.json             # Strict TypeScript configuration
├── vite.config.ts            # Vite bundler configuration
└── LICENSE.md                # Proprietary evaluation license
```

---

## 📄 License

Proprietary Commercial Source & Evaluation License — see [`LICENSE.md`](./LICENSE.md) for full terms.
