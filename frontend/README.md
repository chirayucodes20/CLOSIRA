📱 Closira Mobile Dashboard - Frontend
Track: Frontend Assignment (React Native / Expo)
Candidate: Chirayu Sharma

🎯 Overview
A clean, component-driven mobile dashboard built for small and medium business owners to monitor inbound leads, escalations, and customer communications. Developed strictly following the Closira UI/UX guidelines, prioritizing mobile responsiveness, clear status indications, and a frictionless user experience.

🚀 Key Features Implemented
Bottom Tab Navigation: Intuitive routing between Home (Dashboard), Leads, Escalations, and Follow-ups.

Stack Navigation: Deep-dive Conversation Detail screen overlaying the tabs.

Dynamic Badging System: Strict color-coded visual hierarchy (e.g., WhatsApp: Green, Escalated: Red).

Graceful Empty States: User-friendly fallbacks for empty data lists, avoiding confusing blank screens.

🛠️ Architecture & Engineering Decisions
State & Data: Completely decoupled from backend dependencies. Driven entirely by strict JSON mock data (/mock/data.json) to demonstrate pure API-readiness.

Styling Choice (React Native StyleSheet): Opted for standard StyleSheet over NativeWind.

Reasoning: For a concise 5-screen prototype, StyleSheet eliminates configuration overhead, keeps the bundle lightweight, and demonstrates a solid grasp of core React Native styling principles.

Modular Components: UI elements (like LeadCard, ChannelBadge, StatusBadge) are isolated in the /components directory, ensuring zero monolithic screen files.

💻 Setup & Run Instructions
Follow these precise steps to run the application locally:

1. Install Dependencies
npm install

2. Start the Expo Development Server
npx expo start

3. View the Application

Recommended (Mobile View in Web): Press 'w' in the terminal to open the web bundler. Once it opens in your browser, press F12 to open Developer Tools and toggle the Mobile Device View (Ctrl+Shift+M) for the accurate layout.

Physical Device: Scan the terminal's QR code using the Expo Go app (iOS/Android).

📂 Folder Structure
/frontend
├── /components    # Reusable UI elements (Badges, Cards)
├── /mock          # API-ready JSON data
├── /screens       # Individual screen components
├── App.js         # Core navigation setup
└── package.json

⚠️ Known Limitations & Trade-offs
Visual State Management: Actions like "Mark as Done" or "Resolve" are purely visual UI implementations right now. They do not persist or mutate data, as backend integration was explicitly out of scope for this track.

Web Rendering: While fully functional on the web via Expo, the UI dimensions, padding, and shadows are strictly optimized for mobile device viewports.
