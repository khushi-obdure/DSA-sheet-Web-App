#  DSA Sheet Backend (MERN Stack)

This is the **backend API** for the **DSA Sheet Web Application**, built using **Node.js**, **Express**, and **MongoDB**.  
It provides secure authentication, structured DSA topic management, and progress tracking functionality for students.

---

##  Features

###  User Authentication
- Secure **login and registration** for students.
- Passwords encrypted using **bcrypt**.
- JWT-based authentication for secure session management.

---

###  DSA Topics / Chapters / Subtopics / Problems
- APIs to fetch **DSA topics** with nested **subtopics** and **problems**.
- Supports structured data hierarchy for better organization.
- Each problem includes:
  - **Problem name**
  - **YouTube tutorial link**
  - **LeetCode / Codeforces practice link**
  - **Article link**
  - **Level indicator** (Easy / Medium / Hard)

---

###  Progress Tracker
- Each problem includes a **completion checkbox**.
- When a student marks a problem as completed:
  - The progress is **saved in MongoDB**.
  - On next login, progress is **restored** automatically.

---

###  API Features
- RESTful API design
- JSON-based responses
- Proper status codes and error handling
- Environment variable-based configuration for flexibility

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB + Mongoose |
| **Authentication** | JWT (JSON Web Tokens) |
| **Password Security** | bcrypt.js |
| **Environment Management** | dotenv |
| **Type Checking (optional)** | TypeScript |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/khushi-obdure/DSA-sheet-Web-App.git
cd server
npm install
```


To start the frontend development server:
```bash
npm run dev
```


Update your .env file in the root of the project:
```bash
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
```



POST /api/auth/register
```
    {
    "username": "khushi09",
    "email": "khushimaheshwari0907@gmail.com",
    "password": "Khushi@123",
    "fullName": "Khushi",
    "graduationYear": "2023"
}
```

POST /api/auth/login
```
{
  "email": "student@example.com",
  "password": "password123"
}
```

GET /api/topic
