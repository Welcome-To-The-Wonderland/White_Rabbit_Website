import React from 'react'
import Link from 'next/link';

export default function LoginSucces (){
    
    return(
        <div>
            <h1>Login Success!</h1>   
            <Link href={{
                pathname: `/logout`
            }}>
                <p>Logout</p>
            </Link>

        </div>
    )
}