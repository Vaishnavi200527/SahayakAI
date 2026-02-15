# सहायकAI (SahayakAI)

## Design Document

**Version:** 1.1
**Platform:** Family-Centric AI Civic Assistant

---

## 1. System Architecture
**सहायकAI** utilizes a modern, serverless-first architecture to ensure scalability and ease of maintenance. The system is composed of a Next.js frontend, a Node.js/Express backend, and leverages Firebase for data and auth, with specialized AI services for intelligence.

## 2. Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React + Next.js |
| **Backend** | Node.js + Express |
| **Database** | Firebase Firestore (NoSQL) |
| **Authentication** | Firebase Auth |
| **AI Engine** | OpenAI API (GPT-4o/Turbo) |
| **Voice** | ElevenLabs (TTS) + Google Speech-to-Text (STT) |
| **Automation** | n8n (Workflow Automation) |
| **OCR** | Google Vision API |
| **Hosting** | Vercel (Frontend) + Render (Backend) |
| **Offline Support** | PWA (Service Workers + IndexedDB) |

## 3. Core Components

### 3.1 Frontend (Next.js)
*   **PWA:** Offline-first capabilities using Service Workers.
*   **UI:** Responsive design optimized for mobile and accessibility.
*   **State:** Local state management synced with Firestore listeners.

### 3.2 Backend (Node.js + Express)
*   **API Layer:** RESTful endpoints hosted on Render.
*   **Orchestration:** Handles complex logic not suitable for client-side.
*   **Integration:** Connects with OpenAI, Google Vision, and n8n.

### 3.3 Database (Firebase Firestore)
*   **User Profiles:** Stores family hierarchies and demographics.
*   **Schemes:** Collection of government schemes with vector embeddings for search.
*   **Real-time:** Instant updates for application status and notifications.

### 3.4 AI & Automation Layer
*   **Scheme Matching:** OpenAI API analyzes user JSON profiles against scheme criteria.
*   **Voice Interface:**
    *   Input: Google STT converts user speech to text.
    *   Processing: OpenAI NLP understands intent.
    *   Output: ElevenLabs generates natural-sounding regional voice.
*   **OCR:** Google Vision API extracts text from Aadhaar/Income certificates for auto-filling forms.
*   **Workflows:** n8n handles scheduled tasks (deadline reminders) and cross-service triggers.

## 4. Data Flow

1.  **User Input:** Voice command captured via PWA.
2.  **Processing:** Audio -> Google STT -> Text -> Node.js Backend.
3.  **Intelligence:** Backend sends context to OpenAI API -> Returns Intent/Action.
4.  **Action:**
    *   *Query:* Firestore queried for matching schemes.
    *   *Update:* User profile updated in Firestore.
5.  **Response:** Text response generated -> ElevenLabs TTS -> Audio played to user.

## 5. Security & Scalability

### 5.1 Security
*   **Auth:** Firebase Auth handles identity (Phone/OTP).
*   **Rules:** Firestore Security Rules enforce data access (users can only read their own data).
*   **Secrets:** Environment variables in Vercel/Render for API keys.

### 5.2 Scalability
*   **Frontend:** Vercel Edge Network for global low-latency delivery.
*   **Database:** Firestore auto-scales with user load.
*   **Backend:** Render auto-scaling for Node.js instances.

## 6. Offline Strategy
*   **Caching:** Service Workers cache app shell and static assets.
*   **Data:** IndexedDB stores recent schemes and user profile for offline viewing.
*   **Sync:** Changes made offline are queued and synced to Firestore when online.

## 7. Observability & Monitoring
*   **Logging:** Firebase Analytics + backend logs.
*   **Error Tracking:** Sentry.
*   **Analytics:** Usage analytics for AI requests.
*   **Security:** Rate limiting to prevent abuse.
