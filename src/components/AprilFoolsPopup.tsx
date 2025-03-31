import React from 'react';

export const AprilFoolsPopup: React.FC<{ onClose: () => void; }> = ({ onClose }) => {
    return (
        <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 text-center bg-white shadow-lg rounded-lg px-8 py-16"
            style={{ width: 'calc(100vw - 12.5rem)' }}
        >
            <button
                onClick={onClose}
                className="absolute top-2.5 right-2.5 border-none bg-transparent text-black text-xl cursor-pointer"
            >
            ×
            </button>
            <div className="text-5xl font-ethereal font-bold mb-12">April Fools ;)</div>
            <footer className="mt-4 text-md poppins-regular text-center">
                <p className="mb-2">Website Creator: Jennifer Hamilton</p>
                <p className="mb-2">Web Developer: Blake McLachlin</p>
                <p className="mb-2">Graphic Designer: Courtney McLachlin</p>
            </footer>
        </div>
    );
};