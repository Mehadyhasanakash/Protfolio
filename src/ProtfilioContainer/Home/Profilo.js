import React from 'react';
import Typical from "react-typical";
import About from '../About/About';
import"./Profilo.css"



const Profilo = () => {
    return (

       <>

        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>

                        <div className='colz-icon'>

                        <a href="https://www.facebook.com/md.mehadyhasanakash">

                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="https://github.com/Mehadyhasanakash">

                            <i className='fa-brands fa-github'></i>
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
        <About/>

        </>
    );
};

export default Profilo;