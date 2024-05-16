import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery6.jpg';
import gallery_2 from '../../assets/gallery2.jpg';
import gallery_3 from '../../assets/gallery1.jpg';
import gallery_4 from '../../assets/gallery4.jpg';
import gallery_5 from '../../assets/gallery5.jpg';
import gallery_6 from '../../assets/gallery3.jpg';
import gallery_7 from '../../assets/gallery7.jpg';
import gallery_8 from '../../assets/gallery8.jpg';
import right_arrow from '../../assets/rightarrow.png';

const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
            </div>
            <div className="gallery">
                <img src={gallery_5} alt="" />
                <img src={gallery_6} alt="" />
                <img src={gallery_7} alt="" />
                <img src={gallery_8} alt="" />
            </div>
            <button className='btn dark-btn'>See more here <img src={right_arrow} alt="" /></button>
        </div>
    )
}

export default Campus;
