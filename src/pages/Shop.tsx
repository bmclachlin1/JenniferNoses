import warmandcuddly from '../assets/images/warm-and-cuddly.jpg';
import puppybreath from '../assets/images/puppy-breath.jpg';
import freshlybathed from '../assets/images/freshly-bathed.jpg';
import React, { useState } from 'react';
import { AprilFoolsPopup } from '../components/AprilFoolsPopup';

const Shop: React.FC = () => {
    const [showAprilFoolsPopup, setShowAprilFoolsPopup] = useState(false);

    const handlePopupOpen = () => {
        setShowAprilFoolsPopup(true);
    };

    const handlePopupClose = () => {
        setShowAprilFoolsPopup(false);
    };

    return (
        <main className="bg-[#FFF4E8] flex flex-col gap-4">
            {showAprilFoolsPopup && <AprilFoolsPopup onClose={handlePopupClose} />}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-6">
                <article className="flex flex-col justify-between items-center gap-6">
                    <img 
                        src={warmandcuddly}
                        alt="Warm & Cuddly" 
                        className="w-[515px] h-[423px] object-cover" 
                    />
                    <div className="font-bold text-[#383129] text-2xl">Warm & Cuddly</div>  
                    <div className="text-[#383129] font-light">3.4 oz</div>
                    <button 
                        onClick={handlePopupOpen}
                        className="border border-[#383129] text-[#383129] bg-[#FFF4E8] px-4 py-2 sm:mb-8 lg:mb-24 rounded hover:bg-[#383129] hover:text-[#FFF4E8]"
                    >
                        Add to Cart
                    </button>
                </article>
                <article className="flex flex-col justify-between items-center gap-6">
                    <img 
                        src={puppybreath}
                        alt="Puppy Breath" 
                        className="w-[515px] h-[423px] object-cover" 
                    />
                    <div className="font-bold text-[#383129] text-2xl">Puppy Breath</div>  
                    <div className="text-[#383129] font-light">3.4 oz</div>
                    <button 
                        onClick={handlePopupOpen}
                        className="border border-[#383129] text-[#383129] bg-[#FFF4E8] px-4 py-2 sm:mb-8 lg:mb-24 rounded hover:bg-[#383129] hover:text-[#FFF4E8]"
                    >
                        Add to Cart
                    </button>
                </article>
                <article className="flex flex-col justify-between items-center gap-6">
                    <img 
                        src={freshlybathed}
                        alt="Freshly Bathed" 
                        className="w-[515px] h-[423px] object-cover" 
                    />
                    <div className="font-bold text-[#383129] text-2xl">Freshly Bathed</div>  
                    <div className="text-[#383129] font-light">3.4 oz</div>
                    <button 
                        onClick={handlePopupOpen}
                        className="border border-[#383129] text-[#383129] bg-[#FFF4E8] px-4 py-2 sm:mb-8 lg:mb-24 rounded hover:bg-[#383129] hover:text-[#FFF4E8]"
                    >
                        Add to Cart
                    </button>
                </article>
            </div>
        </main>
    );
};

export default Shop;