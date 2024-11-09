import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
      <Link href="/" className="hover:text-gray-300">Home</Link>
      <Link href="/about" className="hover:text-gray-300">About</Link>
      <Link href="/services" className="hover:text-gray-300">Services</Link>
      <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      <Link href="/blog" className="hover:text-gray-300">Blog</Link>
    </nav>
  );
};

export default Navbar;