import Link from 'next/link';

export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 lg:p-16">
      <h1 className="text-4xl font-bold mb-4 text-center sm:text-5xl lg:text-6xl">React Quiz App</h1>
      <p className="text-lg text-gray-700 mb-8 text-center sm:text-xl lg:text-2xl">Test your knowledge about React!</p>

      <div className="mt-8">
        <Link href="/selectCategory">
          <span className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform duration-200 hover:scale-105">
            Start Quiz
          </span>
        </Link>
      </div>
    </div>
  );
}
