import React from "react";
import githubIcon from "../img/github-icon.svg";
import fbIcon from "../img/fb-icon.svg";
import twitterIcon from "../img/twitter-icon.svg";
import instaIcon from "../img/insta-icon.svg"


export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-container">
                <a className="social-link" href="#"><img className="social-icon" src={twitterIcon} /></a>
                <a className="social-link" href="#"><img className="social-icon" src={fbIcon} /></a>
                <a className="social-link" href="#"><img className="social-icon" src={instaIcon} /></a>
                <a className="social-link" href="#"><img className="social-icon" src={githubIcon} /></a>
            </div>
        </footer>
    )
}