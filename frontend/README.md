# 📱 Closira Mobile Dashboard - Frontend

**Track:** Frontend Assignment (React Native / Expo)  
**Candidate:** Chirayu Sharma

---

## 🎯 Overview

A clean, component-driven mobile dashboard built for small and medium business owners to monitor inbound leads, escalations, and customer communications.

Developed strictly following the Closira UI/UX guidelines, prioritizing:
- Mobile responsiveness
- Clear status indications
- Frictionless user experience

---

## 🚀 Key Features Implemented

### ✅ Bottom Tab Navigation
Intuitive routing between:
- Home (Dashboard)
- Leads
- Escalations
- Follow-ups

### ✅ Stack Navigation
Deep-dive Conversation Detail screen overlaying the tabs.

### ✅ Dynamic Badging System
Strict color-coded visual hierarchy:
- WhatsApp → Green
- Escalated → Red

### ✅ Graceful Empty States
User-friendly fallbacks for empty data lists, avoiding confusing blank screens.

---

## 🛠️ Architecture & Engineering Decisions

### 📦 State & Data
Completely decoupled from backend dependencies.

Driven entirely by strict JSON mock data:

# 💻 Setup & Run Instructions

Follow these steps carefully to run the application locally.

---

## 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
```

---

## 2️⃣ Navigate to the Project Folder

```bash
cd frontend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Start the Expo Development Server

```bash
npx expo start
```

---

# 📱 Running the App

## Option 1 — Run on Web (Recommended for Quick Testing)

Press:

```bash
w
```

inside the terminal after starting Expo.

Then:
1. Open Developer Tools (`F12`)
2. Toggle Mobile Device View:

```bash
Ctrl + Shift + M
```

This provides the most accurate mobile preview.

---

## Option 2 — Run on Physical Device

1. Install **Expo Go** on your phone
2. Scan the QR code shown in the terminal

Supported Platforms:
- Android
- iOS

---

## Option 3 — Run on Android Emulator

Make sure Android Studio Emulator is running, then press:

```bash
a
```

inside the Expo terminal.

---

## Option 4 — Run on iOS Simulator (Mac Only)

```bash
i
```

inside the Expo terminal.

---

# ✅ Tech Stack

- React Native
- Expo
- React Navigation
- JavaScript
- React Native StyleSheet

---

# 📂 Project Structure

```bash
/frontend
├── /components
├── /mock
├── /screens
├── App.js
└── package.json
```

```bash
/mock/data.json
