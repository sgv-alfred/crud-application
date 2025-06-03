'use server'

import { NextRequest, NextResponse } from "next/server";

import { prisma } from '@/lib/prisma'

/**
 * 
 * @returns {
        "id": 2,
        "Name": "test",
        "Quantity": 1,
        "Description": "test",
        "Price": "0",
        "createdBy": 1,
        "username": "username"
    },
 */

export async function POST(req: NextRequest) {
  const  body  = await req.json()
  const {status} = body
  const data = await prisma.$queryRaw`
  SELECT p.id, p.Name, p.Quantity, p.Description, p.Price, u.username
  FROM products p
  JOIN users u ON p.createdBy = u.id
  WHERE u.id = 1 and status = ${status}
`;

  return NextResponse.json(data);
}