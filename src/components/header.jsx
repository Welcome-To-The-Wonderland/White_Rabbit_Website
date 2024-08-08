import React from "react";
import styles from './header.css';


export default function Header() {
    return (
        <div className="container">
            <ion-icon name="menu-outline"></ion-icon>
            <img className="headerLogo" src="/logo.svg" alt="Logo" /> 
        </div>
    )
}
