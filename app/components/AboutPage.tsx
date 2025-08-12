// components/AboutPage.tsx


  "use client";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="px-6 py-12 bg-white text-gray-800">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Intro Text */}
        <div>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Zemenay Tech</span>, we believe
            technology should empower people and help them achieve more. Our mission
            is to deliver innovative, high-quality digital solutions that are simple,
            scalable, and designed around the people who use them.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We combine creativity, technical expertise, and a deep understanding of
            business challenges to build solutions that work—today and in the future.
          </p>
        </div>

        {/* Right: About Us Title */}
        <div className="flex justify-start md:justify-center">
          <h2 className="text-3xl font-bold border-l-4 border-blue-500 pl-4">
            ABOUT US
          </h2>
        </div>
      </div>

      {/* Bottom Section - Highlights */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
        {/* Mission */}
        <div>
          <div className="flex justify-center mb-4">
            <span className="bg-blue-100 p-4 rounded-full text-2xl">
              🚀
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-600 text-sm">
            To empower businesses with high-performing, beautifully crafted web
            solutions that are simple, scalable, and user-centric.
          </p>
        </div>

        {/* Vision */}
        <div>
          <div className="flex justify-center mb-4">
            <span className="bg-green-100 p-4 rounded-full text-2xl">
              👁️
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p className="text-gray-600 text-sm">
            To be the trusted digital partner for forward-thinking companies,
            delivering elegant, efficient, and reliable solutions that inspire growth.
          </p>
        </div>

        {/* Values */}
        <div>
          <div className="flex justify-center mb-4">
            <span className="bg-yellow-100 p-4 rounded-full text-2xl">
              🛡️
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Core Values</h3>
          <p className="text-gray-600 text-sm">
            Simplicity · Quality · Reliability · Innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
