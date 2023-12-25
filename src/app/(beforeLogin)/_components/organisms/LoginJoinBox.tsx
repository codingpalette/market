

interface LoginJoinBoxProps {
  children?: React.ReactNode
  title?: string
}

export default function LoginJoinBox({children, title}: LoginJoinBoxProps) {
  return (
    <>
      <div className="mt-40 flex items-center flex-col">
        <h1 className="font-bold text-4xl">{title}</h1>
        <div style={{maxWidth: '400px'}} className="w-full">
          {children}
        </div>
      </div>

    </>
  )
}
