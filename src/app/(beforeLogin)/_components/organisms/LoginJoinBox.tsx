

interface LoginJoinBoxProps {
  children?: React.ReactNode
  title?: string
}

export default function LoginJoinBox({children, title}: LoginJoinBoxProps) {
  return (
    <>
      <div className="mt-28 flex items-center flex-col px-4 lg:mt-40">
        <h1 className="font-bold text-4xl">{title}</h1>
        <div style={{maxWidth: '400px'}} className="w-full">
          {children}
        </div>
      </div>
    </>
  )
}
