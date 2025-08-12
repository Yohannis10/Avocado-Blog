// app/blog/page.tsx
import React from "react";

export default function BlogHome() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="bg-gray-100 p-6 mb-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
        <div className="md:flex">
          <div className="md:w-1/3 h-48 bg-gray-300 mb-4 md:mb-0"></div>
          <div className="md:w-2/3 md:pl-4">
            <h3 className="text-xl font-semibold">Article Title</h3>
            <p className="text-gray-700">This is a preview of the featured article...</p>
          </div>
        </div>
      </div>

      <div className="md:flex gap-8">
        <div className="md:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Render 4 Recent Post cards here */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Post Title {i}</h4>
              <p className="text-gray-600">Short snippet...</p>
            </div>
          ))}
        </div>
        <aside className="md:w-64 mt-8 md:mt-0">
          <h4 className="font-bold mb-2">Popular Posts</h4>
          <ul className="space-y-2">
            {[1, 2, 3].map((i) => (
              <li key={i} className="p-2 bg-white rounded-md shadow">
                Popular Post {i}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
