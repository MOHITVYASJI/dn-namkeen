import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("darkMode");
  return saved === "true" ? true : false;
});
useEffect(() => {
  localStorage.setItem("darkMode", darkMode);
}, [darkMode]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={
  <div className={`${darkMode ? "dark" : ""}`}>
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition duration-300">
      {/* Navbar */}
     <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">DN NAMKEEN</h1>
        <button
    onClick={() => setDarkMode(!darkMode)}
    className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
  >
    {darkMode ? "Light ☀️" : "Dark 🌙"}
  </button>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-red-600 font-medium">Home</a>
          <a href="#products" className="hover:text-red-600 font-medium">Products</a>
          <a href="#about" className="hover:text-red-600 font-medium">About</a>
          <a href="#contact" className="hover:text-red-600 font-medium">Contact</a>
          <a href="/login" className="hover:text-green-600 font-medium">Login</a>
          <a href="/signup" className="hover:text-blue-600 font-medium">Signup</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-700">Swad Jo Dil Ko Bhaye!</h2>
          <p className="text-lg mb-6">
            Welcome to DN Namkeen – Taste the tradition with our authentic snacks made with love in Indore.
          </p>
          <a href="#products">
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">Shop Now</button>
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2020/09/22/18/36/indian-snacks-5593970_1280.jpg"
            alt="Namkeen"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      {/* Product Section */}
<section id="products" className="bg-gray-100 dark:bg-gray-800 py-12 px-6">
  <h2 className="text-3xl font-bold text-center mb-10 text-red-700 dark:text-red-400">Our Products</h2>
  <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
    {/* Product 1 */}
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 text-gray-800 dark:text-white">
      <img src="https://cdn.pixabay.com/photo/2016/05/17/15/25/snack-1396493_960_720.jpg" alt="Sev" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-4">Crispy Sev</h3>
      <p className="text-gray-600 mt-1">Spicy Indori Sev made with authentic masala.</p>
      <p className="mt-2 font-bold">₹120 / 500g</p>
      <a href="https://wa.me/919399982894?text=Hi%20DN%20Namkeen%2C%20I%20want%20to%20order%20Crispy%20Sev" target="_blank" rel="noreferrer">
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Order on WhatsApp</button>
      </a>
    </div>

    {/* Product 2 */}
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 text-gray-800 dark:text-white">
      <img src="https://cdn.pixabay.com/photo/2022/02/11/15/04/besan-chakli-7006763_1280.jpg" alt="Chakli" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-4">Besan Chakli</h3>
      <p className="text-gray-600 mt-1">Crunchy chakli spiral, perfect for tea time.</p>
      <p className="mt-2 font-bold">₹90 / 250g</p>
      <a href="https://wa.me/919399982894?text=Hi%20DN%20Namkeen%2C%20I%20want%20to%20order%20Besan%20Chakli" target="_blank" rel="noreferrer">
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Order on WhatsApp</button>
      </a>
    </div>

    {/* Product 3 */}
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 text-gray-800 dark:text-white">
      <img src="https://cdn.pixabay.com/photo/2021/10/20/17/30/food-6728345_1280.jpg" alt="Mix Namkeen" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-4">Special Mix</h3>
      <p className="text-gray-600 mt-1">A tasty mix of sev, boondi, and peanuts.</p>
      <p className="mt-2 font-bold">₹150 / 500g</p>
      <a href="https://wa.me/919399982894?text=Hi%20DN%20Namkeen%2C%20I%20want%20to%20order%20Special%20Mix" target="_blank" rel="noreferrer">
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Order on WhatsApp</button>
      </a>
    </div>
    {/* Product 4 */}
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 text-gray-800 dark:text-white">
      <img src="https://cdn.pixabay.com/photo/2021/10/20/17/30/food-6728345_1280.jpg" alt="Mix Namkeen" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-4">Tasty Masalas</h3>
      <p className="text-gray-600 mt-1">A tasty mix of bhujiya, Masalas, and Beans.</p>
      <p className="mt-2 font-bold">₹150 / 500g</p>
      <a href="https://wa.me/919399982894?text=Hi%20DN%20Namkeen%2C%20I%20want%20to%20order%20Special%20Mix" target="_blank" rel="noreferrer">
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Order on WhatsApp</button>
      </a>
    </div>
  </div>
</section>
{/* About Us Section */}
<section id="about" className="bg-white dark:bg-gray-900 py-12 px-6">
  <h2 className="text-3xl font-bold text-center mb-8 text-red-700">About Us</h2>
  <div className="max-w-4xl mx-auto text-center text-lg text-gray-700">
    <p>
      DN Namkeen Sweets is a traditional snack brand based in Indore, serving crispy and delightful namkeen to homes across India.
      With a passion for purity and taste, we prepare each item using quality ingredients and age-old recipes that bring back the flavor of real India.
    </p>
    <p className="mt-4 font-medium text-red-600">"Swad Jo Dil Ko Bhaye!"</p>
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="bg-gray-100 dark:bg-gray-800 py-12 px-6">
  <h2 className="text-3xl font-bold text-center mb-8 text-red-700">Contact Us</h2>
  <form action="https://formspree.io/f/mwkgyknw" method="POST" className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
    <label className="block mb-2 font-semibold">Name:</label>
    <input type="text" name="name" required className="w-full border px-4 py-2 mb-4 rounded dark:bg-gray-800 dark:text-white" />

    <label className="block mb-2 font-semibold">Email:</label>
    <input type="email" name="email" required className="w-full border px-4 py-2 mb-4 rounded dark:bg-gray-800 dark:text-white" />

    <label className="block mb-2 font-semibold">Message:</label>
    <textarea name="message" rows="4" required className="w-full border px-4 py-2 mb-4 rounded dark:bg-gray-800 dark:text-white"></textarea>

    <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">Send Message</button>
  </form>
</section>
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919399982894?text=Hi%20DN%20Namkeen%2C%20I%20want%20to%20know%20more%20about%20your%20products"
  className="fixed bottom-5 right-5 z-50"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://img.icons8.com/color/96/000000/whatsapp--v1.png"
    alt="WhatsApp"
    className="w-12 h-12"
  />
</a>

      </div>
    </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
