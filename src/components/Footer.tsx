import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2c2926] text-white font-ethereal p-4">
            <div className="flex flex-row align-center justify-between px-4">
                <Link to="/">
                    <img src="/src/assets/logos/JennLogo-01.svg" alt="Logo" className="h-10" />
                </Link>
                <img src="/src/assets/logos/JennLogo-02.svg" alt="Paw Print" className="h-10" />
                <div className="flex flex-row space-x-6">
                    <Link to="/shop" className="hover:underline">Shop</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;