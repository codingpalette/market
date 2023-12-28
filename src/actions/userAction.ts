'use server'
import {NextResponse, NextRequest} from 'next/server';
import {sql} from '@vercel/postgres';
import { revalidatePath } from "next/cache"

export async function loginAction() {
  console.log('2233333322')
  // const conn = await connectDb();
  // const [rows] = await conn.execute('SELECT * FROM User');
  // console.log(rows)

  try {
    // const client = await db.connect();
    // const result = await client.sql`SELECT * FROM users`;
    // console.log('result', result.rows)
    const result = await sql`SELECT * FROM users`;
    const result2 = NextResponse.json( result.rows, {status: 201})
    console.log('result2', result2)
  } catch (e: any) {
    console.log(e.message)
    // return NextResponse.json({error: e.message}, {status: 500})
  }

}


export async function gerUsers() {
  try {

    // 유저 리스트 가져오기
    const result = await sql`SELECT * FROM users`;
    return NextResponse.json({result}, {status: 200}).json()

  } catch (e: any) {
    console.log(e.message)
    // return NextResponse.json({error: e.message}, {status: 500})
  }
}

export async function userCreate(formData: any) {
  console.log('formData', formData)
  return NextResponse.json({formData}, {status: 200}).json()
  try {
    // 유저 생성
    const result = await sql`
      INSERT INTO users (login_id, password) VALUES (${formData.get('user_nickname')}, '1234') 
    `;
    revalidatePath('/')
    return NextResponse.json({result}, {status: 200}).json()

  } catch (e: any) {
    console.log(e.message)
    // return NextResponse.json({error: e.message}, {status: 500})
  }

}
