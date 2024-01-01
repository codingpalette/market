import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // console.log('middleware')

  // return NextResponse.next()
}



export const config = {


  matcher: ['/', '/:path*']
}
