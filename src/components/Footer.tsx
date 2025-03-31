import { Link } from "react-router-dom";
import logo1 from "../assets/logos/JennLogo-01.svg";
import logo2 from "../assets/logos/JennLogo-02.svg";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2c2926] text-white font-ethereal px-16 h-[300px] flex flex-col justify-center items-center md:flex-row md:justify-between">
            <Link to="/" className="mb-4 md:mb-0">
                <img src={logo1} alt="Logo" className="h-7 md:h-10" />
            </Link>
            <div>
                <img src={logo2} alt="Paw Print" className="h-10 mb-4 md:mb-0" />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <Link to="/shop" className="hover:underline text-center">Shop</Link>
                <Link to="/contact" className="hover:underline text-center">Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;