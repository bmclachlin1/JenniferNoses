import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#8F7773] text-white font-ethereal flex justify-between items-center p-4">
            <div className="flex items-center">
                <Link to="/">
                    <img src="/src/assets/logos/JennLogo-01.svg" alt="Logo" className="h-10" />
                </Link>
            </div>
            <div className="flex space-x-6">
                <Link to="/shop" className="hover:underline">Shop</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
                <Link to="/shop" className="hover:underline border border-white px-2 py-1">Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;
