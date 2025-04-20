# 🚀 Bike Servicing Management API

A backend API built to manage a bike servicing center. It handles CRUD operations for customers, bikes, and service records, with extra features like marking service completion and fetching overdue services.

---

## 🌐 Live Backend Link

**[Live API on Render](https://moto-maintain.vercel.app/)**  

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

---

## ⚙️ Setup Guide

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kamrul-Islam-171/motomaintain
   cd motomaintain
   
2. **Install dependencies:**
   ```bash
   npm install
   
3. **Set up environment variables Create a .env file in the root with:**
   ```bash
   DATABASE_URL="your_postgresql_connection_string"
   
4. **Generate Prisma Client & run database migrations:**
   ```bash
   npx prisma migrate dev --name init
   
5. **Start the development server:**
   ```bash
   npm run dev


## 🌟 Key Features

- 🔄 **Customer Management:** Create, view, update, and delete customers
- 🏍️ **Bike Management:** Add bikes and associate them with customers
- 🛠️ **Service Records:** Track service status, mark completion, and update jobs
- ⏳ **Pending/Overdue Services:** Fetch jobs older than 7 days
- ❌ **Error Handling:** Unified response format with status and messages


## 📥 GET APIs

### 👤 Customers
- `GET /api/customers`  
  ➤ Fetch all customers.

- `GET /api/customers/:customerId`  
  ➤ Fetch a specific customer by ID.

### 🏍️ Bikes
- `GET /api/bikes`  
  ➤ Fetch all bikes.

- `GET /api/bikes/:bikeId`  
  ➤ Fetch a specific bike by ID.

### 🛠️ Services
- `GET /api/services`  
  ➤ Fetch all service records.

- `GET /api/services/:serviceId`  
  ➤ Fetch a specific service record.

- `GET /api/services/status`  
  ➤ Fetch pending or overdue services older than 7 days.


