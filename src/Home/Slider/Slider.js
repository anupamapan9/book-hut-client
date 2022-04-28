import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";
const Slider = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co/Q8V78vh/book1-min.jpg')] justify-center relative flex items-center bg-cover bg-repeat -z-50 h-[84vh] sm:h-[90vh]">
                        <div className="z-10">
                            <h1 className="text-white  mb-5 text-center text-5xl md:text-7xl">We store Books</h1>
                            <p className="text-white text-center text-lg">The library is inhabited by spirits that come out of the pages at night</p>

                        </div>
                        <div className="w-full h-full absolute bg-black opacity-75"></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co/T2cC4rv/book-2.jpg')] justify-center relative flex items-center bg-cover bg-repeat -z-50 h-[84vh] sm:h-[90vh]">
                        <div className="z-10">
                            <h1 className="text-white  mb-5 text-center text-5xl md:text-7xl">
                                We Supply Books
                            </h1>
                            <p className="text-white text-center text-lg">If you don’t like to read, you haven’t found the right book.</p>

                        </div>
                        <div className="w-full h-full absolute bg-black opacity-75"></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co/nC1ZscR/book-3.jpg')] justify-center relative flex items-center bg-cover bg-repeat -z-50 h-[84vh] sm:h-[90vh]">
                        <div className="z-10">
                            <h1 className="text-white  mb-5 text-center text-5xl md:text-7xl">We Count Books</h1>
                            <p className="text-white text-center text-lg">Fill your house with stacks of books, in all the crannies and all the nooks.</p>

                        </div>
                        <div className="w-full h-full absolute bg-black opacity-75"></div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="bg-[url('https://i.ibb.co/WgXNF6X/book-4.jpg')] justify-center relative flex items-center bg-cover bg-repeat -z-50 h-[84vh] sm:h-[90vh]">
                        <div className="z-10">
                            <h1 className="text-white  mb-5 text-center text-5xl md:text-7xl">Friend Means Book</h1>
                            <p className="text-white text-center text-lg">Rainy days should be spent at home with a cup of tea and a good book.</p>

                        </div>
                        <div className="w-full h-full absolute bg-black opacity-75"></div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;