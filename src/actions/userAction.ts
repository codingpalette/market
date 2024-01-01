'use server'
import {NextResponse, NextRequest, } from 'next/server';
import {sql} from '@vercel/postgres';
import * as bcrypt from 'bcrypt'
import { revalidatePath } from "next/cache"
import {isValidPassword} from "@/util/stringFormat";

interface ResultType {
  message: string;
  status: number;
  data: any;
}

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
  try {
    const result = {
      message: '',
      status: 200,
      data: null
    }
    // 유저 아이디 중복 체크
    const isUser = await sql`SELECT * FROM users WHERE login_id = ${formData.get('login_id')}`;
    if (isUser.rows.length > 0) {
      result.message = '이미 사용중인 아이디입니다.';
      result.status = 500;
      return NextResponse.json(result, {status: 500}).json()
    }
    // 유저 닉네임 중복 체크
    const isNickname = await sql`SELECT * FROM users WHERE user_nickname = ${formData.get('user_nickname')}`;
    if (isNickname.rows.length > 0) {
      result.message = '이미 사용중인 닉네임입니다.';
      result.status = 500;
      return NextResponse.json(result, {status: 500}).json()
    }
    if (!isValidPassword(formData.get('password'))) {
      result.message = '비밀번호 에러 입니다.';
      result.status = 500;
      return NextResponse.json(result, {status: 500}).json()
    }
    // 비밀번호 암호화
    const hashPassword = await bcrypt.hash(formData.get('password'), 12);
    // 유저 생성
    await sql`
      INSERT INTO users (login_id, password, user_nickname) VALUES (${formData.get('login_id')}, ${hashPassword}, ${formData.get('user_nickname')})
    `;
    revalidatePath('/')
    result.message = '회원가입이 완료되었습니다.';
    return NextResponse.json(result, {status: 200}).json()
  } catch (e: any) {
    throw new Error(e.message)
  }
}

export async function getUser(formData: any) {
  try {
    const result: ResultType = {
      message: '',
      status: 200,
      data: null
    }
    // 유저 아이디 체크
    const isUser = await sql`SELECT * FROM users WHERE login_id = ${formData.login_id}`;
    if (isUser.rows.length === 0) {
      result.message = '아이디가 존재하지 않습니다.';
      result.status = 500;
      return NextResponse.json(result, {status: 500}).json()
    }
    // 비밀번호 체크
    const isPassword = await bcrypt.compare(formData.password, isUser.rows[0].password);
    if (!isPassword) {
      result.message = '비밀번호가 일치하지 않습니다.';
      result.status = 500;
      return NextResponse.json(result, {status: 500}).json()
    }
    result.message = '로그인이 완료되었습니다.';
    result.data = isUser.rows[0];
    return NextResponse.json(result, {status: 200}).json()
  } catch (e: any) {
    throw new Error(e.message)
  }
}
