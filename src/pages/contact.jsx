import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions or need assistance? Reach out to us. We’d love to hear from you!
        </p>

    
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
          <p className="text-gray-600">48 Radley street, Woolston, Auckland</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Email</h3>
          <p className="text-green-600">contact@ecosupport.org</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600">+64 (080) 456-7890</p>
        </div>

        {/* Contact Form */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
