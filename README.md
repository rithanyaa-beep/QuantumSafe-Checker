# QuantumSafe – Quantum-Safe Security Checker

QuantumSafe is an educational security audit workspace that evaluates cryptographic algorithms against future quantum computing threats (Shor's and Grover's algorithms) and guides organizations toward standardized post-quantum cryptography (NIST PQC).

---

## Project Structure

```text
QuantumSafe-Checker/
├── frontend/                     # React 19 + TypeScript + Vite UI (Figma Export)
│   ├── public/                   # Static assets (favicons, etc.)
│   ├── src/
│   │   ├── App.tsx               # Main application views, components, and state
│   │   ├── index.css             # Glassmorphism styling, design tokens, Tailwind v4
│   │   ├── main.tsx              # React DOM entry point
│   │   └── vite-env.d.ts
│   ├── index.html                # Vite HTML shell
│   ├── package.json              # Frontend dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   └── vite.config.ts            # Vite configuration
│
├── backend/                      # Python FastAPI application
│   ├── app.py                    # FastAPI application, CORS, and API routing
│   ├── security_rules.py         # Quantum vulnerability scoring & rule engine
│   ├── algorithms.json           # NIST PQC algorithm standards catalog
│   ├── inventory.py              # CSV parsing, schema validation, and asset evaluation
│   └── report.py                 # Summary metrics aggregation & CSV report generator
│
├── assets/                       # Brand logo and reference screenshots
├── requirements.txt              # Python backend dependencies
└── README.md                     # Project documentation
```

---

## Team Ownership

* **Member 1 (Frontend & API Integration):**
  * `frontend/` (React views, glassmorphism design, routing)
  * `backend/app.py` (FastAPI route controllers & CORS configuration)
  * Frontend API integration (`fetch` calls to backend endpoints)

* **Member 2 (Security Rules & Algorithm Catalog):**
  * `backend/security_rules.py` (Quantum vulnerability algorithms, Shor/Grover risk logic)
  * `backend/algorithms.json` (NIST FIPS 203/204/205 standards catalog & metadata)

* **Member 3 (Asset Inventory & Reporting):**
  * `backend/inventory.py` (CSV parsing, schema validation, Pandas asset processing)
  * `backend/report.py` (Risk distribution metrics, CSV export generator)

---

## Running the Application

### 1. Backend (FastAPI + Uvicorn)
From the project root:
```powershell
python -m uvicorn backend.app:app --reload --host 127.0.0.1 --port 8000
```
* **API Documentation:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
* **Health Check:** [http://127.0.0.1:8000/api/health](http://127.0.0.1:8000/api/health)

### 2. Frontend (React + Vite)
*(Prerequisite: Node.js LTS installed)*
```powershell
cd frontend
npm install
npm run dev
```
* **Frontend App:** [http://localhost:8443](http://localhost:8443)
