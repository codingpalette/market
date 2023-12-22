import Button from "@/app/_components/atoms/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";


interface ModalRenderHeaderProps {
  modalClose: () => void;
  title?: string;
  header?: React.ReactNode;
}


/**
 * @param {() => void} modalClose - 모달 닫기 이벤트 핸들러
 * @param {string} title - 모달 제목
 * @param {React.ReactNode} header - 헤더 커스텀 렌더링
 * */
export default function ModalRenderHeader({modalClose, title, header}: ModalRenderHeaderProps) {

  if (!header) {
    return (
      <>
        <header className="flex justify-between items-start gap-2 p-3">
          <h3 className="font-bold break-words w-full max-w-[80%]">{title}</h3>
          <div className="">
            <Button onClick={modalClose} size="small">
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>
        </header>
        <div className="h-px w-full bg-neutral-800"></div>
      </>
    )
  }
  return (
    <>{header}</>
  )


}
