# 🧠 Smart Task Analyzer  
### AI-Enhanced Task Prioritization | Django Backend + Vite React Frontend

![GitHub repo size](https://img.shields.io/github/repo-size/AppamAkhil/task-analyzer)
![GitHub stars](https://img.shields.io/github/stars/AppamAkhil/task-analyzer?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/AppamAkhil/task-analyzer)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📌 Overview

**Smart Task Analyzer** is a mini productivity system built with:

- **Django (Backend)** – Handles scoring logic, model definitions & API endpoints  
- **Vite + React 17 (Frontend)** – Provides a fast, clean UI for analyzing tasks  

The system accepts a list of tasks and returns a **ranked priority list** using a custom scoring algorithm based on:

- ⏳ Due date urgency  
- 🔥 Importance (1–10 scale)  
- 🕒 Effort & quick wins  
- 🔗 Dependencies  
- 🧩 Missing or invalid data handling  

This is perfect for productivity apps, dashboards, task managers, or interview assignments.

---

## 🚀 Features

### 🔍 **Smart Scoring Algorithm**
- Detects overdue tasks  
- Prioritizes high importance items  
- Rewards quick wins  
- Penalizes long tasks & dependency chains  
- Handles missing dates gracefully  

### 🧭 **API Endpoints**
- `/analyze/` → Returns sorted tasks with scores  
- `/suggest/` → Returns Top 3 tasks + explanation  

### 🖥️ **Fast Modern Frontend**
- React 17 + Vite  
- Styled-components  
- React Icons + React Player support  
- Clean UI with 2-panel layout  

### ✔ Additional Perks
- Node 18–24 compatible  
- Fully modular code  
- GitHub-ready project structure  

---

## 🛠️ Tech Stack

### **Backend**
- Python 3.8+
- Django 4+
- SQLite (default)
- django-cors-headers

### **Frontend**
- Vite
- React 17
- Styled Components
- React Icons
- JS Cookies

---

## 📂 Folder Structure

task-analyzer/
│
├── backend/
│ ├── backend/
│ ├── tasks/
│ ├── manage.py
│ └── requirements.txt
│
├── frontend/
│ ├── index.html
│ ├── vite.config.js
│ └── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── api.js
│ ├── components/
│ ├── styles.js
│ └── styles.css
│
└── README.md


---

## 🧪 API Documentation

### ### ✔ POST `/api/tasks/analyze/`

**Input (JSON Array):**
```json
[
  {
    "title": "Finish assignment",
    "due_date": "2025-02-20",
    "importance": 9,
    "estimated_hours": 3,
    "dependencies": []
  }
]

Response:

[
  {
    "title": "Finish assignment",
    "_score": 87.5,
    "_reasons": ["urgency scaled: 10", "importance contrib: 45"],
    "_normalized": {
      "importance": 9,
      "estimated_hours": 3,
      "dependencies": [],
      "due_date": "2025-02-20"
    }
  }
]

✔ POST /api/tasks/suggest/

Returns Top 3 prioritized tasks with short explanation.

🏃 Running Locally
⬇ Clone the project
git clone https://github.com/AppamAkhil/task-analyzer.git
cd task-analyzer

🖥 Backend Setup (Django)
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Backend runs at:

http://127.0.0.1:8000

💻 Frontend Setup (Vite + React)
cd ../frontend
npm install
npm run dev


Frontend runs at:

http://localhost:3000

🖼️ Screenshots

Add screenshots here after running the project:

![UI Screenshot](screens/ui.png)
![API Screenshot](screens/api.png)

🧭 Roadmap

 Add JWT authentication

 User-based task storage

 Database synchronization

 Drag-and-drop task editor

 Dark mode UI

 Deploy backend on Render / Railway

 Deploy frontend on Vercel / Netlify

🤝 Contributing

Pull requests are welcome.
Submit issues for feature requests or bugs.

📄 License

This project is licensed under the MIT License.

⭐ Support

If you like the project, please give a ⭐ on GitHub!


---

# ✅ Want me to:
✔ Add **screenshots**?  
✔ Add **badges for technologies**?  
✔ Add **GitHub Actions CI pipeline**?  
✔ Add **Docker support**?  
✔ Add **deployment guide (Vercel + Render)**?  

Just tell me!
