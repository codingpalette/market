import Header from "@/app/_components/organisms/Header";
import { auth } from '@/auth';


export default async function MainLayout({children}: {children: React.ReactNode}) {
  const session = await auth();
  console.log(session);
  return (
    <>
      <div className="relative min-h-screen">
        <Header/>
        {children}
      </div>
    </>
  )
}
