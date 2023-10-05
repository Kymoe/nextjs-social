import UserCard from '@/components/UserCard';
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function Users() {
    const users=await prisma.user.findMany();
   // console.log({users})
  return (
   <section>
       <h2 className='mt-3 text-center font-semibold'>Users</h2>
      <div  className='container mx-auto flex flex-wrap justify-center mt-6'>
       {users.map((user)=>(
           <UserCard user={user} key={user.id}/>
       )

       
       )}
      </div>

   </section>
  )
}
