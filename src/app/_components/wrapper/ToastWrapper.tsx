'use client';

import useToastStore from "@/stores/toastStore";
import Toast from "@/app/_components/atoms/Toast";

const positionStyles = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
};



export default function ToastWrapper() {

  const { toastList } = useToastStore();

  return (
    <>
      {Object.entries(positionStyles).map(([position, positionClass]) => (
        <div key={position} className={`fixed z-50 ${positionClass}`}>
          {toastList.filter(toast => toast.position === position).map(toast => (
            <div key={toast.id} className="toast mb-2">
              <Toast message={toast.message} type={toast.type} id={toast.id}  />
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
