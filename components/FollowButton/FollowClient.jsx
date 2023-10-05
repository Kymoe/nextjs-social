'use client'
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import React from 'react'
import { useTransition } from 'react';

export default function FollowClient({isFollowing,targetUserId}) {
    const router=useRouter();

    const [isFetching,setIsFetching]=useState(false);
    const [isPending,startTransition]=useTransition();
    const isMutating =isFetching|| isPending;

    async function follow(){
        setIsFetching(true);
      const res= await fetch('/api/follow',{
            method:'POST',
            body:JSON.stringify({targetUserId}),
            header:{
                'Content-Type':'application/json',
            }
        });
        setIsFetching(false);
        startTransition(()=>{
             router.refresh();
        });
       
    }
    async function unfollow(){
        setIsFetching(true);
         await fetch(`/api/follow?targetUserId=${targetUserId}`,{
             method:'DELETE',
         })
        setIsFetching(false);
       startTransition(()=>{
             router.refresh();
        });


    }


  if (isFollowing) {
    return(
        <button className='bg-indigo-500 px-2 py-1 hover:bg-indigo-400 text-white' onClick={unfollow}>{isMutating? '...' : 'UnFollow'}</button>
    ) ;
  } else {
    return (
    <button onClick={follow}>{isMutating? '...' : 'Follow'}</button>
    )
  }
}
