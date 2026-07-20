<div align="center">

# 🛍️ Stride-Shope

### Modern, Multilingual E-Commerce Front-End

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-7-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![License](https://img.shields.io/badge/License-Unlicensed-lightgrey)](#-license)

A fast, elegant, and responsive e-commerce storefront built with **React 19** and **Vite**, featuring Material UI & CoreUI components, multi-language support, protected routing, and global state management .

</div>

---

## ✨ Features

- ⚡ **Fast dev/build tooling** powered by Vite
- 🎨 **UI components** from Material UI (MUI) and CoreUI
- 🧭 **Client-side routing** with React Router, including a `ProtectedRouter` for auth-gated pages
- 🌍 **Internationalization (i18n)** with i18next / react-i18next and automatic language detection
- 📝 **Form handling & validation** using React Hook Form + Yup resolvers
- 🗃️ **Global state management** with Zustand
- 🔄 **Server state / data fetching** with TanStack React Query and Axios
- 🔔 **Toast notifications** via React Toastify
- ✨ **Particle effects** using tsParticles
- 🎨 **Custom fonts** — Inter, Manrope, Roboto (via Fontsource)
- ✅ **Linting** with ESLint (React Hooks + React Refresh plugins)

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| UI Libraries | MUI 7, CoreUI 5, Emotion |
| Routing | React Router DOM 7 |
| State Management | Zustand |
| Data Fetching | TanStack React Query, Axios |
| Forms & Validation | React Hook Form, Yup |
| Internationalization | i18next, react-i18next |
| Notifications | React Toastify |
| Effects | tsParticles |
| Linting | ESLint |

## 📁 Project Structure

```
react-shop/
├── public/               # Static assets
├── src/                  # Application source code
├── ProtectedRouter.jsx   # Route guard for protected/auth pages
├── i18next.jsx           # i18next configuration
├── theme.js              # MUI theme configuration
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
└── package.json          # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Mohammed-Alqerem/react-shop.git

# Move into the project directory
cd react-shop   # (rename the folder to "shoply" if you'd like)

# Install dependencies
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (Vite's default port).

### Building for Production

```bash
npm run build
```

### Previewing the Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the development server with hot module reloading |
| `npm run build` | Builds the app for production |
| `npm run lint` | Runs ESLint across the project |
| `npm run preview` | Serves the production build locally for preview |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project currently has no license specified. Consider adding one (e.g., MIT) to clarify how others can use your code.

## 👤 Author

**Mohammed Alqerem**
- GitHub: [@Mohammed-Alqerem](https://github.com/Mohammed-Alqerem)

<div align="center">

Made with ❤️ using React & Vite

</div>
