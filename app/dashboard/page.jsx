import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import UserProfile from './UserProfile';
import {redirect} from 'next/navigation'


export default async function UserDashboard() {
    const session =await getServerSession(authOptions);
    if(!session){
        redirect('/api/auth/signin')
    }
  return (
   <section>
       <div className="container mx-auto">
           <UserProfile/>
       </div>
   </section>
  )
}
