'use client'
import data from '../manga.json';
import './home.css'
import Link from 'next/link'

//run command: npm run dev

import Header from '../components/header'

export default function Home() {
  let x = "manga-ny991307";

  return (
    <div>
      
      <Header/>
      <Link href = {{
        pathname: `/manga/${x}`,
      }}> some link
      </Link>

      <div className="grid">
        {Object.entries(data).map(([key, manga]: [string, any]) => {
          return (
            <div key={key} className="card">
              <Link href = {{
                pathname: `/manga/${key}`,
              }}> 
              <img src={manga.cover_link} alt={manga.title} />
              <h3>{manga.title}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}