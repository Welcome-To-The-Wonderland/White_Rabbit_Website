'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://utkfcob983.execute-api.us-east-2.amazonaws.com/dev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "unique-id": "alpha_numeric_id_2" }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Look at me</h1>
      <Link href={{
        pathname: `/manga/manga-ny991307`,
      }}> some link
      </Link>

      {error && <p>Error: {error}</p>}

      <div className="grid">
        {data.map((manga: any) => {
          return (
            <div key={manga.id} className="card">
              <Link href={{
                pathname: `/manga/${manga.id}`,
              }}>
                <img src={manga.cover_link} alt={manga.title} />
                <h3>{manga.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}