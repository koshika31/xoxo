import React from 'react';

const Order = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity()) {
            alert("Thank you! Your cake request has been sent. We will contact you shortly.");
            form.reset();
        }
    };

    return (
        <section className="min-h-screen pt-32 pb-16">
            <h1 className="heading">Custom <span>Cakes</span></h1>

            <div className="flex flex-wrap items-stretch justify-center gap-8 bg-white p-8 rounded-[2rem] shadow-xl border border-pink-100 max-w-7xl mx-auto">
                <div className="flex-1 min-w-[35rem]">
                    <img src="/image/food/3.png" alt="Custom Cake" className="w-full h-full object-cover rounded-[1.5rem]" />
                </div>

                <form className="flex-1 min-w-[35rem] p-4" onSubmit={handleSubmit}>
                    <h3 className="text-[3rem] text-brown-800 font-dancing mb-6">Design Your Dream Cake</h3>

                    <div className="mb-4">
                        <span className="block text-[1.6rem] text-brown-800 mb-2 font-medium">Your Name</span>
                        <input type="text" placeholder="Enter your name" required className="w-full p-4 border border-pink-200 rounded-lg text-[1.6rem] focus:border-pink-500 focus:bg-pink-50 outline-none transition" />
                    </div>
                    <div className="mb-4">
                        <span className="block text-[1.6rem] text-brown-800 mb-2 font-medium">Phone Number</span>
                        <input type="tel" placeholder="Enter your number" required className="w-full p-4 border border-pink-200 rounded-lg text-[1.6rem] focus:border-pink-500 focus:bg-pink-50 outline-none transition" />
                    </div>
                    <div className="mb-4">
                        <span className="block text-[1.6rem] text-brown-800 mb-2 font-medium">Event Date</span>
                        <input type="date" required className="w-full p-4 border border-pink-200 rounded-lg text-[1.6rem] focus:border-pink-500 focus:bg-pink-50 outline-none transition" />
                    </div>
                    <div className="mb-4">
                        <span className="block text-[1.6rem] text-brown-800 mb-2 font-medium">Cake Type</span>
                        <input type="text" placeholder="Birthday, Anniversary, etc." className="w-full p-4 border border-pink-200 rounded-lg text-[1.6rem] focus:border-pink-500 focus:bg-pink-50 outline-none transition" />
                    </div>
                    <div className="mb-4">
                        <span className="block text-[1.6rem] text-brown-800 mb-2 font-medium">Message on Cake</span>
                        <textarea placeholder="Happy Birthday..." rows="4" className="w-full p-4 border border-pink-200 rounded-lg text-[1.6rem] focus:border-pink-500 focus:bg-pink-50 outline-none transition resize-none"></textarea>
                    </div>

                    <button type="submit" className="btn w-full">Request Quote</button>
                </form>
            </div>
        </section>
    );
};

export default Order;
