# 🚀 Closira Full-Stack Dashboard (Frontend + Backend)

**Track:** Full-Stack Engineering Assignment  
**Candidate:** Chirayu Sharma

---

# 🎯 Overview

This repository contains my complete full-stack submission for the Closira Engineering Assignment.

The project is divided into two distinct and decoupled architectures:

- A Node.js + Express Backend API
- A React Native (Expo) Mobile Frontend

The platform is designed to help small and medium business owners seamlessly manage:

- Inbound leads
- Active escalations
- Pending follow-ups
- Customer communication workflows

---

# 🏗️ Project Architecture

The repository follows a monorepo structure containing two independent environments.

---

## 🔹 Backend (`/backend`)

Built using:
- Node.js
- Express.js

### Responsibilities
- API routing
- Webhook simulations
- Business logic handling
- Lead categorization workflows

### Architecture Style
Clean separation using:
- Controllers
- Routes
- Services

This ensures:
- Scalability
- Maintainability
- Cleaner debugging
- Easier feature expansion

---

## 🔹 Frontend (`/frontend`)

Built using:
- React Native
- Expo
- React Navigation

### Features
- Responsive mobile dashboard
- Bottom Tab Navigation
- Stack Navigation
- Dynamic status badging
- Graceful empty states

### UI Approach
Component-driven architecture strictly following Closira's:
- Color-coding standards
- Badge hierarchy
- Mobile-first UX guidelines

---

# 💻 Global Setup & Run Instructions

To run the complete full-stack project locally, you will need **two separate terminal windows**.

---

# 🖥️ Terminal 1 — Start Backend Server

## 1️⃣ Navigate to Backend Folder

```bash
cd backend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start the Backend Server

```bash
npm start
```

---

## 🌐 Backend Server

The API server will typically run on:

```bash
http://localhost:3000
```

and will be ready to accept incoming requests.

---

# 📱 Terminal 2 — Start Frontend Mobile App

## 1️⃣ Navigate to Frontend Folder

```bash
cd frontend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start Expo Development Server

```bash
npx expo start
```

---

# 📲 Running the Frontend

## Option 1 — Web Mobile View (Recommended)

After Expo starts, press:

```bash
w
```

Then:
1. Open Developer Tools (`F12`)
2. Toggle Mobile Device View:

```bash
Ctrl + Shift + M
```

This provides the most accurate mobile preview.

---

## Option 2 — Physical Device

1. Install **Expo Go** on your phone
2. Scan the QR code shown in the terminal

Supported Platforms:
- Android
- iOS

---

## Option 3 — Android Emulator

Start Android Studio Emulator and press:

```bash
a
```

inside the Expo terminal.

---

## Option 4 — iOS Simulator (Mac Only)

Press:

```bash
i
```

inside the Expo terminal.

---

# 📂 Monorepo Folder Structure

```bash
/root
├── /backend
│   ├── /controllers
│   ├── /routes
│   ├── /services
│   ├── /data
│   ├── server.js
│   └── package.json
│
├── /frontend
│   ├── /components
│   ├── /mock
│   ├── /screens
│   ├── App.js
│   └── package.json
```

---

# 🛠️ Tech Stack

## Backend
- Node.js
- Express.js

## Frontend
- React Native
- Expo
- React Navigation
- JavaScript
- React Native StyleSheet

---

# ⚠️ Notes for the Reviewer

## 🔹 API Readiness

The frontend currently uses structured JSON mock data to ensure:
- Zero setup friction
- Faster UI review
- Consistent demo behavior

However, the architecture is fully prepared to consume backend APIs using:
- Fetch API
- Axios

with minimal integration effort.

---

## 🔹 Engineering Focus

Priority was given to:
- Clean directory structures
- Modular component architecture
- Mobile responsiveness
- Graceful empty states
- Readable and maintainable code
- Standard engineering practices

instead of integrating unnecessary third-party complexity.

---

# ⚠️ Known Limitations

## 🔹 Persistence Layer

Currently:
- No permanent database integration
- Mock/in-memory data only

This was intentionally kept lightweight for assignment scope.

---

## 🔹 Authentication

Authentication systems such as:
- JWT
- OAuth
- Session handling

have not been implemented yet.

---

## 🔹 Production Infrastructure

Production-grade tooling like:
- Docker
- CI/CD
- Monitoring
- Logging infrastructure
- Rate limiting
- Caching

can be added in future iterations.
