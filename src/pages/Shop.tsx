import warmandcuddly from '../assets/images/warm-and-cuddly.jpg';
import puppybreath from '../assets/images/puppy-breath.jpg';
import freshlybathed from '../assets/images/freshly-bathed.jpg';
import React, { useState } from 'react';

const AprilFoolsPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div 
            style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '120px 60px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            width: '400px',
            textAlign: 'center',
            }}
        >
            <button 
            onClick={onClose}
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                border: 'none',
                backgroundColor: 'transparent',
                color: 'black',
                fontSize: '20px',
                cursor: 'pointer',
            }}
            >
            ×
            </button>
            <div className="text-5xl font-ethereal font-bold">April Fools ;)</div>
        </div>
    );
};

const Shop: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupOpen = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <main className="flex flex-col gap-4">
            {showPopup && <AprilFoolsPopup onClose={handlePopupClose} />}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-6">
                <article className="flex flex-col justify-between items-center gap-6">
                    <img 
                        src={warmandcuddly}
                        alt="Warm & Cuddly" 
                        className="w-[515px] h-[423px] object-cover" 
                    />
                    <div className="font-bold text-black text-2xl">Warm & Cuddly</div>  
                    <div className="text-black font-light">3.4 oz</div>
                    <button 
                        onClick={handlePopupOpen}
                        className="border border-black text-black bg-white px-4 py-2 rounded hover:bg-black hover:text-white"
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
                    <div className="font-bold text-black text-2xl">Puppy Breath</div>  
                    <div className="text-black font-light">3.4 oz</div>
                    <button 
                        onClick={handlePopupOpen}
                        className="border border-black text-black bg-white px-4 py-2 rounded hover:bg-black hover:text-white"
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
                    <div className="font-bold text-black text-2xl">Freshly Bathed</div>  
                    <div className="text-black font-light">3.4 oz</div>
                    <button 
                        onClick={handlePopupOpen}
                        className="border border-black text-black bg-white px-4 py-2 rounded hover:bg-black hover:text-white"
                    >
                        Add to Cart
                    </button>
                </article>
            </div>
        </main>
    );
};

export default Shop;