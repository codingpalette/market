import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faImage} from '@fortawesome/free-regular-svg-icons'


interface ImageBoxProps {
  src?: string;
  rounded?: boolean;
  className?: string;
}


/**
 * @param {string} src - 이미지 주소
 * @param {boolean} rounded - 둥근 모서리 여부
 * @param {string} className - 선택적 CSS 클래스 이름
 * */

export default function ImageBox({src, rounded, className}: ImageBoxProps) {

  const imageBoxClasses = `
    flex-1 w-full h-full max-w-[30%] relative bg-white overflow-hidden before:block before:pb-[100%] before:w-full 
    ${rounded ? 'rounded-full' : 'rounded-md'}
    ${className}
  `


  return (
    <>
      <div className={imageBoxClasses}>
        {src ? (
          <>

          </>
        ): (
          <>
            <div className="w-full h-full absolute left-0 top-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faImage} className="text-black" size="3x" />
            </div>
          </>
        )}
      </div>
    </>
  )
}
