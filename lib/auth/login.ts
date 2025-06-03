import jwt from "jsonwebtoken";
import { prisma } from '@/lib/prisma'
import argon2 from "argon2";
import { setAuthCookie } from '@/lib/helpers/cookies';

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
export interface UserInput {
  username: string
  password: string
}

export async function loginUser(input: UserInput) {
    
  const { username, password } = input
    const userData = await prisma.users.findUnique({
    select: {
      id: true,
      password: true
    },
    where: {
      username: username
    }
  })
  
 if (!userData || !userData.password || !userData.id) {
    throw "Invalid username or password";
  }
  
    const isValid = await argon2.verify(userData.password, password);
    if(!isValid)
        throw 'invalid username and password'
  
    const token = jwt.sign(
        { id: userData.id, username: username },
        JWT_SECRET,
        { expiresIn: "1h" }
    );
    
  await setAuthCookie(token)
  return token;
}