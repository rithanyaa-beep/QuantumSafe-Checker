# QuantumSafe – Quantum-Safe Security Checker

A web-based application that evaluates the quantum-readiness of cryptographic algorithms and helps identify potential security risks associated with quantum computing. QuantumSafe provides cryptographic assessment, asset inventory management, risk analysis, and post-quantum migration guidance.

---

## 1. Project Overview

QuantumSafe is designed to help users understand the security of cryptographic algorithms against potential quantum-computing threats.

The application evaluates classical and post-quantum cryptographic algorithms, identifies vulnerable algorithms, validates their use cases, and provides recommendations for transitioning towards quantum-resistant cryptography.

It also allows users to upload CSV-based cryptographic asset inventories and generate reports containing risk distributions and migration priorities.

The application follows a full-stack architecture:

- **Frontend:** React, TypeScript and Vite
- **Backend:** Python and FastAPI
- **Data Management:** JSON algorithm catalogue and CSV asset inventory

> **Note:** The assessment results are based on predefined security rules and algorithm metadata. They are not live tests against a quantum computer or a substitute for a formal cryptographic security audit.

---

## 2. Problem Statement

Traditional cryptographic algorithms such as RSA, ECDH and ECDSA are widely used for securing digital communication and sensitive information. However, sufficiently powerful quantum computers could threaten these algorithms through Shor's algorithm.

Grover's algorithm may also reduce the effective security strength of symmetric encryption algorithms.

Organizations need a systematic way to identify vulnerable cryptographic assets, understand their quantum-related risks, and plan their migration towards post-quantum cryptographic solutions.

QuantumSafe addresses this problem by providing an interactive platform for cryptographic assessment, asset inventory management, risk analysis and migration guidance.

---

## 3. Objectives

- Evaluate classical and post-quantum cryptographic algorithms.
- Identify cryptographic algorithms vulnerable to quantum-computing attacks.
- Validate algorithm and use-case combinations.
- Classify cryptographic assets according to their security risk.
- Provide recommendations for adopting post-quantum cryptography.
- Maintain an inventory of cryptographic assets through CSV uploads.
- Generate reports containing risk distributions and migration priorities.
- Provide a user-friendly dashboard for understanding cryptographic security.

---

## 4. Key Features

### 4.1 Dashboard

Provides an overview of the application's security assessment and cryptographic inventory information.

### 4.2 Security Checker

Allows users to select cryptographic algorithms and their intended use cases.

The system evaluates the selected combination and displays:

- Algorithm information
- Cryptographic family
- Use-case validation
- Risk classification
- Quantum threat explanation
- Security recommendations
- Standardization information

### 4.3 Asset Inventory Management

Allows users to upload CSV files containing cryptographic asset information.

The system validates the uploaded file, processes the records, and displays the available inventory.

### 4.4 Reports and Analytics

Generates summaries of cryptographic assets, including:

- Total number of assets
- Risk distribution
- Risk percentages
- Algorithm distribution
- Criticality distribution
- Recommendation counts
- High-priority assets
- Migration guidance

### 4.5 Migration Roadmap

Provides guidance for identifying vulnerable cryptographic algorithms and considering suitable post-quantum alternatives.

### 4.6 Input Validation and Error Handling

Handles invalid algorithm names, unsupported use cases, empty CSV files, missing CSV columns, unsupported file formats and API errors.

---

## 5. Technology Stack

| Component | Technology |
|---|---|
| Frontend | React 19 |
| Programming Language | TypeScript |
| Frontend Build Tool | Vite |
| Backend Framework | FastAPI |
| Backend Language | Python |
| API Communication | REST API |
| Inventory Data | CSV |
| Algorithm Metadata | JSON |
| Testing | Python test scripts |
| Version Control | Git |
| Repository Hosting | GitHub |
| Development Environment | Visual Studio Code |

---

## 6. Project Structure

