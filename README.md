# 💰 Finance Dashboard – Smart Expense & Analytics System

A full-stack web application that helps users manage financial records, analyze income vs expenses, and gain insights through secure APIs and interactive dashboards.

---

## 🌐 Live Demo

Backend: https://finance-dashboard-3-bcid.onrender.com/

---

## 🛡️ Overview

Finance Dashboard is a secure and scalable system that combines:

💰 Financial record management
📊 Real-time analytics APIs
🔐 Role-based authentication
🌐 Cloud-based deployment

It enables users to track transactions and understand their financial health efficiently.

---

## 🔍 Features

### 🔐 Authentication & Authorization

* JWT-based login system
* Role-based access control:

  * 👤 Viewer (read-only)
  * 📊 Analyst (analytics access)
  * 🛠️ Admin (full control)

---

### 💰 Financial Records Management

* Create, update, delete records
* Fields include:

  * Amount
  * Type (income/expense)
  * Category
  * Date
  * Notes

---

### 📊 Dashboard Analytics

Provides powerful insights like:

* 💰 Total Income
* 💸 Total Expense
* 📊 Net Balance
* 📂 Category-wise breakdown
* 📅 Monthly trends

---

### 🛡️ Secure API Design

* Protected routes using JWT
* Middleware-based authorization
* Input validation and error handling

---

### 🌐 Cloud Deployment

* Backend deployed on Render
* MongoDB Atlas for cloud database
* Scalable and production-ready setup

---

## 🧪 System Flow

1. User logs in → receives JWT token
2. Token used for authenticated API requests
3. User performs CRUD operations on records
4. Backend processes and stores data in MongoDB
5. Summary APIs generate analytics
6. Dashboard displays insights

---

## 🧰 Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Tokens (JWT)
* Bcrypt.js

---
# 🔗 API Endpoints

Base URL:
https://finance-dashboard-3-bcid.onrender.com/api

---

## 🔐 Authentication APIs

### ➤ Register User

**POST** `/auth/register`
Creates a new user account

**Body:**

```json
{
  "name": "Harshitha",
  "email": "harshitha@gmail.com",
  "password": "123456"
}
```

---

### ➤ Login User

**POST** `/auth/login`
Authenticates user and returns JWT token

**Body:**

```json
{
  "email": "harshitha@gmail.com",
  "password": "123456"
}
```

---

## 💰 Financial Records APIs

### ➤ Create Record

**POST** `/records`
Creates a new income/expense record

🔐 Requires Authorization

**Headers:**

```
Authorization: Bearer <token>
```

**Body:**

```json
{
  "amount": 5000,
  "type": "income",
  "category": "Salary",
  "note": "April salary"
}
```

---

### ➤ Get All Records

**GET** `/records`
Fetch all financial records

🔐 Requires Authorization

---

### ➤ Update Record

**PUT** `/records/:id`
Update a specific record

🔐 Requires Authorization

---

### ➤ Delete Record

**DELETE** `/records/:id`
Delete a record

🔐 Requires Authorization

---

## 📊 Summary & Analytics APIs

### ➤ Get Total Income

**GET** `/summary/income`

---

### ➤ Get Total Expense

**GET** `/summary/expense`

---

### ➤ Get Net Balance

**GET** `/summary/balance`

---

### ➤ Category-wise Breakdown

**GET** `/summary/categories`

---

### ➤ Monthly Trends

**GET** `/summary/monthly`

---

## 🔐 Notes

* All protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```

* Token is received after login

---


## 🚀 How to Run Locally

### 🔹 Backend

```bash
cd backend
npm install
npm run dev
```

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

---

## ⚙️ Deployment

* Backend: Render (Node.js API)
* Database: MongoDB Atlas
* Frontend: React (deployable on Vercel/Netlify)

---

## 🎯 Key Highlights

* Full-stack architecture
* Secure role-based system
* Real-time analytics using aggregation
* Clean API design and modular structure
* Deployment-ready application

---

## 🧩 Why This Project Matters

Managing finances effectively is essential, but many users lack structured tools.

This project helps by:

* Providing clear financial insights
* Enabling secure data handling
* Offering scalable backend architecture
* Demonstrating real-world full-stack development

---

## ⚠️ Disclaimer

This application is intended for educational and demonstration purposes. Financial insights are based on user-entered data.

---

## 👩‍💻 Author

**Harshitha V**
Aspiring Full-Stack Developer
Focused on building scalable systems, real-world applications, and impactful solutions 🚀
