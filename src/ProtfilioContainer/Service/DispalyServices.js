import React from 'react';

const DispalyServices = ({ service }) => {


    return (
        <div className='card-group'>
  <div class="col">
    <div class="card h-100">
      <img src={service.img}  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Title: {service.title}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo voluptatibus illum consequatur sapiente possimus aliquam non porro ut, necessitatibus est? Qui culpa cum laudantium impedit dolore totam aperiam numquam.</p>
      </div>
    </div>
  </div>
  
  
  
</div>
    );
};

export default DispalyServices;