```text
QuantumSafe-Checker/
│
├── backend/
│   ├── app.py
│   ├── security_rules.py
│   ├── algorithms.json
│   ├── inventory.py
│   ├── report.py
│   │
│   ├── test_security_engine.py
│   ├── test_inventory.py
│   ├── test_report.py
│   ├── test_api.py
│   └── test_live_qa.py
│
├── frontend/
│   └── src/
│       ├── App.tsx
│       ├── api.ts
│       └── ...
│
├── assets/
│
├── requirements.txt
├── README.md
└── .gitignore
```

### Backend Modules

| File | Description |
|---|---|
| `app.py` | Implements the FastAPI application, request handling and API endpoints. |
| `security_rules.py` | Contains cryptographic assessment rules and risk classification logic. |
| `algorithms.json` | Stores algorithm metadata and supported cryptographic information. |
| `inventory.py` | Handles CSV parsing, validation and inventory processing. |
| `report.py` | Calculates inventory summaries, risk distributions and migration priorities. |
| `test_security_engine.py` | Tests the cryptographic assessment engine. |
| `test_inventory.py` | Tests CSV inventory processing and validation. |
| `test_report.py` | Tests report summary calculations. |
| `test_api.py` | Tests backend API functionality. |
| `test_live_qa.py` | Performs live frontend and backend integration checks. |

---

## 7. Cryptographic Algorithms Supported

The application includes classical, symmetric and post-quantum cryptographic algorithms.

| Algorithm | Description | Quantum Security Context |
|---|---|---|
| RSA | Public-key cryptographic algorithm | Vulnerable to Shor's algorithm |
| ECDH | Elliptic Curve Diffie-Hellman key exchange | Vulnerable to Shor's algorithm |
| ECDSA | Elliptic Curve Digital Signature Algorithm | Vulnerable to Shor's algorithm |
| AES | Symmetric encryption algorithm | Grover's algorithm may reduce effective security strength |
| ML-KEM | Module-Lattice-Based Key-Encapsulation Mechanism | Post-quantum key establishment |
| ML-DSA | Module-Lattice-Based Digital Signature Algorithm | Post-quantum digital signatures |
| SLH-DSA | Stateless Hash-Based Digital Signature Algorithm | Post-quantum digital signatures |

The application uses the following NIST standards for post-quantum algorithms:

- **FIPS 203:** ML-KEM
- **FIPS 204:** ML-DSA
- **FIPS 205:** SLH-DSA

### Risk Classification

The assessment engine can return classifications such as:

- **High risk:** Algorithms or combinations identified as vulnerable according to the application's rules.
- **Lower quantum risk:** Algorithms for which the configured assessment indicates comparatively lower quantum-related risk.
- **Quantum-safe:** Supported post-quantum algorithm combinations.
- **Invalid use case:** An algorithm is paired with an unsupported use case.
- **Unknown algorithm:** The requested algorithm is not available in the algorithm catalogue.

---

## 8. Installation and Setup

### Prerequisites

Install the following software before running the project:

- Python 3.10 or later
- Node.js
- npm
- Git
- Visual Studio Code

Verify the installations:

```powershell
python --version
node --version
npm --version
git --version
```

### Step 1: Clone the Repository

```powershell
git clone https://github.com/rithanyaa-beep/QuantumSafe-Checker.git
```

Navigate to the project directory:

```powershell
cd QuantumSafe-Checker
```

### Step 2: Create a Python Virtual Environment

```powershell
python -m venv .venv
```

