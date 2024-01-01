import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { auth } from "@/auth"

export async function middleware(request: NextRequest) {
  // console.log('middleware')
  // const session = await auth();
  // console.log('middleware session', session)

  // return NextResponse.next()
}



export const config = {


  matcher: ['/', '/:path*']
}
