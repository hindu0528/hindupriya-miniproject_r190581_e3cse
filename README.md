📌 Project Overview
"Abhiyanth Pre-Order Bookings" is a full-stack application that enables seamless order management.

The Admin Panel allows authorized users to manage products, store data in the database, and track customer orders.
The Frontend provides an intuitive interface for customers to view products, place orders, and track their status.
The Backend handles authentication, database interactions, and payment processing using dummy Stripe integration.

📂 Project Structure
The project is divided into three main directories:

Admin: Manages product listings and orders.
Frontend: User-facing interface where customers browse, order, and track their orders.
Backend: API and database handling, including authentication and payments.

1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/yourusername/Abhiyanth-PreOrder-Bookings.git
cd Abhiyanth-PreOrder-Bookings



2️⃣ Install Dependencies
Run the following commands inside each folder (admin, frontend, backend):

sh
Copy
Edit
cd admin
npm install

cd ../frontend
npm install

cd ../backend
npm install

3️⃣ Set Up Environment Variables
Create a .env file in the backend directory and configure database & Stripe API keys.


4️⃣ Run the Application
Start each service separately:

sh
Copy
Edit
# Start Backend
cd backend
npm run server

# Start Frontend
cd ../frontend
npm run dev

# Start Admin Panel
cd ../admin
npm run dev


💳 Features
✅ Admin Dashboard: Add, update, and manage products & orders.
✅ Customer Orders: Users can browse products, place orders, and track their status.
✅ Secure Backend: Manages authentication, order processing, and database interactions.
✅ Stripe Payment (Dummy): Simulated payment gateway integration for testing.
✅ Order Tracking: Customers can track their order status in real-time.


📝 Notes
Ensure all dependencies are installed before running the project.
Update .env with proper credentials for seamless functionality.
Dummy Stripe payment is used, so no real transactions occur.
