import React from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next.png';
import back_icon from '../../assets/prev.png';
import user_1 from '../../assets/siam.jpg';
import user_2 from '../../assets/siam.jpg';
import user_3 from '../../assets/siam.jpg';
import user_4 from '../../assets/siam.jpg';

const Testimonials = ({subTitle, Title}) => {
    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' />
            <img src={back_icon} alt="" className='back-btn' />
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Sohel Rana</h3>
                                    <span>AHUSity, Bangladesh</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at AHUSity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Sohel Rana</h3>
                                    <span>AHUSity, Bangladesh</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at AHUSity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Sohel Rana</h3>
                                    <span>AHUSity, Bangladesh</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at AHUSity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Sohel Rana</h3>
                                    <span>AHUSity, Bangladesh</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at AHUSity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;
