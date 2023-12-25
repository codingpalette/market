

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="relative min-h-screen">
        {children}
      </div>
    </>
  )
}
