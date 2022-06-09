import React from 'react';
import a from '../../assets/Home/project01.PNG'
import b from '../../assets/Home/project02.PNG'
import c from '../../assets/Home/project03.PNG'
import d from '../../assets/Home/project04.PNG'
import e from '../../assets/Home/project05.PNG'
import f from '../../assets/Home/project06.PNG'

import DispalyServices from './DispalyServices';

const Service = () => {

    const services = [
        {
            img: a,
            title: 'web developer',
         },
         
        {
            img: b,
            title: 'web developer',
         },
         
        {
            img: c,
            title: 'web developer',
         },
         
        {
            img: d,
            title: 'web developer',
         },
         
        {
            img: e,
            title: 'web developer',
         },
         
        {
            img: f,
            title: 'web developer',
         }
         
             
        
    ]
    

    return (
        <>
        <div>
            <h1 className='text-3xl font-bold text-center'>Our Project</h1>
            

        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4 mt-10">
        {
            services.map(service => 
                <DispalyServices

                service={service}
                
                
                
                ></DispalyServices>
            )
        }
        </div>


        </>
    );
};

export default Service;