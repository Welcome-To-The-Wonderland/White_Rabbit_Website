import React from 'react';
import Link from 'next/link';

export default function Logout (){
    return (
        <div>
            <h1>Now Logged Out </h1>
            <Link href={{
                pathname: `/`
            }}>
                <p>return home</p>
            </Link>
        </div>
        
    )
}