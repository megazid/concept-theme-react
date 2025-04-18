import Link from "next/link";

interface ExploreDropdownProps {
  isActive: boolean;
}

const ExploreDropdown = ({ isActive }: ExploreDropdownProps) => {
  return (
    <div 
      className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-4 px-6 mt-1 z-20 transition-all duration-300 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
      }`}
    >
      <ul className="space-y-2 w-48">
        <li><Link href="/our-story" className="block py-2 text-gray-700 hover:text-black transition-colors">Our Story</Link></li>
        <li><Link href="/blogs" className="block py-2 text-gray-700 hover:text-black transition-colors">Our Blogs</Link></li>
        <li><Link href="/faq" className="block py-2 text-gray-700 hover:text-black transition-colors">FAQ</Link></li>
        <li><Link href="/contact" className="block py-2 text-gray-700 hover:text-black transition-colors">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default ExploreDropdown; 