import React from 'react';
import { Link } from 'react-router-dom';

const alertCartIsEmpty = () => alert("Cart is empty!");

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="bg-[#8F7773] text-white font-ethereal p-4 sticky top-0 z-50">
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
                    <button onClick={alertCartIsEmpty} className="hover:underline">Cart</button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <Link to="/shop" className="block hover:underline">Shop</Link>
                    <Link to="/contact" className="block hover:underline">Contact</Link>
                    <button onClick={alertCartIsEmpty} className="hover:underline">Cart</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
