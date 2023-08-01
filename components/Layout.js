// components/Layout.js
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Blog</title>
      </Head>
      <header className="bg-blue-100 p-4">
        <nav className="container mx-auto font-mono text-xl p-2">
          <ul className="flex space-x-16">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;

