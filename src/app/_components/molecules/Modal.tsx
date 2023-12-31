'use client'

import useKeyEscClose from "@/hooks/useKeyEscClose";
import Button from "@/app/_components/atoms/Button";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ModalRenderHeader from "@/app/_components/atoms/ModalRenderHeader";
import ModalRenderFooter from "@/app/_components/atoms/ModalRenderFooter";

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  title?: string;
  maskClose?: boolean;
  keyboardClose?: boolean;
  headerRender?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  footerRender?: boolean;
  onOk?: () => void;
  okText?: string;
  okRender?: boolean;
}


const sizeClasses = {
  sm: 'max-w-[350px]',
  md: 'max-w-[500px]',
  lg: 'max-w-[800px]',
  full: 'max-w-full',
}


/**
 * @param {boolean} open - 모달 오픈 여부
 * @param {() => void} onClose - 모달 닫기 이벤트 핸들러
 * @param {React.ReactNode} children - 모달 내부에 들어갈 내용
 * @param {'sm' | 'md' | 'lg' | 'full'} size - 모달 크기 옵션
 * @param {string} title - 모달 제목
 * @param {boolean} maskClose - 모달 바깥 영역 클릭시 닫기
 * @param {boolean} keyboardClose - ESC 키 클릭시 닫기
 * @param {boolean} headerRender - 헤더 렌더링 여부
 * @param {React.ReactNode} header - 헤더 커스텀 렌더링
 * @param {React.ReactNode} footer - 푸터 커스텀 렌더링
 * @param {boolean} footerRender - 푸터 렌더링 여부
 * */
export default function Modal({open, onClose, size = 'md', children, title, maskClose = true, keyboardClose = true, headerRender = true, header, footerRender = true, footer, onOk, okText = "확인", okRender }: ModalProps) {


  const modalContentClasses = `
    relative z-20 p-2 w-full
    ${sizeClasses[size]}
  `

  function modalClose() {
    console.log('22222222')
    if (onClose) {
      onClose();
    }
  }

  // esc 버튼 누를시 모달 닫기
  const handleKeyPress = () => {
    if (keyboardClose) {
      if (onClose) {
        onClose();
      }
    }
  }
  useKeyEscClose(handleKeyPress)


  if (!open) {
    return null;
  }

  return (
    <>
      <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center">
        <div className={modalContentClasses}>
          <section className="border border-neutral-800 rounded-md bg-neutral-950">
            {headerRender && (
              <>
                <ModalRenderHeader modalClose={modalClose} title={title} header={header} />
              </>
            )}
            <div className=" max-h-[80vh] overflow-y-auto p-4">
              {children}
            </div>
            {footerRender && (
              <>
                <ModalRenderFooter modalClose={modalClose} footer={footer} okRender={okRender} okText={okText} onOk={onOk} />
              </>
            )}

          </section>
        </div>
        <div className="absolute left-0 top-0 z-10 w-full h-full bg-black opacity-60" onClick={maskClose ? modalClose : undefined}></div>
      </div>
    </>
  )

}
