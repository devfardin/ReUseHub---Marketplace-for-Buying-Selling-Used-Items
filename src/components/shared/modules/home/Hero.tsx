'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Container from '../../Container';
import Link from 'next/link';

const Hero = () => {
    const sliderData = [
        {
            title: 'Classified platform, a Marketplace Connecting Buyers and Sellers',
            description: 'Keeno is the fastest online marketplace in Bangladesh. Start buying and selling today! Make shopping SIMPLE, SECURE and FAST on the largest marketplace in Bangladesh. Discover what you need and sell all sorts of products in our simple yet powerful platform.',
            bannerImg: 'https://keeno.app/web/assets/images/banner/4v.jpg',
            buttonText: 'Sign Up Now',
            buttonLink: '/login'
        },
        {
            title: 'Promote any of your product & earn money within our vast network',
            description: 'Keeno is the fastest online marketplace in Bangladesh. Start buying and selling today! Make shopping SIMPLE, SECURE and FAST on the largest marketplace in Bangladesh. Discover what you need and sell all sorts of products in our simple yet powerful platform.',
            bannerImg: 'https://img.freepik.com/free-photo/glasses-near-laptop-reflect-light-from-screen-dark-copy-space_169016-14893.jpg?t=st=1740946790~exp=1740950390~hmac=6fb09a605c7ab8286011dbd894d59f2b2d6cc56113aa2e3de1334a48691b68bb&w=1060',
            buttonText: 'Sign Up Now',
            buttonLink: '/login'
        }
    ]
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    sliderData?.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <SwiperSlide key={index}>
                                <div
                                    style={{
                                        backgroundImage: `url(${slide?.bannerImg})`, // Fallback image
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                    className="w-full py-16 flex items-center"
                                >
                                    <Container>
                                        <div className='grid grid-cols-1 md:grid-cols-2'>
                                            <div></div>
                                            <div className='flex flex-col gap-5'>
                                                <h1 className="text-white text-3xl font-semibold">{slide.title}</h1>
                                                <p className='text-white text-lg font-light'>{slide.description}</p>
                                                <div className='mt-3'>
                                                    <Link className='bg-white py-2.5 px-5 hover:bg-primary hover:text-white text-lg font-medium' href={slide.buttonLink}>{slide.buttonText}</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </Container>
                                </div>
                            </SwiperSlide>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default Hero
