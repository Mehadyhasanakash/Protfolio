import React from 'react';
import Typical from "react-typical";
import"./Profilo.css"


const Profilo = () => {
    return (

       <>

       <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ProtFolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link "  href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Footer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="#Home">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ContactMe</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
       </div>






























        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>

                        <div className='colz-icon'>

                        <a href="https://www.facebook.com/md.mehadyhasanakash">

                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="#">

                            <i className='fa-brands fa-google-plus'></i>
                        </a>

                        <a href="https://www.instagram.com/hasanmdmehady/">

                            <i className='fa-brands fa-instagram-square'></i>
                        </a>

                        <a href="https://www.youtube.com/channel/UCD_yUavpJBzoB6oE8xI4LjA">

                            <i className='fa-brands fa-youtube'></i>
                        </a>

                        <a href="https://twitter.com/mehadyhasan1000">

                            <i className='fa-brands fa-twitter'></i>
                        </a>
                        </div>

                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello I'M <span className='highlighted-text'>Md Mehady Hasan Akash</span>
                        </span>

                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Developer",
                                        1000,
                                        "MERN Stack Developer",
                                        1000,
                                        "React/ReactNative Developer",
                                        1000,
                                    ]}

                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                knock a building application with font and back end operation.

                            </span>
                        </span>
                    </div>

                    <div className='profile-option'>

                        <button className='btn  highlighted-btn color-btn'>

                            {""}
                            Hire me
                        </button>

                        <a href="Resume_ Md Mehady Hasan Akash.pdf" download="Resume_ Md Mehady Hasan Akash.pdf">
                            <button className='btn  highlighted-btn color-button'>GetResume</button>

                        </a>

                    </div>


                </div>

                                        <div className='profile-picture'>
                                            <div className='profile-picture-background'>

                                            </div>
                                        </div>


            </div>

        </div>

        </>
    );
};

export default Profilo;