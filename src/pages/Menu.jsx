import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { menuImages } from '../data';

const Menu = () => {
    return (
        <section className="min-h-screen pt-32 pb-16 bg-pink-gradient">
            <h1 className="heading">Our <span>Menu</span></h1>

            <div className="w-full max-w-6xl mx-auto px-4">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="w-full py-12"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {menuImages.map((img, index) => (
                        <SwiperSlide key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-[350px] md:max-w-[400px] border-4 border-white">
                            <img
                                src={img}
                                alt={`Menu Page ${index}`}
                                loading="lazy"
                                className="w-full h-auto block"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="text-center mt-8">
                <p className="text-[1.6rem] text-brown-800 animate-bounce">
                    <i className="fas fa-hand-point-left mr-2"></i> Swipe to see more <i className="fas fa-hand-point-right ml-2"></i>
                </p>
            </div>
        </section>
    );
};

export default Menu;
