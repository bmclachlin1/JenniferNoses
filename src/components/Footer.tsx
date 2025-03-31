import { Link } from "react-router-dom";
import logo1 from "../assets/logos/JennLogo-01.svg";
import logo2 from "../assets/logos/JennLogo-02.svg";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2c2926] text-white font-ethereal px-16 h-[300px] flex flex-col justify-center items-center lg:flex-row lg:justify-between">
            <Link to="/" className="mb-4 lg:mb-0">
                <img src={logo1} alt="Logo" className="h-7 lg:h-10" />
            </Link>
            <img src={logo2} alt="Paw Print" className="h-10 mb-4 lg:mb-0 lg:w-[72px] lg:h-[95px]" />
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                <Link to="/shop" className="hover:underline text-center">Shop</Link>
                <Link to="/contact" className="hover:underline text-center">Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;