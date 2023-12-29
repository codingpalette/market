import {ToastMessageType, ToastPosition} from "@/types/toastType";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import useToastStore from "@/stores/toastStore";
import {useEffect} from "react";


interface ToastProps {
  message: string
  type: ToastMessageType
  id: string
  timeOut?: number
}

const toastTypeClasses = {
  success: 'bg-neutral-950',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
}

const positionClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
}

/**
 * @param {string} message - toast 메세지
 * @param {ToastMessageType} type - toast 타입
 * @param {string} id - toast id
 * @param {number} timeOut - toast timeout
 * @param {'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'} position - toast 위치
 * */
export default function Toast({message, type, id, timeOut = 5000}: ToastProps) {

  const { delToast } = useToastStore();

  const toastClasses = `
    flex p-4 min-w-[150px] rounded-md justify-between items-center gap-4 border border-neutral-800
    mt-4 mb-4 text-sm
    ${toastTypeClasses[type]}
  `

  // 타입 아웃 시간이 지나면 토스트 삭제
  useEffect(() => {
    const timer = setTimeout(() => {
      delToast({id: id});
    }, timeOut);

    return () => clearTimeout(timer);
  }, [id, timeOut, delToast]);

  return (
    <>
      <div className={toastClasses}>
        <span>
          {message}
        </span>
        <FontAwesomeIcon icon={faXmark} className="cursor-pointer" onClick={() => delToast({id: id})} />
      </div>
    </>
  )
}
