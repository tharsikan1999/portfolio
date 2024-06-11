import React from 'react'
import { Languages } from './Languages'
import { Database } from './Database'
import { Frameworks } from './Frameworks'
import { Technologies } from './Technologies'

const Skills = () => {
    return (
        <React.Fragment>
            <section className="lg:py-24 md:py-20 min-[320px]:py-10  lg:pb-15 md:pb-8 sm:pb-10" id="Skills">
                <div className="container">
                <div className="lg:pb-10 md:pb-6  text-center text-5xl font-semibold">
                                <p>My Skills</p>
                            </div>
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1">
                        <div className="lg:col-span-6 lg:pl-9">
                            
                            <div>
                            <div className="lg:pb-7 pt-10 md:pb-10 pb-8 text-4xl font-semibold text-center">
                                <p>Technologies</p>
                            </div>
                                <div className="grid gap-4 grid-cols-12 cursor-pointer ">
                                    {
                                        Technologies.map((e, index) => {
                                            return (
                                                <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in" key={index}>
                                                    <div className={`flex items-center border-2 border-slate-900 p-4 ${e.Bg_color}`}>
                                                        <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
                                                            {e.Logo}
                                                        </div>
                                                        <h6 className="pl-4 text-base font-semibold">{e.Heding}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                            <div className="lg:pb-7 pt-10 md:pb-10 pb-8 text-4xl font-semibold text-center">
                                <p>Databases</p>
                            </div>
                                <div className="grid gap-4 grid-cols-12 cursor-pointer">
                                    {
                                        Database.map((e, index) => {
                                            return (
                                                <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in" key={index}>
                                                    <div className={`flex items-center border-2 border-slate-900 p-4 ${e.Bg_color}`}>
                                                        <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
                                                            {e.Logo}
                                                        </div>
                                                        <h6 className="pl-4 text-base font-semibold">{e.Heding}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                           
                        </div>
                        <div className="lg:col-span-6 text-center  md:pt-0  lg:pl-7 md:pl-7  " >
                        <div>
                            <div className="lg:pb-7 pt-10 md:pb-10 pb-8 text-4xl font-semibold ">
                                <p>Frameworks</p>
                            </div>
                                <div className="grid gap-4 grid-cols-12  cursor-pointer">
                                    {
                                        Frameworks.map((e, index) => {
                                            return (
                                                <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in" key={index}>
                                                    <div className={`flex items-center border-2 border-slate-900 p-4 ${e.Bg_color}`}>
                                                        <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
                                                            {e.Logo}
                                                        </div>
                                                        <h6 className="pl-4 text-base font-semibold">{e.Heding}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        <div className="sm:mt-10 mt-10 ">
                            <div className="lg:pb-7 md:pb-10 pb-8 text-4xl font-semibold ">
                                <p>Languages</p>
                            </div>
                                <div className="grid gap-4 grid-cols-12  cursor-pointer">
                                    {
                                        Languages.map((e, index) => {
                                            return (
                                                <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in" key={index}>
                                                    <div className={`flex items-center border-2 border-slate-900 p-4 ${e.Bg_color}`}>
                                                        <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
                                                            {e.Logo}
                                                        </div>
                                                        <h6 className="pl-4 text-base font-semibold">{e.Heding}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Skills
