import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';


interface PostCardProps {
  imageUrl?: string
}

/**
 * @param {string} imageUrl - 이미지 URL
 * */

export default function PostCard({imageUrl}: PostCardProps) {
  return (
    <>
      <div className="bg-neutral-950 border border-neutral-800 rounded-md hover:bg-neutral-900">
        <div className="w-full aspect-video relative">
          {imageUrl ? (
            <div className="absolute left-0 top-0 w-full h-full">
              <img src={imageUrl} alt="" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FontAwesomeIcon icon={faImage} size="4x" className="text-white"/>
            </div>
          )}
        </div>
        <div className="p-4">
          <div>
            <h4 className="font-bold text-lg mb-1 truncate">title</h4>
            <div>
              <p className="text-sm line-clamp-3">
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias aliquid amet
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias aliquid amet

              </p>
            </div>
          </div>
        </div>
        <div>
          2
        </div>
      </div>
    </>
  )
}
