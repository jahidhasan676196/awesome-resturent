import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import Title from './Title';




const Slider = () => {
    return (
        <div>
            <Title 
            subHeading='---From 11:00am to 10:00pm---'
            Heading='ORDER ONLINE'
            ></Title>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper mt-12"
            >
                <SwiperSlide>
                    <img className='' src={slide1} alt="" />
                    <p className='-mt-16 text-white font-normal text-3xl  pb-10 uppercase'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src={slide2} alt="" />
                    <p className='-mt-16 text-white font-normal text-3xl  pb-10 uppercase'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src={slide3} alt="" />
                    <p className='-mt-16 text-white font-normal text-3xl  pb-10 uppercase'>pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src={slide4} alt="" />
                    <p className='-mt-16 text-white font-normal text-3xl  pb-10 uppercase'>deserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src={slide5} alt="" />
                    <p className='-mt-16 text-white font-normal text-3xl  pb-10 uppercase'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src={slide5} alt="" />
                    <p className='-mt-16 text-white font-normal text-3xl  pb-10 uppercase'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src={slide5} alt="" />
                    <p className='-mt-16 text-white font-normal text-3xl  pb-10 uppercase'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src={slide5} alt="" />
                    <p className='-mt-16 text-white font-normal text-3xl  pb-10 uppercase'>Salads</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;