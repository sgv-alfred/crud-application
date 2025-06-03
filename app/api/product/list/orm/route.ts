'use server'

import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const  body  = await req.json()
  const {status} = body
  //inner join with specific fields in result
  const data = await prisma.products.findMany({
    select: {
      id: true,
      Name: true,
      Quantity: true,
      Description: true,
      Price: true,
      users: {
        select: {
          username: true,
        },
      },
    },
    where : {
      status: status
    }
  })

//inner join including all the fields in the left table.
//   const data = await prisma.products.findMany({
//   include: {
//       users: { select: {
//         username: true,
//       }}
//   },
// })


  //extra ts code
  const newData = data.map(({ users, ...rest }:{ users: { username: string }}) => ({
    ...rest,
    username: users?.username,
  }));

  return NextResponse.json(newData);
}
