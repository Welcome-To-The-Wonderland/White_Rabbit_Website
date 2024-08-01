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
            "unique-id": "alpha_numeric_id_2"
          })
        });

        //error handling network status
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data); // Log the response data AKA fetched data

        // Parse the body field
        const parsedBody = JSON.parse(data.body);

        // Extract manga data 
        const mangaItems = Object.keys(parsedBody).map(key => {
          if (parsedBody[key].title) {
            //right now, it's only grabbing the cover title and cover link
            return {
              id: key,
              title: parsedBody[key].title,
              cover_link: parsedBody[key].cover_link
            };
          }
          return null;
        }).filter(item => item !== null);

        setMangaData(mangaItems);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(`Error fetching data: ${err.message}`);
          console.error('Error details:', err);
        } else {
          setError('An unknown error occurred');
        }
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