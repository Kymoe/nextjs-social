import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req){
     const session = await getServerSession(authOptions);
      const currentUsername=session?.user?.name;
      //request object data from client
      const data= await req.json();

    const user= await prisma.user.update({
        where:{
            name:currentUsername,

        },
        data,
    })
    return NextResponse.json(user);

}