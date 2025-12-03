# Nike E-commerce Clone

A modern, high-performance e-commerce frontend application built with **Next.js 15** and **Redux Toolkit**. This project replicates the core shopping experience of a premium sportswear brand, featuring a responsive design, dynamic product management, and a seamless checkout flow.

## 🚀 Features

-   **Dynamic Product Listing**: Browse products with filtering by category (Men, Women, Kids) and search functionality.
-   **Product Details**: Rich product pages with image galleries, size selection, and "You Might Also Like" recommendations.
-   **Shopping Cart**: Fully functional cart managed by Redux, allowing users to add, remove, and update item quantities.
-   **Checkout Timeline**: A visual timeline animation demonstrating the post-purchase order status.
-   **Responsive Design**: Optimized for all devices, from mobile phones to large desktop screens.
-   **Custom UI Components**: Reusable components like Modals, Cards, and Collapsible Sections.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & React Redux
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## 💡 Key Concepts Explained

### 1. Redux Toolkit (State Management)
In a large application, passing data (like cart items) through many layers of components (props drilling) becomes messy. **Redux** provides a central "store" where all application state lives.

**Simple Example:**
Imagine a school announcement system. Instead of a teacher telling a student, who tells another student, and so on (Props Drilling), the principal makes an announcement over the PA system (Store), and everyone hears it instantly.

In this project, we use a `cartSlice` to handle actions like:
-   `addItem`: Adds a shoe to the global cart state.
-   `removeItem`: Removes a shoe.
-   `updateQuantity`: Changes how many pairs you want.

### 2. Next.js App Router
Next.js uses the file system to define routes.
-   `app/page.tsx` -> Home Page (`/`)
-   `app/products/page.tsx` -> Products Page (`/products`)
-   `app/products/[id]/page.tsx` -> Dynamic Product Page (e.g., `/products/1`, `/products/2`)

This makes navigating the project structure intuitive and mirrors the actual URL structure of the website.

## 📦 How to Run

1.  Navigate to the project directory:
    ```bash
    cd ecommerce
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.
