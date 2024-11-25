# Bike Store Backend API

A backend application for managing bikes and orders, built with **Express**, **TypeScript**, and **MongoDB** using **Mongoose**. This application includes CRUD operations for products (bikes), order management, and revenue calculations.

---

## Features

1. Manage bikes with CRUD operations.
2. Order management with inventory adjustments.
3. Revenue calculation using MongoDB aggregation.
4. Environment-specific configurations using `dotenv`.
5. Written in **TypeScript** for type safety and enhanced development experience.

---

## Project Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB database**

---

### 1. Clone the Repository


git clone <repository-url>
cd bike-orders-backend

---

# **API Endpoints Documentation**

This document outlines all the API endpoints available in the **Bike Store Backend API**, along with their methods, descriptions, and expected request/response formats.

---

## **Base URL**

The base URL for all endpoints is:  
`http://localhost:<PORT>/api`  

Replace `<PORT>` with the port number specified in your `.env` file (default: `5000`).

---

## **Endpoints**

### **1. Products (Bikes)**

#### **Create a Bike**

- **Endpoint:** `POST /products`
- **Description:** Add a new bike to the inventory.
- **Request Body (JSON):**
  ```json
  {
    "name": "Mountain Bike",
    "price": 450,
    "quantity": 10,
    "description": "A durable mountain bike."
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "message": "Bike created successfully",
    "product": {
      "_id": "642abc12345",
      "name": "Mountain Bike",
      "price": 450,
      "quantity": 10,
      "description": "A durable mountain bike"
    }
  }
  ```

---

#### **Get All Bikes**

- **Endpoint:** `GET /products`
- **Description:** Retrieve all bikes from the inventory.
- **Response (200 OK):**
  ```json
  [
    {
      "_id": "642abc12345",
      "name": "Mountain Bike",
      "price": 450,
      "quantity": 10,
      "description": "A durable mountain bike"
    },
    {
      "_id": "642def67890",
      "name": "Road Bike",
      "price": 350,
      "quantity": 15,
      "description": "A lightweight road bike"
    }
  ]


---

#### **Get a Specific Bike**

- **Endpoint:** `GET /products/:productId`
- **Description:** Fetch details of a specific bike by its ID.
- **Path Parameters:**
  - `productId` (string): The unique ID of the bike.
- **Response (200 OK):**
  ```json
  {
    "_id": "642abc12345",
    "name": "Mountain Bike",
    "price": 450,
    "quantity": 10,
    "description": "A durable mountain bike"
  }
  ```

---

#### **Update a Bike**

- **Endpoint:** `PUT /products/:productId`
- **Description:** Update the details of a specific bike.
- **Path Parameters:**
  - `productId` (string): The unique ID of the bike.
- **Request Body (JSON):**
  ```json
  {
    "name": "Mountain Bike Pro",
    "price": 500,
    "quantity": 8,
    "description": "An upgraded mountain bike."
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "message": "Bike updated successfully",
    "product": {
      "_id": "642abc12345",
      "name": "Mountain Bike Pro",
      "price": 500,
      "quantity": 8,
      "description": "An upgraded mountain bike."
    }
  }
  ```

---

#### **Delete a Bike**

- **Endpoint:** `DELETE /products/:productId`
- **Description:** Remove a bike from the inventory by its ID.
- **Path Parameters:**
  - `productId` (string): The unique ID of the bike.
- **Response (200 OK):**
  ```json
  {
    "message": "Bike deleted successfully"
  }
  ```

---

### **2. Orders**

#### **Create an Order**

- **Endpoint:** `POST /orders`
- **Description:** Place an order for a bike.
- **Request Body (JSON):**
  ```json
  {
    "productId": "642abc12345",
    "quantity": 2,
    "customerName": "John Doe",
    "address": "123 Elm Street"
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "message": "Order placed successfully",
    "order": {
      "_id": "652order12345",
      "productId": "642abc12345",
      "quantity": 2,
      "customerName": "John Doe",
      "address": "123 Elm Street",
      "totalPrice": 900
    }
  }
  ```

---

#### **Get Total Revenue**

- **Endpoint:** `GET /orders/revenue`
- **Description:** Retrieve the total revenue generated from all orders.
- **Response (200 OK):**
  ```json
  {
    "totalRevenue": 9500
  }
  ```

---

