'use client'
import { useState, useEffect } from 'react';
import './home.css';
import Link from 'next/link';

//run command: npm run dev

export default function Home() {
  const [mangaData, setMangaData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://utkfcob983.execute-api.us-east-2.amazonaws.com/dev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "manga-ids": [
              "manga-bc979159"
            ]
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMangaData(data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Look at me</h1>
      <Link href={{
        pathname: `/manga/manga-ny991307`,
      }}> some link
      </Link>

      <div className="grid">
        {mangaData.map((manga: any) => {
          return (
            <div key={manga.id} className="card">
              <Link href={{
                pathname: `/manga/${manga.id}`,
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