Activate the environment in Windows PowerShell:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
.\.venv\Scripts\Activate.ps1
```

### Step 3: Install Backend Dependencies

Run the following command from the project root:

```powershell
pip install -r requirements.txt
```

### Step 4: Install Frontend Dependencies

Navigate to the frontend directory:

```powershell
cd frontend
```

Install the required packages:

```powershell
npm install
```

Return to the project root:

```powershell
cd ..
```

---

## 9. Running the Application

The backend and frontend must run simultaneously in separate terminals.

### 9.1 Start the Backend

Open the first PowerShell terminal in the project root.

Activate the virtual environment if it is not already activated:

```powershell
.\.venv\Scripts\Activate.ps1
```

Start the FastAPI server:

```powershell
python -m uvicorn backend.app:app --reload --host 127.0.0.1 --port 8000
```

Backend URL:

```text
http://127.0.0.1:8000
```

FastAPI interactive documentation:

```text
http://127.0.0.1:8000/docs
```

### 9.2 Start the Frontend

Open a second PowerShell terminal.

Navigate to the frontend directory:

```powershell
cd frontend
```

Start the Vite development server:

```powershell
npm run dev
```

Vite displays the frontend URL in the terminal.

Open the URL displayed by Vite in your web browser.

**Important:** Keep both the backend and frontend terminals running while using the application.

---

## 10. API Endpoints

The backend provides REST API endpoints for health checks, algorithm information, cryptographic assessments, inventory management and report generation.

| HTTP Method | API Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Checks backend service health. |
| GET | `/api/algorithms` | Retrieves the supported algorithm catalogue. |
| POST | `/api/assess` | Performs cryptographic algorithm assessment. |
| POST | `/api/inventory/upload` | Uploads and processes a CSV inventory. |
| GET | `/api/inventory` | Retrieves the current asset inventory. |
| DELETE | `/api/inventory` | Clears the current asset inventory. |
| GET | `/api/report/summary` | Generates the inventory report summary. |
| GET | `/api/report/export` | Exports the report. |

For detailed request parameters and response structures, access:

`http://127.0.0.1:8000/docs`

---

## 11. Asset Inventory CSV Format

The inventory module accepts CSV files containing cryptographic asset information.

The following columns are required:

- `asset_name`
- `algorithm`
- `use_case`

### Sample CSV

```csv
asset_name,algorithm,use_case
Payment Gateway,RSA,Digital signatures
Internal Key Exchange,ECDH,TLS key establishment
Backup Encryption,AES,Data encryption
Post Quantum Key Service,ML-KEM,TLS key establishment
Document Signing,ML-DSA,Digital signatures
```

### CSV Processing

1. The user uploads a CSV file.
2. The backend validates the file format.
3. The inventory module checks the required column names.
4. Valid records are parsed and processed.
5. The processed records are made available through the inventory API.
6. Report summaries can be generated using the inventory data.

Files with missing required columns, empty content or unsupported formats may be rejected with appropriate error responses.

**Note:** Inventory data is currently maintained in backend application memory. It may be lost when the backend server restarts.

---

## 12. Testing

The project includes individual backend tests and a live full-stack quality assurance script.

### 12.1 Security Engine Testing

```powershell
python backend/test_security_engine.py
```

Tests algorithm assessment rules, risk classifications and use-case validation.

### 12.2 Inventory Testing

```powershell
python backend/test_inventory.py
```

Tests CSV processing, required column validation and inventory operations.

### 12.3 Report Testing

```powershell
python backend/test_report.py
```

Tests report summary calculations and risk distribution.

### 12.4 API Testing

```powershell
python backend/test_api.py
```

Tests backend API functionality.

### 12.5 Live Full-Stack QA Testing

Before running this test, start both the FastAPI backend and the Vite frontend.

Open a third terminal at the project root and execute:

```powershell
.\.venv\Scripts\Activate.ps1
python backend/test_live_qa.py
```

The live QA script checks frontend functionality, backend responses, integration, error handling and cryptographic assessment scenarios.

The script displays the individual test results and the overall pass percentage.

**Testing note:** Always update the reported test results using the latest actual test execution. Do not claim that all tests pass unless the latest execution confirms it.

---

## 13. Sample Test Scenarios

| Test Scenario | Input | Expected Behaviour |
|---|---|---|
| RSA Assessment | RSA with a supported digital-signature use case | Displays the configured quantum-risk classification. |
| ECDH Assessment | ECDH with TLS key establishment | Explains the Shor's algorithm threat. |
| AES Assessment | AES with data encryption | Explains the impact of Grover's algorithm. |
| ML-KEM Assessment | ML-KEM with TLS key establishment | Identifies the post-quantum key-establishment algorithm. |
| ML-DSA Assessment | ML-DSA with digital signatures | Identifies the post-quantum signature algorithm. |
| Unknown Algorithm | Unsupported algorithm name | Returns an unknown-algorithm result. |
| Invalid Use Case | Unsupported algorithm and use-case combination | Returns an invalid-use-case result. |
| Valid CSV Upload | CSV with all required columns | Processes valid inventory records. |
| Invalid CSV Upload | CSV with missing required columns | Rejects the invalid inventory file. |
| Empty CSV Upload | Empty CSV file | Returns an appropriate validation error. |

