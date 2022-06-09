import React from 'react';
import image from '../../assets/Home/Abdul hamid.jpg'

const About = () => {
    return (
        <div class="hero min-h-92 bg-base-200  ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold text-orange-500 mt-10">ABOUT ME</h1>
      <h1 className='font-bold text-3xl mt-10'>Why Chosse Me</h1>
      <p class="py-6 text-2xl   ">Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</p>
      <h1 className='text-xl'>Here are a Few Highlights:</h1>
      <p>1.Full Stack web and mobile development </p>
      <p>2. Interactive Front End as per the design</p>
      <p>3. React and React Native</p>
      <p>4. Redux for State Mnanagement</p>
      <p>5. Building REST API</p>
      <p>6. Managing database</p>

      
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
          <img src={image} alt="" />
        
        
        
      </div>
    </div>
  </div>
</div>
            
    );
};

export default About;