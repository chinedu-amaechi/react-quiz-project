import '../styles/globals.css';



export const metadata = {
  title: "Create Next App",
  description: "Test your Knowledge about React",
  author: "Chinedu and Faruq",
  keywords: "React, Next.js, Quiz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto">
              <h1 className="text-white text-3xl">React Quiz App</h1>
            </div>
          </nav>
        {children}
      </body>
    </html>
  );
}

