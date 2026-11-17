import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import { reviews } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen pt-32 pb-12 flex items-center justify-center bg-[url('/image/home-bg.jpg')] bg-cover bg-center relative px-6 md:px-[9%]">
                <div className="absolute inset-0 bg-pink-50/80 z-0"></div>

                <div className="relative z-10 w-full flex flex-wrap items-center gap-8">
                    <div className="flex-1 min-w-[30rem]">
                        <h3 className="text-[5rem] md:text-[6.5rem] text-pink-700 font-dancing mb-4 drop-shadow-sm leading-tight">
                            Welcome to <span>XOXO Café</span>
                        </h3>
                        <p className="text-[1.6rem] text-brown-800 leading-relaxed py-4">
                            Step into a world of pink perfection. From our floral walls to our melting brownies, everything is designed to be loved. The most instagrammable café in town!
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Link to="/menu" className="btn">View Menu</Link>
                            <a
                                href="https://www.google.com/maps/reserve/v/dine/c/aaDMPTiHHrk?source=pa&opi=89978449"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-white text-pink-600 border-2 border-pink-400 hover:bg-pink-50 hover:text-pink-700"
                            >
                                Reserve a Table
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 min-w-[30rem] text-center">
                        <img
                            src="/image/interior/1.png"
                            alt="Cafe Interior"
                            className="w-[90%] mx-auto rounded-[2rem] shadow-[0_1rem_2rem_rgba(255,105,180,0.3)] border-8 border-white animate-[float_4s_linear_infinite]"
                        />
                    </div>
                </div>
            </section>

            {/* Order Online Section - Prominent */}
            <section className="py-12 px-6 md:px-[9%] bg-white/60">
                <h1 className="heading">Order <span>Online</span></h1>
                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="https://www.zomato.com/dehradun/xoxo-cafe-bakery-patisserie-rajpur/order"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-1 min-w-[28rem] max-w-[40rem] bg-white border-2 border-red-100 rounded-[2rem] p-6 shadow-lg hover:shadow-2xl hover:border-red-500 transition-all flex items-center gap-6 cursor-pointer"
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt="Zomato" className="h-8 md:h-10 w-auto" />
                        <div>
                            <h3 className="text-[2rem] font-bold text-gray-800 group-hover:text-red-500">Order on Zomato</h3>
                            <p className="text-[1.4rem] text-gray-500">Fast delivery to your doorstep</p>
                        </div>
                        <i className="fas fa-arrow-right ml-auto text-[2rem] text-red-400 group-hover:translate-x-2 transition-transform"></i>
                    </a>

                    <a
                        href="https://www.swiggy.com/city/dehradun/xoxo---cafe,-bakery,-patisserie-gf-10,-pecific-hills-massuri-diversion-rajpur,dhedradun-hathibarkala-rest1091843"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-1 min-w-[28rem] max-w-[40rem] bg-white border-2 border-orange-100 rounded-[2rem] p-6 shadow-lg hover:shadow-2xl hover:border-orange-500 transition-all flex items-center gap-6 cursor-pointer"
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Swiggy_Logo_2024.webp/1143px-Swiggy_Logo_2024.webp.png" alt="Swiggy" className="h-8 md:h-10 w-auto" />
                        <div>
                            <h3 className="text-[2rem] font-bold text-gray-800 group-hover:text-orange-500">Order on Swiggy</h3>
                            <p className="text-[1.4rem] text-gray-500">Live for food</p>
                        </div>
                        <i className="fas fa-arrow-right ml-auto text-[2rem] text-orange-400 group-hover:translate-x-2 transition-transform"></i>
                    </a>
                </div>
            </section>

            {/* Delights Preview - Fixed Images */}
            <section className="py-16 px-6 md:px-[9%]">
                <h1 className="heading">Our <span>Delights</span></h1>

                <div className="box-container">
                    {[
                        { img: '/image/food/1.png', title: 'Signature Coffee', desc: 'Brewed to perfection' },
                        { img: '/image/food/2.png', title: 'Delicious Dimsums', desc: 'Steaming hot & tasty' },
                        { img: '/image/food/3.png', title: 'Sweet Treats', desc: 'Indulge in sweetness' },
                        { img: '/image/food/4.png', title: 'Refreshing Drinks', desc: 'Cool down in style' },
                    ].map((item, idx) => (
                        <Link to="/menu" key={idx} className="block bg-white rounded-[2rem] overflow-hidden shadow-lg border border-pink-100 hover:-translate-y-2 hover:shadow-2xl transition-all group">
                            {/* Large Image Container */}
                            <div className="w-full h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-[2.2rem] text-brown-800 font-bold mb-2 group-hover:text-pink-600">{item.title}</h3>
                                <p className="text-[1.5rem] text-gray-500">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Reviews */}
            <section className="py-16 px-6 md:px-[9%] bg-white/50">
                <h1 className="heading">Customer <span>Love</span></h1>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-16"
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg border border-pink-50 hover:border-pink-300 transition-all h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={review.image} alt={review.name} className="h-16 w-16 rounded-full object-cover border-2 border-pink-300" />
                                <div className="text-left">
                                    <h3 className="text-[1.8rem] text-brown-800 font-bold">{review.name}</h3>
                                    <div className="text-gold text-[1.4rem]">
                                        {[...Array(review.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-[1.5rem] text-gray-600 leading-relaxed italic flex-grow">"{review.text}"</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Location */}
            <section className="py-16 px-6 md:px-[9%] text-center">
                <h1 className="heading">Find <span>Us</span></h1>
                <div className="w-full h-[400px] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                    <iframe
                        src="https://maps.google.com/maps?q=XOXO%20Cafe%20Rajpur%20Road%20Dehradun&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="XOXO Cafe Location"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default Home;
