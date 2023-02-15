// import React from 'react'
import "./style.scss";
import SecondContent from "./SecondContent";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="content-description">
                    <p className="heading-1">
                        Helping <span style={{ color: "#de373a" }}>great minds</span> to
                        connect with
                    </p>
                    <p className="heading-2">
                        DISTINGUISHED BRANDS{" "}
                        <span
                            style={{
                                color: "#de373a",
                                marginTop: "50px",
                                boxSizing: "border-box",
                            }}
                        >
                            GLOBALLY
                        </span>
                    </p>
                </div>
                <div className="btn-container">
                    <button className="register-now-btn">Register Now</button>
                </div>
            </div>
            <SecondContent />


        </>
    );
};

export default Home;
