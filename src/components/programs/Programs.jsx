import React from "react";
import './Programs.css';
import program1 from '../../assets/siam.jpg';
import program2 from '../../assets/noman.jpg';
import program3 from '../../assets/siam1.jpg';
import program_icon1 from '../../assets/book-logo.jpg';
import program_icon2 from '../../assets/book-pgm.png';
import program_icon3 from '../../assets/book-icon.jpg';

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <img src={program_icon1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={program_icon2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={program_icon3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs;
