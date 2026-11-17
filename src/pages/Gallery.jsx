import React from 'react';

const Gallery = () => {
    const images = [
        '/image/interior/1.png',
        '/image/interior/2.png',
        '/image/interior/3.png',
        '/image/interior/4.png',
        '/image/food/1.png',
        '/image/food/2.png',
        '/image/food/3.png',
        '/image/food/4.png',
        '/image/food/5.png',
    ];

    return (
        <section className="min-h-screen pt-32 pb-16">
            <h1 className="heading">Our <span>Gallery</span></h1>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 px-4">
                {images.map((src, idx) => (
                    <div key={idx} className="break-inside-avoid rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-transparent hover:border-pink-300 transition-all duration-300 group">
                        <img
                            src={src}
                            alt="Gallery"
                            loading="lazy"
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
