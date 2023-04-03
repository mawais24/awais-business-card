import React from "react";
import ProfilePhoto from '../images/awais-dp.png'

export default function CanvasDrawImage(){
    return (
        <div className="card-image">
            <img src={ ProfilePhoto } alt="person-img" />
        </div>
    )
}