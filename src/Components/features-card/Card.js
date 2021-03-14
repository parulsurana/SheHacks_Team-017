import React from 'react'
import "./Card.css"
function Card({ title, icon }) {
    return (
        <div className="card-container">
            <div className="icon">
                {icon}
            </div>
            <div className="card_title">
                <h5>{title}</h5>
            </div>
        </div>
    );
}

export default Card;