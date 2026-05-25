# 🚀 Closira Backend API Server

**Track:** Backend Assignment (Node.js / Express)  
**Candidate:** Chirayu Sharma

---

# 🎯 Overview

A robust and scalable RESTful API built to power the Closira mobile dashboard.

This backend is designed to handle:
- Inbound lead ingestion
- Intelligent categorization
- Lead routing
- Escalation management
- Business communication workflows

---

# 🚀 Key Features Implemented

## ✅ API Endpoints

Structured routes for:
- Fetching leads
- Handling escalations
- Managing follow-ups

---

## ✅ Webhook Simulation

Infrastructure ready to:
- Receive real-time communication events
- Process incoming webhooks

Examples:
- WhatsApp events
- Email notifications

---

## ✅ Clean Architecture

Implemented clear separation of concerns using:
- Controllers
- Routes
- Services

This ensures:
- Maintainability
- Scalability
- Cleaner debugging
- Better project organization

---

## ✅ Error Handling

Standardized JSON error responses for:
- Invalid requests
- Missing routes
- Edge cases
- Internal server issues

This prevents unexpected frontend crashes.

---

# 🛠️ Tech Stack & Engineering Decisions

## ⚙️ Backend Framework

Built using:

- Node.js
- Express.js

Chosen because of:
- Lightweight architecture
- Fast API routing
- Strong ecosystem support
- Scalability for future integrations

---

## 📦 Data Handling

Currently uses:
- Structured mock data
- In-memory storage

This was intentionally chosen for:
- Faster assignment setup
- Simplicity
- Demonstrating API architecture without DB dependency

The architecture is designed to easily integrate with:
- MongoDB
- PostgreSQL
- MySQL
- Firebase

in future iterations.

---

# 💻 Setup & Run Instructions

Follow these steps carefully to run the backend server locally.

---

## 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
```

---

## 2️⃣ Navigate to Backend Folder

```bash
cd backend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Start the Server

```bash
npm start
```

---

# 🌐 Server Information

The backend server will typically run on:

```bash
http://localhost:3000
```

or on the port defined in your environment configuration.

---

# 📡 Example API Routes

```bash
GET    /api/leads
GET    /api/escalations
POST   /api/followups
POST   /api/webhook
```

---

# 📂 Folder Structure

```bash
/backend
├── /controllers   # Request handling logic
├── /routes        # API endpoint definitions
├── /data          # Mock data / DB configs
├── /services      # Business logic layer
├── server.js      # Main application entry point
└── package.json
```

---

# ⚠️ Known Limitations & Trade-offs

## 🔹 Database Persistence

Currently:
- No permanent database integration
- Data resets on server restart

This was intentionally kept lightweight for assignment scope.

---

## 🔹 Authentication

Authentication and authorization layers:
- JWT
- OAuth
- Role-based access

are not implemented yet because they were outside the assignment requirements.

---

## 🔹 Production Deployment

The project is optimized for:
- Local development
- Assignment evaluation

Production-grade deployment features like:
- Docker
- CI/CD
- Rate limiting
- Caching
- Logging infrastructure

can be added in future iterations.
