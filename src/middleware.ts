import {NextRequest} from "next/server";

// export {auth as middleware} from './auth';

export async function middleware(req: NextRequest) {

}



export const config = {


  matcher: ['/', '/:path*']
}
