import React from 'react'
import { Testimonials } from './TestimonialData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <React.Fragment>
            {/*----- Start Testimonial -----*/}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:pb-16 md:pb-10 pb-8">
                        <div className="lg:col-span-6 text-center">
                            <h3>TESTIMONIAL</h3>
                        </div>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {
                                Testimonials.map((e, key) => {
                                    return (
                                        <div key={key} className="!flex border-2 border-slate-900 md:p-9 p-5 hover:shadow-black transition-all duration-300 ease-in">
                                            <div className="max-w-[100px] h-full mx-auto border-2 border-slate-900">
                                                <img src={e.Image} alt="" />
                                            </div>
                                            <div className="relative flex-1 pl-5">
                                                <p className="mb-3 text-[17px] text-slate-700/90">{e.Detail}</p>
                                                <h6 className="font-semibold">{e.name}</h6>
                                                <span className="text-sm text-slate-700/90">{e.position}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
            {/*----- End Testimonial -----*/}
        </React.Fragment>
    )
}

export default Testimonial
