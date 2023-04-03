import React from "React"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return (
        <div className="social-icons">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </li>
            </ul>
        </div>
    )
}