
import { CameraIcon } from '@heroicons/react/24/solid'

export default function ImageAddBox() {
  return (
    <>
      <div className="border border-neutral-600 hover:bg-neutral-900 rounded w-14 h-14 flex flex-col gap-2 items-center justify-center">
        <CameraIcon className="w-4 h-4" />
        <p>0/10</p>
      </div>
    </>
  )
}
