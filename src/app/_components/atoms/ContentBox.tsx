


export default function ContentBox({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="relative max-w-7xl mx-auto mt-4">
        {children}
      </div>
    </>
  )
}
