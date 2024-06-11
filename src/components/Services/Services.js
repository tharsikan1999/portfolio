import React from 'react'
import { ServicesData } from './ServicesData'

const Services = () => {

    // var color = "#fde047"

    return (
        <React.Fragment>
            {/*----- Start Services -----*/}
            <section className="py-24 bg-bg-effect-1 bg-cover bg-no-repeat" id="Services">
                <div className="container">
                    <div className="grid lg:pb-16 md:pb-10 pb-8">
                        <div className="lg:col-span-6 text-center">
                            <h3>My Services</h3>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center ">
                        {
                            ServicesData.map((e, index) => {
                                return (
                                    <div className="lg:col-span-6 hover:shadow-black transition-all duration-300 ease-in border-2" key={index}>
                                        <div className={`flex border-2 border-slate-900 lg:p-10 md:p-8 p-5 ${e.Bg_color}`}>
                                            <div className="flex justify-center items-center h-[70px] w-[70px] border-2 text-[32px] bg-white border-slate-900">
                                                {e.Logo}
                                            </div>
                                            <div className="flex-1 pl-5">
                                                <h5 className="mb-3 font-semibold lg:text-2xl md:text-xl text-lg">{e.Heding}</h5>
                                                <p className="text-slate-700/90">{e.Detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/*----- End Services -----*/}
        </React.Fragment>
    )
}

export default Services
