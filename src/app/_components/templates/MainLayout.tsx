import Header from "@/app/_components/organisms/Header";


export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="relative min-h-screen">
        <Header/>
        {children}
      </div>
    </>
  )
}
