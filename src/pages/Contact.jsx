import React from 'react';

const Contact = () => {
    return (
        <section className="min-h-screen pt-32 pb-16">
            <h1 className="heading">Contact <span>Us</span></h1>

            <div className="flex flex-wrap gap-8 justify-center">

                <div className="flex-1 min-w-[35rem] h-[50rem] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74653658512!2d77.94709428599422!3d30.325409748600863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c2563f24!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1644917646698!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>

                <div className="flex-1 min-w-[35rem] bg-white p-8 rounded-[2rem] shadow-lg border border-pink-100 flex flex-col justify-center">
                    <h3 className="text-[3rem] text-brown-800 font-dancing mb-8">Get in Touch</h3>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-16 w-16 rounded-full bg-pink-50 flex items-center justify-center text-[2rem] text-pink-500">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h4 className="text-[1.8rem] text-pink-600 font-medium">Address</h4>
                            <p className="text-[1.6rem] text-gray-600">Rajpur Road, Dehradun</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-16 w-16 rounded-full bg-pink-50 flex items-center justify-center text-[2rem] text-pink-500">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div>
                            <h4 className="text-[1.8rem] text-pink-600 font-medium">Phone</h4>
                            <p className="text-[1.6rem] text-gray-600">+91-123-456-7890</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-16 w-16 rounded-full bg-pink-50 flex items-center justify-center text-[2rem] text-pink-500">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div>
                            <h4 className="text-[1.8rem] text-pink-600 font-medium">Opening Hours</h4>
                            <p className="text-[1.6rem] text-gray-600">Mon - Sun: 10:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-pink-50 flex items-center justify-center text-[2rem] text-pink-500">
                            <i className="fas fa-share-alt"></i>
                        </div>
                        <div>
                            <h4 className="text-[1.8rem] text-pink-600 font-medium">Follow Us</h4>
                            <div className="flex gap-4 mt-2">
                                <a href="https://www.instagram.com/xoxo_patisserie/?hl=en" target="_blank" rel="noopener noreferrer" className="text-[1.6rem] text-gray-600 hover:text-pink-600 transition flex items-center gap-2">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                                <a href="https://www.facebook.com/xoxopatisserie/" target="_blank" rel="noopener noreferrer" className="text-[1.6rem] text-gray-600 hover:text-pink-600 transition flex items-center gap-2">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
