import React from 'react'
import aboutme_banners from '../../assets/Image/aboutme-banner.png'
import { NumberData, BtnData } from './AboutData'


const About = () => {
    return (
        <React.Fragment>
            {/*----- Start About -----*/}
            <section className="py-24" id="about">
                <div className="container">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-6 text-center mb-12 lg:mb-0 lg:ml-0 md:ml-12 sm:ml-o" >
                            <img src={aboutme_banners} alt="" className="bg-no-repeat bg-cover" />
                        </div>
                        <div className="lg:col-span-6 lg:pl-12">
                            <h3 className="font-semibold text-[26px] md:text-[40px] leading-[1.2] mb-6 normal-case">I'm a Freelancer Full Stack Developer with over 1 years of experience.</h3>
                            <p className="text-base md:text-lg text-slate-700/90">As a versatile Full Stack Developer with over a year of experience in Colombo, I code and create web elements for amazing clients globally. I thrive on collaborating with new people, welcoming fresh experiences and challenges. Let's build something extraordinary together!</p>
                            <div className="grid grid-cols-12 pt-5">
                                {
                                    NumberData.map((e, key) => {
                                        return (
                                            <div className="col-span-6 sm:col-span-4" key={key}>
                                                <h5 className="text-[26px] text-orange-600 font-semibold">{e.Number}</h5>
                                                <span className="text-slate-700/90">{e.Detail}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {
                                BtnData.map((e, key) => {
                                    return (
                                        <div className="pt-6" key={key}>
                                            <a href="#Contact" className="btn btn-theme mr-4" >{e.btn1}</a>
                                            <a href="#Portfolio" className="btn btn-dark">{e.btn2}</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/*----- End About -----*/}
        </React.Fragment>
    )
}

export default About
