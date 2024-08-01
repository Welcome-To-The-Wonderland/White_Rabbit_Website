'use client'
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation'

interface MangaInfo {
  title : string;
  cover : string;
  chapters : Chapter[];
}

interface MangaData {
  [key: string]: MangaInfo;
}

interface Chapter {
  number: number;
  images: string[];
  uid : string
}

export default function Manga() {
  const manga: MangaData = require("./../../../manga.json");
  const pathname = usePathname();
  let splitPath = pathname.split('/');
  console.log(splitPath);
  let out = splitPath[splitPath.length - 1];

  // Find the manga that matches the 'out' variable
  const mangaInfo = manga[out];

  useEffect(() => {
    const sendMangaInfo = async () => {
      try {
        const response = await fetch('https://utkfcob983.execute-api.us-east-2.amazonaws.com/dev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 'unique-id': out })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Response:', data);
      } catch (error) {
        console.error('Error sending manga info:', error);
      }
    };

    sendMangaInfo();
  }, [out]);

  return (
    <div>
      <h1>Manga info</h1>
      <h1>here: {out}</h1>

      <h1>Title: {mangaInfo.title}</h1>

      {mangaInfo && (
        <div>
          <h2>Chapters</h2>
          <ul>
            {mangaInfo.chapters.map((chapter, index) => (
              <li key={index}>{JSON.stringify(chapter)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}