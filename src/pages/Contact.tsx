import React, { useState } from 'react';
import { AprilFoolsPopup } from '../components/AprilFoolsPopup';

const Contact: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    
        const handlePopupOpen = () => {
            setShowPopup(true);
        };
    
        const handlePopupClose = () => {
            setShowPopup(false);
        };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handlePopupOpen();
    };

    return (
        <main className="p-4">
            {showPopup && <AprilFoolsPopup onClose={handlePopupClose} />}
            <div className="max-w-4xl mx-auto md:grid md:grid-cols-2 md:gap-6">
                <div className="mb-6 md:mb-0">
                    <h1 className="text-2xl md:text-4xl font-ethereal font-bold text-center md:text-left">
                        Get in Touch --<br />
                        Let's Talk Scents!
                    </h1>
                </div>
                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6"
                    >
                        <div className="flex flex-col">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                placeholder="First Name *"
                                className="border-b border-gray-300 p-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                placeholder="Last Name *"
                                className="border-b border-gray-300 p-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Email *"
                                className="border-b border-gray-300 p-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                className="border-b border-gray-300 p-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <textarea
                                id="help"
                                name="help"
                                required
                                placeholder="What can we help you with?"
                                className="border-b border-gray-300 p-2 focus:outline-none"
                                rows={4}
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="border border-black text-black bg-white py-2 px-4 rounded hover:bg-black hover:text-white"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;