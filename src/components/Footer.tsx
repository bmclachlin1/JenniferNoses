import { Link } from "react-router-dom";
import logo1 from "../assets/logos/JennLogo-01.svg";
import logo2 from "../assets/logos/JennLogo-02.svg";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window.innerWidth])

    return (
        <footer className="bg-[#2c2926] text-white font-ethereal p-4 h-[300px] flex items-center">
            <div className="flex flex-row align-center justify-between px-4 w-full">
                <Link to="/">
                    <img src={logo1} alt="Logo" className="h-7 md:h-10" />
                </Link>
                {windowWidth > 500 && (
                    <img src={logo2} alt="Paw Print" className="h-10" />
                )}
        
                <div className="flex flex-row space-x-6">
                    <Link to="/shop" className="hover:underline">Shop</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;