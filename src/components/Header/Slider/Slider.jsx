import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Slider.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import sliderInfo from './sliderInfo.json'


// interface ISlide {
//     title: string,
//     otherText: string,
//     link: string
// }

// interface ISlider {
//     children?: JSX.Element | JSX.Element[]
// }



function Slide({ text }) {
    return (
        <SwiperSlide>{text}</SwiperSlide>
    )
}



function Slider() {

    const swiper = useSwiper()
    console.log(swiper);

    return (
        <section className={styles.slider}>

            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                loop={true}
                grabCursor={true}
            >



                <SwiperSlide className={styles.slide}>
                    <div className="col">
                        <p className={styles.title}>
                            Buy 2 or More, Get 25% Off
                        </p>
                    </div>
                    <div className="col">
                        <p className={styles.otherText}>Nike Members, use code MEMBER23 at checkout. On selected fleece styles.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <div className="col">
                        <p className={styles.title}>
                            Buy 2 or More, Get 25% Off
                        </p>
                    </div>
                    <div className="col">
                        <p className={styles.otherText}>Nike Members, use code MEMBER23 at checkout. On selected fleece styles.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <div className="col">
                        <p className={styles.title}>
                            Buy 2 or More, Get 25% Off
                        </p>
                    </div>
                    <div className="col">
                        <p className={styles.otherText}>Nike Members, use code MEMBER23 at checkout. On selected fleece styles.</p>
                    </div>
                </SwiperSlide>



            </Swiper>

        </section>
    )
}

export default Slider