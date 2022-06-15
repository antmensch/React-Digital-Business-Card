import React from "react";
import mailIcon from "../img/mail-icon.svg";
import linkedIcon from "../img/linkedin-icon.svg"

export default function Header() {
    return (
        <header>
            <h1 className="header-name">Louisa Stock</h1>
            <h3 className="header-profession">Frontend Engineer</h3>
            <a href="#" className="header-website">louisastock.website</a>
            <div className="buttonsContainer">
                <a href="#" className="button"><img className="button-icon" src={mailIcon} />Email</a>
                <a href="#" className="button blue"><img className="button-icon" src={linkedIcon} />LinkedIn</a>
            </div>
        </header>
    );
    }