import React from 'react'
import { ProjectData, ProjectImg } from './ProjectData'
import { RiCloseFill } from "react-icons/ri";


const Project = ({ onClose }) => {

    const { closeComponent, projectIndex } = onClose;

    return (
        <React.Fragment>
            <div className="fixed md:overflow-hidden overflow-scroll inset-0 bg-black/40 z-[99999]">
                <div className="flex items-center justify-center min-h-screen px-2  ">
                    <div className="max-w-[1200px] m-auto p-7 bg-white relative snap-y">
                        <button type="button" onClick={closeComponent}  className="absolute right-1.5 top-2.5 md:right-5 md:top-5 text-2xl" >
                            <RiCloseFill />
                        </button>
                        <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
            <div className="grid grid-cols-2 gap-2 lg:mt-2 sm:mt-0">
                   {ProjectImg.map((e, key) => {
                   if (projectIndex === key) {
                    return (
                        <React.Fragment key={key}>
                           <div className="  ">
                             <img className="border mb-2 rounded-2xl" src={e.imgOne} alt="" />
                             <img className="border rounded-2xl " src={e.imgTwo} alt="" />            
                           </div>
                           <div className="  ">
                             <img className="border rounded-2xl" src={e.imgThree} alt="" />
                             <img className="border mt-2 rounded-2xl" src={e.imgFour} alt="" />            
                           </div>
                        </React.Fragment>
        );
      }
      return null;
    })}
           </div>
         </div>

                            {
                                ProjectData.map((e, key) => {
                                    if(projectIndex === key){
                                        return (
                                            <div className="col-span-12 md:col-span-5 mb-10 md:mb-0 md:pl-10 lg:pl-14" key={key}>
                                                <h4 className="font-semibold text-[25px] mb-4 pb-4 border-b">{e.Heding}</h4>
                                                <p className="mb-3 text-slate-700/90">{e.Detail1}</p>
                                                <p className="text-slate-700/90">{e.Detail2}</p>
                                                <p className="text-slate-700/90">{e.Detail3}</p>
                                                <ul className="pt-7 list-none">
                                                    <li className="flex py-2">
                                                        <span className="w-[100px] font-semibold">Type:</span>
                                                        <span className="text-slate-700/90">{e.Type}</span>
                                                    </li>
                                                    <li className="flex py-2">
                                                        <span className="w-[100px] font-semibold">Langages:</span>
                                                        <span className="text-slate-700/90">{e.Langages}</span>
                                                    </li>
                                                    
                                                    <li className="flex py-2">
                                                        <span className="w-[100px] font-semibold">github:</span>
                                                        <a href={e.github} target="_blank" rel="noopener noreferrer" className="text-slate-700/90 cursor-pointer underline-none hover:text-blue-500" > {e.github}</a>
                                                    </li>
                                                    <li className="flex py-2">
                                                        <span className="w-[100px] font-semibold">Live URL:</span>
                                                        <a href={e.URL} target="_blank" rel="noopener noreferrer" className="text-slate-700/90 cursor-pointer underline-none hover:text-blue-500" > {e.URL}</a>                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                    else{
                                        return null
                                    }
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project
