import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function PersonContact(){
    return (
        <div className="person-contact">
            <h1>Muhammad Awais</h1>
            <h3>Frontend Developer</h3>
            <a className="web-link" href="#">awais.website</a>
            <div className="cta">
                <button className="btn email-btn">
                    <FontAwesomeIcon icon={faEnvelope} className="mail-icon"/>
                    <span>Email</span>
                </button>
                <button className="btn social-btn">
                <FontAwesomeIcon icon={faLinkedin} className="mail-icon"/>
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    )
}