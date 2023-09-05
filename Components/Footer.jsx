"use client"
import React from "react"

function foot() {
    return(
        <footer>
            <div className="left">
                <h3>todoList</h3>
                <p>Join millions of people who organize work and life with Todoist.</p>
            </div>
            <div className="right">
                <div>
                    <ul>
                        <li className="list-header">Features</li>
                        <li>How It Works</li>
                        <li>For Teams</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="list-header">Resources</li>
                        <li>Download Apps</li>
                        <li>Help Center</li>
                        <li>Productivity Methods</li>
                        <li>Integrations</li>
                        <li>Channel Partners</li>
                        <li>Developer API</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="list-header">Company</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Inspiration Hub</li>
                        <li>Press</li>
                        <li>Twist</li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li>
                            <img src="https://www.svgrepo.com/show/506685/twitter.svg" alt="" />
                        </li>
                        <li>
                            <img src="https://www.svgrepo.com/show/513089/youtube-168.svg" alt="" />
                        </li>
                        <li>
                            <img src="https://www.svgrepo.com/show/503338/facebook.svg" alt="" />
                        </li>
                        <li>
                            <img src="https://www.svgrepo.com/show/504487/instagram.svg" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default foot;