# 🚀 Employee Management System (EMS)

A full-stack web application to manage employees using modern technologies. This project implements complete **CRUD (Create, Read, Update, Delete)** operations with a seamless and interactive UI.

## 📸 Project Demo

> Add screenshots or a video demo link here to showcase the application UI and its features.

---

## 🧠 Project Overview

The Employee Management System (EMS) is a responsive, interactive web application developed using **Spring Boot** for the backend and **React JS** for the frontend. It provides functionality to:
- Add a new employee
- View all employees
- Update employee details
- Delete an employee

This project follows a **RESTful architecture**, allowing smooth communication between the frontend and backend using Axios.

---

## 🛠️ Technology Stack

### 🔹 Backend
- **Spring Boot 3**
- **Spring Data JPA (Hibernate 6)**
- **MySQL Database**
- **Maven**
- **Postman Client** (for testing REST APIs)
- **IntelliJ IDEA**

### 🔹 Frontend
- **React JS 18+**
- **Vite JS**
- **Bootstrap CSS**
- **JavaScript**
- **Axios**
- **NPM**
- **Visual Studio Code IDE**

---

## 📐 Architecture

React Frontend App └── Router, Components, Services └── Axios HTTP Library └── REST API Calls └── Spring Boot Backend App ├── Controller ├── Service Layer ├── DAO (Repository) └── MySQL Database

yaml
Copy
Edit

---

## 📁 Project Structure

### Backend
src/ └── main/ └── java/ └── com/example/ems/ ├── controller/ ├── service/ ├── repository/ ├── model/ └── EMSApplication.java

shell
Copy
Edit

### Frontend
src/ └── components/ └── services/ └── App.jsx └── main.jsx

yaml
Copy
Edit

---

## ⚙️ How to Run the Project

### ✅ Prerequisites
- Node.js and npm
- Java 17+
- MySQL
- Maven

### 📦 Backend Setup
1. Clone the repository
2. Create a database named `ems` in MySQL
3. Configure `application.properties`: