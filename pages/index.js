import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold"> My Name Is BILAL WASEEM & Welcome to My Next.js Project</h1>
      <nav className="mt-4">
        <Link href="/about" className="text-blue-500">About</Link>
        <Link href="/services" className="ml-4 text-blue-500">Services</Link>
        <Link href="/contact" className="ml-4 text-blue-500">Contact</Link>
        <Link href="/blog" className="ml-4 text-blue-500">Blog</Link>
      </nav>
    </div>
  );
}