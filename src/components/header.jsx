import React from "react"

export default function Header() {
    return (
        <div style={{ backgroundColor: '#d3d3d3', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontFamily: 'Arial, sans-serif' }}>MANGA WAVE</h1>
            <p style={{ fontFamily: 'Georgia, serif' }}>
                The best platform for reading manga without ads, all the manga you need to cater to your weebish and perverted desires
            </p>
            <img src="/logo_colored.jpg" alt="Logo" />
            <p style={{ fontFamily: 'Courier New, monospace' }}>Created by Ashhad Jaffer and Rounaq Khan</p>
            <img src="https://pbs.twimg.com/media/E0MD7NbWUAQe0G-.jpg" alt="Gojo Satoru" style={{ display: 'block', margin: '0 auto' }} />
        </div>
    )
}

