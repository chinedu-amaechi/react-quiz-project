"use client";

import { useRouter } from 'next/router';

export default function SelectCategory() {
  const router = useRouter();

  const handleCategorySelect = (category) => {
    router.push(`/quiz?category=${category}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 lg:p-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center sm:text-5xl lg:text-6xl">Select Quiz Category</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        {[
          'HTML',
          'JavaScript',
          'React',
          'CSharp',
          'CSS',
          'SQL',
          'Java',
          'Bootstrap',
          'TailwindCSS',
          'Python',
        ].map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className="py-2 px-4 bg-white text-black rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
          >
            {category}
          </button>
        ))}
      </div>
    </div>

    
  );
}
