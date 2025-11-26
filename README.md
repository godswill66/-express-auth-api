 Express Backend with NGINX Reverse Proxy

This project is a production-ready Node.js backend built with **Express.js**, configured to run behind **NGINX** as a reverse proxy.  
It supports environment variables, JWT authentication, modular routing, and automatic server restarts using **Nodemon** during development.

---

📂 Project Structure
project-root/
│
├── src/
│ ├── controllers/
│ ├── middleware/
│ ├── routes/
│ ├── config/
│ ├── utils/
│ ├── server.js
│
├── public/ # Optional frontend folder
├── .env
├── .gitignore
├── package.json

| Folder | Description |
|--------|-------------|
| **controllers** | Logic for handling requests (register, login, etc.) |
| **routes** | Route definitions like `/auth`, `/users`, `/admin` |
| **middleware** | JWT auth, error handlers, etc. |
| **config** | Database config (MySQL, MongoDB), environment setup |
| **utils** | Helper functions (e.g. generateToken) |
| **public** | Static frontend files (optional) |

✔️ Features

- ⚡ Express.js backend  
- 🔐 JWT Authentication  
- 🧩 Modular routes & controllers  
- 🔄 Auto-restart using Nodemon  
- 🛡️ NGINX reverse proxy configuration  
- 🌐 Can serve frontend + backend from same server  
- 🛠 Easily deployable on Windows or Linux  

---

🛠 Installation (Windows)
**1. Clone the project**
```bash
git clone <epress-auth-demo>
cd project-folder

└── README.md
