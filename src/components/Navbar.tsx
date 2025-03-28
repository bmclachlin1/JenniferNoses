import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="bg-[#8F7773] text-white font-ethereal p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/">
                        <img src="/src/assets/logos/JennLogo-01.svg" alt="Logo" className="h-10" />
                    </Link>
                </div>
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
                <div className="hidden md:flex space-x-6">
                    <Link to="/shop" className="hover:underline">Shop</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <Link to="/shop" className="hover:underline">Cart</Link>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <Link to="/shop" className="block hover:underline">Shop</Link>
                    <Link to="/contact" className="block hover:underline">Contact</Link>
                    <Link to="/shop" className="block hover:underline border border-white px-2 py-1">Cart</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
