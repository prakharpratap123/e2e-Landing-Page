// import React from 'react'
import "./Card.scss"

const Card = () => {
    return (
        <div className='card-container'>
            <div className="img-container">
                <img src="https://institute.e2ehiring.com/content/images/landingPageIcons/Dashboard.svg" alt="404" className="card-logo" />
            </div>
            <div className='title-div'>
                <p className="p1">Dashboard for the Institute stakeholders</p>
                <p className="p2">Dashboard for the Institute stakeholders</p>
            </div>
            <div className='description-div'>
                <p>An impressive dashboard gives crucial information about the students, their progress and the top hiring companies which assists the stakeholders to make important decisions</p>
            </div>
        </div>
    )
}

export default Card