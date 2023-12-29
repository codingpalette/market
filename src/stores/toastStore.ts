import { create } from 'zustand';

interface useToastStoreType {
  toastList: { type: string; message: string }[];
  addToast: (toast: { type: string; message: string }) => void;

}

const useToastStore = create<useToastStoreType>((set) => ({
  toastList: [],

  // Add toast, 타입이 success, error, warning, info 중 하나여야 함
  // {type: 'success', message: '성공했습니다.'} 이런 식으로 넣으면 됨
  addToast: (toast) => set((state) => ({ toastList: [...state.toastList, toast] })),
}))

export default useToastStore;
