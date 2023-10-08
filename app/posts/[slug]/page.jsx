import { prisma } from '@/lib/prisma';
import React from 'react'
 //export const revalidate=60;
export default async function PostDetail({params}) {
   

       const post=await prisma.post.findUnique({
         where:{
           slug:params.slug,
         }
       })
      // console.log({post})

  return (
    <section>
        <article className='max-w-3xl mx-auto border rounded mt-6 p-4'>
            <h3 className='font-semibold texl-xl'>{post.title}</h3>
            <p className='mt-2'>{post.body}</p>
        </article>
    </section>
  )
}
