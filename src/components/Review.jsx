import { useEffect, useState } from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Slide from "./Slide";


const Review = () => {
    const [revies,setRevies]=useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {
                setRevies(data)
                console.log(data);
            })
    }, [])
    return (
        <div className='mt-32 mx-32'>
            <Title
                subHeading='---What Our Clients Say---'
                Heading='TESTIMONIALS'
            ></Title>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-12 h-[400px] ">
                {
                    revies.map(revie=><SwiperSlide><Slide key={revie._id}  revie={revie}></Slide></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Review;