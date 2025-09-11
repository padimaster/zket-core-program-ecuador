// app/not-found.tsx

import Link from 'next/link';
import Image from 'next/image'; 

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900 p-4">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
  <h2 className="text-3xl font-semibold mb-8 text-center">Page Not Found</h2>

  {/* Place your found image here */}
  <div className="relative w-72 h-72 mb-8"> {/* Adjust the size here */}
        <Image
          // The path should be relative to the public folder, so use /codes/404.png
          src="/codes/404.png"
          alt="Page not found illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <p className="text-lg text-center mb-6">
        It looks like you're lost in the ZK universe. Let's get you back to a safe place!
      </p>
      
      <Link href="/">
        <button className="px-6 py-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}