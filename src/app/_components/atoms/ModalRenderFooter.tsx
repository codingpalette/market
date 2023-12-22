import Button from "@/app/_components/atoms/Button";


interface ModalRenderFooterProps {
  modalClose: () => void;
  footer?: React.ReactNode;
  onOk?: () => void;
  okText?: string;
}


/**
 * @param {() => void} modalClose - 모달 닫기 이벤트 핸들러
 * @param {React.ReactNode} footer - 푸터 커스텀 렌더링
 * @param {() => void} onOk - 확인 버튼 클릭 이벤트 핸들러
 * @param {string} okText - 확인 버튼 텍스트
 * */

export default function ModalRenderFooter({modalClose, footer, onOk, okText = '확인'}: ModalRenderFooterProps) {

  if (!footer) {
    return (
      <>
        <div className="h-px w-full bg-neutral-800"></div>
        <footer className="flex justify-end items-center gap-2 p-3">
          <Button onClick={modalClose}>닫기</Button>
          <Button color="primary" onClick={onOk}>{okText}</Button>
        </footer>
      </>
    )
  }
  return (
    <>{footer}</>
  )
}