---

## 14. Git and GitHub Version Control

The project uses Git for version control and GitHub for repository hosting.

**GitHub Repository:**

https://github.com/rithanyaa-beep/QuantumSafe-Checker

### Git Workflow

1. Create or clone the project repository.
2. Organize the frontend and backend into separate directories.
3. Create meaningful commits for individual changes.
4. Use feature branches for independent development.
5. Push completed changes to GitHub.
6. Create pull requests for reviewing team contributions.
7. Merge approved changes into the main branch.

### Example Git Commands

Create a feature branch:

```powershell
git switch -c feature/your-feature-name
```

Add modified files:

```powershell
git add .
```

Commit the changes:

```powershell
git commit -m "Update project functionality"
```

Push the feature branch:

```powershell
git push -u origin feature/your-feature-name
```

After review, create and merge a pull request through GitHub.

### .gitignore

The repository should exclude generated files, virtual environments and sensitive configuration files.

Example:

```gitignore
.venv/
venv/
node_modules/
.env
.env.local
dist/
build/
__pycache__/
*.pyc
*.log
.DS_Store
```

---

## 15. Team Contributions

The project development is divided into three major areas.

RITHANYAA K – Frontend Development
•	Developed the frontend user interface using React, TypeScript and Vite.
•	Designed the application layout, dashboard and interactive components.
•	Implemented the user-friendly interface for cryptographic security assessment.
•	Integrated frontend components with backend API endpoints.
•	Improved the responsiveness and usability of the application.
RAKCHANA R – Backend Development
•	Developed the backend using Python and FastAPI.
•	Implemented REST API endpoints for cryptographic assessment and application functionality.
•	Developed the security assessment logic for evaluating cryptographic algorithms.
•	Implemented algorithm classification and quantum risk evaluation.
•	Integrated backend modules and handled request validation and error responses.
SETHULATHA MS– Asset and backend Management
•	Developed the cryptographic asset inventory functionality.
•	Implemented CSV file uploading, parsing and validation.
•	Managed cryptographic asset records and inventory processing.
•	Implemented risk distribution, prioritization metrics and inventory summaries.
•	Developed report generation and CSV export functionality.


---

## 16. Current Limitations

- The application uses predefined rules and catalogue information for security assessments.
- It does not perform live quantum-computer simulations or cryptographic attacks.
- Inventory records are stored in backend memory and are not permanently persisted.
- Assessment coverage is limited to the algorithms and use cases implemented in the current catalogue.
- The application is intended as an educational and planning tool, not a certified security auditing solution.
- Real-world migration decisions require additional system-specific security analysis and expert review.

---

## 17. Future Enhancements

- Integrate a database for persistent cryptographic asset storage.
- Introduce user authentication and role-based access control.
- Expand the cryptographic algorithm catalogue.
- Add more detailed asset-level migration tracking.
- Improve reporting with downloadable PDF formats.
- Introduce advanced filtering and search for inventory records.
- Add automated testing and continuous integration.
- Deploy the application to a cloud environment.
- Keep cryptographic standards and algorithm metadata updated.

---

## 18. Conclusion

QuantumSafe provides an interactive platform for understanding cryptographic security in the context of emerging quantum-computing threats.

By combining algorithm assessment, use-case validation, asset inventory management and reporting, the application helps users identify potentially vulnerable cryptographic assets and understand the importance of post-quantum cryptography.

The project demonstrates the integration of modern frontend technologies, Python backend development, REST APIs, security assessment logic, CSV processing and GitHub-based collaborative software development.

---

**Project Name:** QuantumSafe – Quantum-Safe Security Checker

**Repository:** https://github.com/rithanyaa-beep/QuantumSafe-Checker

**Developed Using:** React, TypeScript, Vite, Python and FastAPI