import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth';
import React from 'react'
import FollowClient from './FollowClient';

export default async function FollowButton({targetUserId}) {
    const session = await getServerSession(authOptions);
    const currentUsername = session?.user?.name;
   
    const currentUserId = await prisma.user
      .findUnique({
        where: {
          name: currentUsername,
        },
      })
      .then((user) => user.id);

    const isFollowing=await prisma.follows.findFirst({
        where:{
            followerId:currentUserId,
            followingId: targetUserId
        }
    });
  
  return <FollowClient isFollowing={isFollowing} targetUserId={targetUserId}/>
}
