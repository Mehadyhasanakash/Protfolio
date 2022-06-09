import React from 'react';
import project01 from "../../assets/Home/project01.PNG"
import project02 from "../../assets/Home/project02.PNG"
import project03 from "../../assets/Home/project03.PNG"
import project04 from "../../assets/Home/project04.PNG"
import project05 from "../../assets/Home/project05.PNG"
import project06 from "../../assets/Home/project06.PNG"

const Service = () => {

    const services = [
        {
            imgsrc: project01,
            title: 'web developer',
         },
         
        {
            imgsrc: project02,
            title: 'web developer',
         },
         
        {
            imgsrc: project03,
            title: 'web developer',
         },
         
        {
            imgsrc: project04,
            title: 'web developer',
         },
         
        {
            imgsrc: project05,
            title: 'web developer',
         },
         
        {
            imgsrc: project06,
            title: 'web developer',
         }
         
             
        
    ]


    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Our Project</h1>
        </div>
    );
};

export default Service;