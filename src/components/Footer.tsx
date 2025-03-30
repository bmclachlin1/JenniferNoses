import { Link } from "react-router-dom";
import logo1 from "../assets/logos/JennLogo-01.svg";
import logo2 from "../assets/logos/JennLogo-02.svg";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2c2926] text-white font-ethereal p-4 h-[300px] flex items-center">
            <div className="flex flex-row align-center justify-between px-4 w-full">
                <Link to="/">
                    <img src={logo1} alt="Logo" className="h-10" />
                </Link>
                <img src={logo2} alt="Paw Print" className="h-10" />
                <div className="flex flex-row space-x-6">
                    <Link to="/shop" className="hover:underline">Shop</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;