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
        <main className="p-16 md:p-32">
            {showPopup && <AprilFoolsPopup onClose={handlePopupClose} />}
            <div className="max-w-4xl mx-auto md:grid md:grid-cols-2 md:gap-32 md:justify-around">
                <div className="mb-6 md:mb-0">
                    <h1 className="text-3xl md:text-5xl font-ethereal font-bold md:text-left">
                        Get in Touch -<br />
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
                                className="border-b border-[#13322B] p-2 focus:outline-none poppins-regular"
                            />
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                placeholder="Last Name *"
                                className="border-b border-[#13322B] p-2 focus:outline-none poppins-regular"
                            />
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Email *"
                                className="border-b border-[#13322B] p-2 focus:outline-none poppins-regular"
                            />
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                className="border-b border-[#13322B] p-2 focus:outline-none poppins-regular"
                            />
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <textarea
                                id="help"
                                name="help"
                                required
                                placeholder="What can we help you with?"
                                className="border-b border-[#13322B] p-2 focus:outline-none poppins-regular"
                                rows={4}
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="border border-black text-black bg-white py-2 px-4 rounded hover:bg-black hover:text-white poppins-regular"
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