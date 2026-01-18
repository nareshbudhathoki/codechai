import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-5">
      <h1 className="text-6xl md:text-8xl font-bold text-red-600 mb-6">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        The page you are looking for doesn’t exist or something went wrong. Please check the URL or go back to the homepage.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-full shadow-lg"
      >
        Go to Home
      </Link>
    </section>
  );
}
