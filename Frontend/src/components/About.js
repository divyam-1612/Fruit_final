import React from 'react';
import "./CSS/AboutUs.css"; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1 className="about-us-heading">About Us</h1>
            <div className="profile-section">
                <div className="image-container">
                    <img src="https://th.bing.com/th?id=OIP.yh5tI6JVosofOhznWcn-8gHaIp&w=231&h=270&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Your Name" className="profile-image" />
                </div>
                <div className="info-container">
                    <div className="personal-info">
                        <h2>Divyam Jain</h2>
                        <p><strong>Age:</strong> 20</p>
                    </div>

                    <div className="contact-info">
                        <p><FaMapMarkerAlt className="icon" />Sector 1</p>
                        <p><FaEnvelope className="icon" />divyam0462.be21@chitkara.edu.in</p>
                        <p><FaPhone className="icon" />7015127118</p>
                    </div>
                </div>
            </div>
            <div className="career-section">
                <h2>About My Career</h2>
                <p>
                    I am a Computer Science Engineering student specializing in software development. I have experience in 
                    full-stack development and have worked on various projects involving technologies such as React, Node.js, 
                    MongoDB, and more. My passion lies in building efficient, user-friendly applications and continuously 
                    learning new technologies to improve my skill set.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
