import React from "react";
import styles from './header.css';


export default function Header() {
    return (
        <div className="container">
            <h1 className="title">MANGA WAVE</h1>
            <p>The best platform for reading manga without ads.</p>
            <ion-icon name="menu-outline"></ion-icon>
            <div className="orientation">
                <img src="/logo.svg" alt="Logo" /> 
            </div>
            <p>Created by Ashhad Jaffer and Rounaq Khan</p>
            <img src="https://pbs.twimg.com/media/E0MD7NbWUAQe0G-.jpg" alt="Gojo Satoru" />
            

        </div>
    )
}
