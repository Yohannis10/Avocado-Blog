import React from "react";

export default function Contact() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Get in Touch</h1>
      <p className="text-center text-gray-700">
        Have questions or want to discuss a project? We&apos;d love to hear from you.
      </p>
      <form className="space-y-4">
        {/* Form fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 border rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 border rounded"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
        >
          Send Message
        </button>
      </form>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>
          <strong>Location:</strong> Piassa, Addis Ababa, Ethiopia
        </p>
        <p>
          <strong>Phone:</strong> +251 93 220 9141
        </p>
        <p>
          <strong>Email:</strong> zemenaytechsolutions@gmail.com
        </p>
        <p>
          <strong>Business Hours:</strong> Mon–Fri: 9 AM – 6 PM | Sat: 10 AM – 2
          PM
        </p>
      </div>
    </section>
  );
}
