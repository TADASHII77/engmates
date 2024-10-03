import React, { useEffect, useState } from 'react';
import './content.css'; 
import content1 from './assets/content1.png';
import content2 from './assets/content2.png';
import content3 from './assets/content3.png';

// StickyDiv Component

// Main Content Component
function Content() {
    return (
        <div className='content-container'>
            <div>
                <h3 className='contenthead'>Why Choose Us</h3>
            </div>
            
            {/* Render the StickyDiv Component */}
          

            {/* First Row */}
            <div className='content-rows'>
                <div className='content-img'>
                    <img src={content1} alt="Training" />
                </div>
                <div className='content-text'>
                    <h3>1. Training according to students understanding</h3>
                    <p>
                        Our courses are customized to match each student's learning pace, ensuring effective understanding and progress in English speaking skills.
                    </p>
                </div>
            </div>

            {/* Second Row */}
            <div className='content-rows'>
                <div className='content-img'>
                    <img src={content2} alt="Study Material" />
                </div>
                <div className='content-text'>
                    <h3>2. Well planned study material for students</h3>
                    <p>
                        We provide meticulously planned study materials to enhance learning efficiency and retention, helping students master English effortlessly.
                    </p>
                </div>
            </div>

            {/* Third Row */}
            <div className='content-rows'>
                <div className='content-img'>
                    <img src={content3} alt="Performance Monitoring" />
                </div>
                <div className='content-text'>
                    <h3>3. Regular performance monitoring tests</h3>
                    <p>
                        Regular assessments are conducted to monitor progress, identify areas of improvement, and ensure consistent advancement in English proficiency.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Content;
 