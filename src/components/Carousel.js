import React, { Component } from "react";
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';





import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import './Carousel.css';


class Carousel extends Component {

    render() {

        const slideImagesNames = ["slideImg1", "slideImg2", "slideImg3", "slideImg4"]

        return (
            <div className="section-banner">
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
                    onSlideChange={() => console.log('slide change')}
                >
                    {slideImagesNames.map(image =>
                        <SwiperSlide>
                            <img className="slide_image" src={require(`../images/${image}.jpg`)}></img>
                        </SwiperSlide>)}


                </Swiper>
            </div>



        );
    }
}

export default Carousel;