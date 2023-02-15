// import React from 'react'
import './SecondContent.scss'
import Card from "./Card"

const SecondContent = () => {
    return (
        <>
            <div className='second-content-container'>
                <div className="content-solution">
                    <img src="https://institute.e2ehiring.com/content/images/e2eHiringIcon.svg" className='e2e-logo' alt="err 404" />
                    <p className='para'>OUR SOLUTION</p>
                </div>
                <div className="description">
                    <p>e2eHiring platform enables the faculty of your institute to track the progress of their students through their placement journey. It provides a wide range of features that are well suited for your institute needs.</p>
                </div>
                {/* <-------------------------------------Card Collection-------------------------------------> */}
                <Card />
            </div>


        </>
    )
}

export default SecondContent