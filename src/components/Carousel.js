import React, {Component} from "react";
import { Navigation, Pagination, Autoplay, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';


class Carousel extends Component {
    
    
    render() {
        return (
            
            <Swiper 
            modules={[Navigation, Pagination, Autoplay, Scrollbar]}
            spaceBetween={0}
            slidesperview={3}
            navigation={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() =>  console.log('slide change')}
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
    
            </Swiper>
            
            
        );
    }
}

export default Carousel;