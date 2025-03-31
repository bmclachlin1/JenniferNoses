import React, { useState } from 'react';
import { AprilFoolsPopup } from '../components/AprilFoolsPopup';

const Contact: React.FC = () => {
    const [showAprilFoolsPopup, setShowAprilFoolsPopupPopup] = useState(false);
    
    const handlePopupOpen = () => {
        setShowAprilFoolsPopupPopup(true);
    };

    const handlePopupClose = () => {
        setShowAprilFoolsPopupPopup(false);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handlePopupOpen();
    };

    return (
        <main className="bg-[#E5E5E5] p-16 lg:p-32">
            {showAprilFoolsPopup && <AprilFoolsPopup onClose={handlePopupClose} />}
            <div className="lg:grid lg:grid-cols-3 lg:gap-32 lg:justify-around">
                <div className="mb-6 lg:mb-0">
                    <h1 className="text-[#383129] text-3xl md:text-4xl lg:text-5xl font-ethereal font-bold lg:text-left">
                        Get in Touch -<br />
                        Let's Talk Scents!
                    </h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 lg:space-y-0 lg:grid lg:col-span-2 lg:gap-6"
                >
                    <div className="flex flex-col">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="First Name *"
                            className="border-b placeholder-[#13322B] text-[#13322B] border-[#13322B] p-2 focus:outline-none poppins-regular"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Last Name *"
                            className="border-b placeholder-[#13322B] text-[#13322B] border-[#13322B] p-2 focus:outline-none poppins-regular"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Email *"
                            className="border-b placeholder-[#13322B] text-[#13322B] border-[#13322B] p-2 focus:outline-none poppins-regular"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            className="border-b placeholder-[#13322B] text-[#13322B] border-[#13322B] p-2 focus:outline-none poppins-regular"
                        />
                    </div>
                    <div className="flex flex-col lg:col-span-2">
                        <textarea
                            id="help"
                            name="help"
                            required
                            placeholder="What can we help you with?"
                            className="border-b placeholder-[#13322B] text-[#13322B] border-[#13322B] p-2 focus:outline-none poppins-regular"
                            rows={4}
                        ></textarea>
                    </div>
                    <div className="lg:col-span-2">
                        <button
                            type="submit"
                            className="border border-[#383129] text-[#383129] bg-[#E5E5E5] py-2 px-4 rounded hover:bg-[#383129] hover:text-[#E5E5E5] poppins-regular"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Contact;