import React from 'react';
import "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import '../style/global.css';
import '../style/swipper.css';

const imgImportAll = (r) => r.keys().map(r);
let img_1 = imgImportAll(require.context('../assets/img/galery_1/', false, /\.(png|jpe?g|svg)$/));
let img_2 = imgImportAll(require.context('../assets/img/galery_2/', false, /\.(png|jpe?g|svg)$/));
let img_2_1 = imgImportAll(require.context('../assets/img/galery_2_1/', false, /\.(png|jpe?g|svg)$/));
let img_3 = imgImportAll(require.context('../assets/img/galery_3/', false, /\.(png|jpe?g|svg)$/));
let img_3_1 = imgImportAll(require.context('../assets/img/galery_3_1/', false, /\.(png|jpe?g|svg)$/));

function GalleryComp() {
    return (
        <div  className="w-body pt-5" id='gallery'>
            <div className='d-flex align-items-center min-vh-100 mt-5 pt-5'>
                <div className="container">
                    <h1 className="text-warning heading">Class Gallery</h1>
                    <div className="border-bottom mb-5"></div>

                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'
                    >
                        {img_1.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`img ${index + 1}`} />
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination">

                            </div>
                        </div>
                    </Swiper>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'
                    >
                        {img_2.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`img ${index + 1}`} />
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination">

                            </div>
                        </div>
                    </Swiper>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'
                    >
                        {img_2_1.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`img ${index + 1}`} />
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination">

                            </div>
                        </div>
                    </Swiper>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'
                    >
                        {img_3.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`img ${index + 1}`} />
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination">

                            </div>
                        </div>
                    </Swiper>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'
                    >
                        {img_3_1.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`img ${index + 1}`} />
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination">

                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default GalleryComp;