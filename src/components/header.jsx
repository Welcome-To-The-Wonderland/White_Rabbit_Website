import React from "react"
import styles from './header.css'
export default function Header() {
    return (
        <div className="testContainer">
            <h1>MANGA WAVE</h1>
            <p>
                The best platform for reading manga without ads
            </p>
            <img src="/logo.svg" alt="Logo"/>
            <p>Created by Ashhad Jaffer and Rounaq Khan</p>
            <img src="https://pbs.twimg.com/media/E0MD7NbWUAQe0G-.jpg" alt="Gojo Satoru" style={{ display: 'block', margin: '0 auto' }} />
        </div>
    )
}

