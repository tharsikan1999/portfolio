import React, { useState } from 'react'
import { PortfolioData } from './PortfolioData'
import Project from '../Project/Project';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [projectIndex, setprojectIndex] = useState(null);



    const closeComponent = () => {
        setIsVisible(false);
    };
    return (
        <React.Fragment>
            {/*----- Start Projects -----*/}
            <section className="py-24 bg-orange-50" id="Portfolio">
                <div className="container">
                    <div className="grid lg:pb-16 md:pb-10 pb-8">
                        <div className="lg:col-span-6 text-center">
                            <h3>LATEST PROJECTS</h3>
                        </div>
                    </div>
                    <div>
                        {
                            PortfolioData.map((e, index) => {
                                return (
                                    <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16" key={index}>
                                        <div className={`lg:px-10 md:px-5 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                                            <div className="rounded-3xl hover:shadow-black transition-all duration-300 ease-in">
                                                <img src={e.img} alt="" className='bg-no-repeat bg-cover rounded-2xl' />
                                            </div>
                                        </div>
                                        <div className={`flex flex-col justify-center lg:px-10 md:px-5 ${index % 2 === 0 ? '' : 'order-1'}`}>
                                            <h6 className="mb-[18px]">
                                                <span className="inline-block px-5 py-2 uppercase tracking-wider text-xs rounded-[30px] bg-orange-100">{e.list}</span>
                                            </h6>
                                            <h4 className="mb-4 text-2xl font-semibold md:mb-6 md:text-[32px]">{e.Heding}</h4>
                                            <p className='mb-6 text-slate-700/90'>{e.Detail}</p>
                                            <div>
                                            <button onClick={() => { setIsVisible(!isVisible); setprojectIndex(index); }} className="btn btn-theme">{e.btn}</button>
                                            {isVisible && <Project onClose={{ closeComponent, projectIndex }} />}
                                            </div>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/*----- End Projects -----*/}
        </React.Fragment>
    )
}

export default Portfolio
