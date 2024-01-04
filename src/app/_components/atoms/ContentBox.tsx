


export default function ContentBox({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="relative max-w-5xl mx-auto mt-4">
        {children}
      </div>
    </>
  )
}
