# Tutoring Website Platform

A full-stack, responsive tutoring portal built with Django (backend) and React/JavaScript (frontend), designed to serve high-school students with rich resource browsing, direct messaging, and administrative management.

---

## 🌟 Project Overview

This repository contains two main components:

- **Backend** (`/backend`)  
  A Django application exposing RESTful endpoints for user management, resource delivery, and SMTP-powered messaging; includes a customized Django admin dashboard for content and user governance.

- **Frontend** (`/frontend`)  
  A React single-page application that lets students browse PDF notes by subject/grade, send messages to the site owner via a contact form, and navigate a clean, mobile-friendly UI.

---

## 🔧 Key Features

1. **SMTP-Driven Contact Form**  
   - Users can send questions or requests directly from the frontend; Django leverages Python’s `smtplib` to relay messages to the site owner’s email inbox. :contentReference[oaicite:0]{index=0}

2. **PDF Resource Browser**  
   - Organized by grade (9–12) and topic (Math & Physics), students can preview and download notes stored in the Django backend’s media library. :contentReference[oaicite:1]{index=1}

3. **Admin Dashboard & User Governance**  
   - Custom Django admin panels allow administrators to upload resources, manage user accounts, and review incoming messages—all without touching code. :contentReference[oaicite:2]{index=2}

---

## 🛠️ Technology Stack

- **Backend:**  
  - Django ≥4.x  
  - Django REST Framework  
  - Gunicorn & WhiteNoise for static file serving  
  - PostgreSQL (or SQLite for development)  
  - SMTP (via Python’s `smtplib`)  
- **Frontend:**  
  - React.js with functional components & Hooks  
  - React Router for client-side routing  
  - Axios for HTTP requests  
  - Tailwind CSS for responsive styling  
- **Deployment:**  
  - **Frontend** on Vercel (CI/CD from `main` branch)  
  - **Backend** on Self hosted Linux server

---

