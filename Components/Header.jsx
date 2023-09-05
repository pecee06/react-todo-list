"use client"
import React from "react"

function header() {
    return(
        <nav>
            <div className="logo">
                <span>logoList</span>
            </div>
            <div className="right">
                <div className="tabs">
                    <a href="#">Features</a>
                    <a href="#">Templates</a>
                    <a href="#">ForTeams</a>
                    <a href="#">Resources</a>
                    <a href="#">Pricing</a>
                </div>
                <div className="buttons">
                    <button>Log in</button>
                    <button className="btn">Start for free</button>
                </div>
            </div>
        </nav>
    )
}

export default header;