import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-16">
      {/* 1. Hero Section */}
      <div className="bg-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Revolutionize Your Digital Experience
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          At Zemenay, we build clean, scalable, and elegant digital experiences
          for forward-thinking businesses.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-green-700 text-white px-8 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          Let&apos;s Build Together
        </Link>
      </div>

      {/* 2. Why Zemenay (Features) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
        {[
          {
            title: "Clean & Minimalist Interfaces",
            description:
              "Optimize your digital presence with our high-speed solutions, ensuring seamless interactions.",
          },
          {
            title: "Scalable, High-Performance Code",
            description:
              "Protect your data and users with our state-of-the-art security measures.",
          },
          {
            title: "Reliable Support & Maintenance",
            description:
              "Grow without limits using our scalable infrastructure designed to evolve with you.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="space-y-4 p-6 bg-gray-50 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <Link
              href="/contact"
              className="text-green-700 font-medium hover:underline"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-8 px-6">
        <h2 className="text-2xl font-semibold">
          Clients We&apos;ve Worked With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center"></div>
      </div>

      {/* 4. Testimonials */}
      <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
        <h2 className="text-2xl font-semibold">What Our Clients Say</h2>
        {[
          {
            name: "Biniyam Masresha",
            role: "Co-founder at Hiyaw Animations",
            quote:
              "Working with this team has been an absolute game-changer for our business. Their innovative solutions have streamlined our processes and boosted productivity tenfold!",
          },
          {
            name: "Dagmawi Bedilu",
            role: "CSO at Efuye Gela",
            quote:
              "I can&apos;t recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled.",
          },
          {
            name: "Kirubel Samuel",
            role: "Co-founder at Chewataawaqi",
            quote:
              "The customer support is top-notch. They&apos;re always available to guide us. Refreshing to work with a company that truly cares.",
          },
        ].map((t) => (
          <blockquote key={t.name} className="space-y-2">
            <p className="italic text-gray-700">&quot;{t.quote}&quot;</p>
            <footer className="text-gray-900 font-semibold">
              — {t.name},{" "}
              <span className="text-gray-600">{t.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
