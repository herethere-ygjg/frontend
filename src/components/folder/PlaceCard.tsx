import { Star } from "lucide-react"
import type { PlaceType } from "../../types/FolderTypes"
import { Link } from "react-router-dom"


interface PlaceCardProps {
  place: PlaceType
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <Link to={`/places/${place.id}`} className="block w-full bg-white rounded-2xl border border-[#adadad] py-5 px-7 flex flex-col gap-4">

      {/* 상단 정보 */}
      <div className="flex justify-between items-start">

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-[1.2rem] font-semibold ">{place.name}</h3>

            <div className="flex gap-2 text-sm text-gray-400 flex-wrap">
              {place.category.map((item) => (
                <span key={item}>#{item}</span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {place.content}
          </p>
        </div>

        {/* 평점 */}
        <div className="flex items-center gap-1">
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <span className="font-semibold">{place.rating}</span>
        </div>

      </div>

      {/* 이미지 */}
      <div className="w-full h-[120px] rounded-xl overflow-hidden">
        <img
          src={place.image_url}
          alt={place.name}
          className="w-full h-full object-cover"
        />
      </div>

    </Link>
  )
}

export default PlaceCard