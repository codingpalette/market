import { create } from 'zustand';
import {ToastMessageType, ToastPosition} from "@/types/toastType";
import uuid from 'react-uuid';


interface useToastStoreType {
  toastList: {
    type: ToastMessageType;
    message: string;
    id: string;
    position?: ToastPosition
  }[];
  addToast: (data: {
    type: ToastMessageType;
    message: string;
    position?: ToastPosition ;
  }) => void;
  delToast: (data: { id: string }) => void;
}

const useToastStore = create<useToastStoreType>((set) => ({
  toastList: [],

  // Add toast, 타입이 success, error, warning, info 중 하나여야 함
  // {type: 'success', message: '성공했습니다.'} 이런 식으로 넣으면 됨
  addToast: (data) => set((state) => {
    // console.log('data', data)
    return {
      toastList: [...state.toastList, {...data, id : uuid()}],
    }
  }),
  delToast: (data) => set((state) => {
    return {
      toastList: state.toastList.filter((item, index) => item.id !== data.id),
    }
  })
}))

export default useToastStore;
