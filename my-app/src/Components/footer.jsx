import React from "react";
import "./footer.css"



const footer = () => {
    return (
        <div className="Main_footer">
        <h1> E-commerce dashboard   </h1>
        <div className="footer"> 
            <div className="subfooter">
                <ul className="footer_ul">
                    <p> Home </p>
                    <p>About us</p>
                    <p>Contact</p>
                </ul>
            </div>
            <div className="subfooter">
                <ul>
                    <p>Profile  </p>
                    <p>Footer this</p>
                    <p>Calling</p>
                </ul>
            </div>
            <div className="subfooter">
                <ul>
                    <p>Handle this</p>
                    <p>Input this</p>
                    <p>Sign this</p>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default footer;