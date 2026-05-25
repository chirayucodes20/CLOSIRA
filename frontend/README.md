# Closira Frontend Mobile Dashboard

## Overview
This is a React Native mobile dashboard designed for business owners to monitor customer communications, inbound leads, and active escalations. It features a clean, intuitive UI with a component-based architecture.

## Quick Setup & Run Instructions
Follow these steps to run the frontend project locally:

1. Install dependencies:
npm install

2. Start the Expo server:
npx expo start

3. View the App:
- Press 'w' in the terminal to open the web-based emulator (Mobile View recommended).
- Alternatively, scan the QR code using the Expo Go app on your iOS or Android device.

-------------------------------------------------

## Architecture & Code Structure

To maintain a clean and scalable codebase, the project avoids monolithic screen files:
* /components: Contains highly reusable UI elements like `LeadCard.js` and `Badges.js`. The badges dynamically render correct color-coding based on channel and status.
* /screens: Individual screen components for the Bottom Tab and Stack Navigators.
* /mock: Contains `data.json` simulating a real API response with strict JSON formatting. Absolutely no backend is required to run this UI.

-------------------------------------------------

## Engineering Decisions & Styling Choice

Styling: I chose to use the built-in React Native `StyleSheet` API instead of NativeWind/Tailwind. 

Reasoning: For a lightweight mobile prototype consisting of exactly 5 screens, `StyleSheet` keeps the dependencies minimal, eliminates the configuration overhead of NativeWind, and ensures standard React Native styling practices are followed. It provides excellent performance, a clean separation of component logic and presentation, and keeps the build fast.

-------------------------------------------------

## Known Limitations

* Mock Data Only: The application state currently relies strictly on the local `/mock/data.json` file. State management (like marking a follow-up as done or resolving an escalation) is visual only and does not persist to a backend database.
* Navigation: The conversation detail screen is a simulated stack screen focusing on UI presentation rather than fetching dynamic thread IDs from a live server.

-------------------------------------------------

## Screenshots
Screenshots of all 5 required screens (Dashboard, Leads, Escalations, Follow-ups, and Conversation Detail) are included in the repository.