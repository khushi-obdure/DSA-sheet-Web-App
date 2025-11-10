# DSA Sheet Frontend

This project is the **frontend** of the **DSA Sheet Web Application**, built with **React + TypeScript + Tailwind CSS**.  
It provides an interactive interface for students to learn Data Structures & Algorithms, track progress, and access related learning resources.

---

## Features

###  Login Page
- Secure login and signup functionality for students.
- User authentication handled via JWT tokens.
- Session persistence — users stay logged in across page reloads.

---

###  Topic-wise Chapters / Subtopics / Problems
- Displays DSA topics in a **structured accordion layout**.
- Each topic contains **subtopics**, and each subtopic includes **multiple problems**.
- Example structure:
Arrays
│ ├── Problem 1: Two Sum
│ ├── Problem 2: Move Zeros
│ └── Problem 3: Max Subarray


---

### YouTube Tutorial Links
- Each problem includes a **YouTube link** to help students learn the concept visually.

---

### LeetCode / Codeforces Links
- Direct **practice links** for hands-on coding experience.

---

### Article Links
- Links to **reference articles** for theoretical understanding.

---

###  Level Indicator
- Problems are tagged with difficulty levels:
-  Easy  
-  Medium  
-  Hard  

---

###  Progress Tracker (Checkbox)
- Each problem includes a **checkbox** to mark completion.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend Framework** | React + TypeScript |
| **Styling** MUI |
| **API Communication** | Fetch API  |
| **Routing** | React Router DOM |
| **Build Tool** | Vite |

---

## ⚙️ Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/khushi-obdure/DSA-sheet-Web-App.git
cd client
npm install
```


To start the frontend development server:
```bash
npm run dev
```


Update your .env file in the root of the project:
```bash
VITE_API_URL=http://localhost:4000
```