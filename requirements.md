# सहायकAI (SahayakAI)

## Requirements Document

**Version:** 1.1
**Date:** February 15, 2026

---

## 1. Project Overview

### 1.1 Purpose
**सहायकAI** is an intelligent civic assistant designed to bridge the gap between citizens and government services using AI, NLP, and voice technology.

### 1.2 Problem & Solution
A significant portion of citizens are unable to access government benefits due to complexity and language barriers. **सहायकAI** analyzes family profiles, simplifies bureaucratic language into user-friendly explanations, and guides users through applications using voice in regional languages.

## 2. Objectives
*   **Access:** Centralized access to 500+ schemes with intelligent search.
*   **Inclusion:** Support regional languages, voice interaction, and low-bandwidth areas.
*   **Personalization:** AI-driven scheme matching based on family profiles.
*   **Self-Service:** Automated form filling and document assistance.

## 3. Target Users
*   **Families:** Core segment needing scheme discovery and tracking.
*   **Students:** Scholarships and exam resources.
*   **Workers:** Employment schemes and labor rights.
*   **Elderly/Low-Literacy:** Voice-first interface users.

## 4. Functional Requirements

### 4.1 User Management & Auth
*   **FR1:** Family-centric profiles with role-based access.
*   **FR2:** Secure authentication via **Firebase Auth** (Phone/OTP, Social).

### 4.2 AI Scheme Matching
*   **FR3:** Analyze profiles (income, caste, location) using **OpenAI API**.
*   **FR4:** Match against scheme database and rank by relevance.
*   **FR5:** Explain eligibility logic clearly.

### 4.3 Voice & Language
*   **FR6:** Voice-first interaction using **ElevenLabs** (Output) and **Google Speech-to-Text** (Input).
*   **FR7:** Real-time translation and simplification of bureaucratic text.

### 4.4 Document & OCR
*   **FR8:** Scan documents using **Google Vision API** for data extraction.
*   **FR9:** Secure storage and auto-verification of documents.

### 4.5 Offline & Accessibility
*   **FR10:** **PWA** support with Service Workers and IndexedDB for offline access.
*   **FR11:** Low-bandwidth mode for rural connectivity.

### 4.6 Notifications & Automation
*   **FR12:** Deadline reminders and status updates via **n8n** automation workflows.
*   **FR13:** WhatsApp/SMS integration for alerts.

## 5. Non-Functional Requirements

### 5.1 Scalability & Performance
*   **NFR1:** Handle high concurrency using **Vercel** (Frontend) and **Render** (Backend).
*   **NFR2:** **Firebase Firestore** for scalable, real-time data syncing.

### 5.2 Security
*   **NFR3:** Data encryption at rest and in transit.
*   **NFR4:** Compliance with data protection laws (GDPR/DPDP).

### 5.3 Accessibility
*   **NFR5:** WCAG 2.1 AA compliance.
*   **NFR6:** Screen reader and voice navigation support.

## 6. Data Requirements
*   **User Data:** Demographics, income, education (Stored in Firestore).
*   **Scheme Data:** Metadata, eligibility rules, deadlines.
*   **Documents:** Encrypted links and OCR metadata.

## 7. Constraints
*   **Connectivity:** Must function on 2G/3G networks.
*   **Devices:** Support for low-end smartphones.
*   **Language:** Accurate processing of regional dialects.
