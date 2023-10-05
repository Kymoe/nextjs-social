import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req){
   const session=await getServerSession(authOptions);
   const currentUsername=session?.user?.name;

   const currentUserId=await prisma.user.findUnique({
     where:{
       name:currentUsername,
     }
   }).then(user=>user.id)

   const{targetUserId}=await req.json();
   const record= await prisma.follows.create({
     data:{
       followerId:currentUserId,
       followingId:targetUserId,
     },
   });

   return NextResponse.json(record);
    
}

export async function DELETE(req){
     const session = await getServerSession(authOptions);
      const currentUsername= session?.user?.name;
       

       const targetUserId = req.nextUrl.searchParams.get("targetUserId");
     const currentUserId = await prisma.user
       .findUnique({
         where: {
           name: currentUsername,
         },
       })
       .then((user) => user.id);
    
    const record=await prisma.follows.delete({
      where: {
        followerId_followingId: {
          followerId: currentUserId,
          followingId: targetUserId,
        },
      },
    });
    return NextResponse.json(record);

}