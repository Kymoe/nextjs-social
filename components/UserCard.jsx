import Link from 'next/link';
import React from 'react'

export default function UserCard({user}) {
    const{id,name,age,image}=user;
  return (
    <article className="w-32 shadow rounded p-2">
      <img src={image} alt={name} className="w-full aspect-square" />
      <div className='mt-3'>
        <Link href={`/users/${id}`}>
          <h3>{name}</h3>
        </Link>

        <p>{age}</p>
      </div>
    </article>
  );
}
