import React from 'react';

const Footer = () => {
    return (
        <section className="bg-white pt-16 mt-8 border-t border-pink-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-[9%]">
                <div className="text-center md:text-left">
                    <h3 className="text-[2.2rem] text-pink-600 font-dancing mb-4">XOXO Café <i className="fas fa-heart"></i></h3>
                    <p className="text-[1.5rem] text-brown-800 leading-relaxed">
                        The cutest cafe in town. Serving love, coffee, and cake every day. Stop by for the vibes, stay for the taste.
                    </p>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-[2.2rem] text-pink-600 font-dancing mb-4">Contact Info</h3>
                    <a href="tel:+911234567890" className="block text-[1.4rem] text-gray-500 py-2 hover:text-pink-600 transition">
                        <i className="fas fa-phone text-pink-400 mr-2"></i> +91-123-456-7890
                    </a>
                    <a href="mailto:hello@xoxocafe.com" className="block text-[1.4rem] text-gray-500 py-2 hover:text-pink-600 transition">
                        <i className="fas fa-envelope text-pink-400 mr-2"></i> hello@xoxocafe.com
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Rajpur+Road%2C+Dehradun" target="_blank" rel="noopener noreferrer" className="block text-[1.4rem] text-gray-500 py-2 hover:text-pink-600 transition">
                        <i className="fas fa-map-marker-alt text-pink-400 mr-2"></i> Rajpur Road, Dehradun
                    </a>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-[2.2rem] text-pink-600 font-dancing mb-4">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://www.instagram.com/xoxo_patisserie/?hl=en" target="_blank" rel="noopener noreferrer" className="h-10 w-10 leading-10 text-center rounded-full bg-pink-50 text-pink-400 text-[1.8rem] hover:bg-pink-400 hover:text-white transition rotate-0 hover:rotate-12"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/xoxopatisserie/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 leading-10 text-center rounded-full bg-pink-50 text-pink-400 text-[1.8rem] hover:bg-pink-400 hover:text-white transition rotate-0 hover:rotate-12"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>

            <div className="text-center border-t border-pink-100 mt-8 py-8 px-4">
                <p className="text-[1.6rem] text-brown-800">
                    Created by <a href="https://Manas0x.site" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-medium hover:underline">Manas Arora</a> | All rights reserved
                </p>
            </div>
        </section>
    );
};

export default Footer;
