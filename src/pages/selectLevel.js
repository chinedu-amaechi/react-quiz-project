"use client";

import { useRouter } from 'next/router';

export default function SelectLevel() {
  const router = useRouter();

  const handleLevelSelect = (level) => {
    router.push(`/quiz?level=${level}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 lg:p-16">
      <h1 className="text-4xl font-bold mb-8 text-center sm:text-5xl lg:text-6xl">Select Difficulty Level</h1>
      <div className="mt-8 space-y-4 w-full max-w-md">
        <button
          onClick={() => handleLevelSelect('beginners')}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform duration-200 hover:scale-105"
        >
          Beginners
        </button>
        <button
          onClick={() => handleLevelSelect('intermediate')}
          className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition transform duration-200 hover:scale-105"
        >
          Intermediate
        </button>
        <button
          onClick={() => handleLevelSelect('advanced')}
          className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition transform duration-200 hover:scale-105"
        >
          Advanced
        </button>
      </div>
    </div>
  );
}
