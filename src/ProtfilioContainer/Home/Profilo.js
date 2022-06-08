import React from 'react';
import Typical from "react-typical"

const Profilo = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
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

                        <button className='btn btn-primary'>

                            {""}
                            Hire me
                        </button>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Profilo;