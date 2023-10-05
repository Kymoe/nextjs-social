
'use client';
import { useSession } from 'next-auth/react';
import React from 'react'

export default function UserProfile() {
    const { data: session, status } = useSession();
    
    async function handleSubmit(e){
         e.preventDefault();
         const formData=new FormData(e.target);
         const body={
             name:formData.get('name'),
             bio:formData.get('bio'),
         };
         
        const res= await fetch('/api/user',{
           method:'PUT',
           body:JSON.stringify(body),
           headers:{
             'Content-Type':'application/json',
           },

         });
         await res.json();
    }
      if(status==='loading') return null
    
      const user = session.user;
  return (
    <div className="max-w-lg mx-auto shadow p-3 mt-16 border">
      <h2>Update your profile</h2>
      <form onSubmit={handleSubmit} className="mt-3 space-y-3">
        <div>
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border px-2 py-1"
            type="text"
            id="name"
            name="name"
            defaultValue={user?.name ?? ""}
          />
        </div>
        <div>
          <label className="block" htmlFor="bio">
            Bio
          </label>
          <textarea
            className="border w-full row-5"
            id="bio"
            name="bio"
            defaultValue={user?.bio ?? ""}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
