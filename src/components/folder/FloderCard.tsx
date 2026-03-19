import { img } from "../../assets/img"
import { Link } from "react-router-dom"
import type { FolderType } from "../../types/FolderTypes"


interface FolderCardProps {
    folder: FolderType
    isShare?: boolean
}

const FolderCard = ({ folder, isShare = false }: FolderCardProps) => {
    return (
        <Link
            to={`/folders/${folder.id}/places`}
            className="relative block w-full h-full rounded-2xl overflow-hidden"
        >

            {/* Background Image */}
            <img
                src={folder.thumbnail_url}
                alt={folder.title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Share Pin */}
            {isShare && (
                <div className="absolute top-0 left-5">
                    <img src={img.sharePin} alt="share" />
                </div>
            )}

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between px-6 pb-2 pt-6 text-white">

                <div>
                    <h3 className="text-[1.2rem] font-semibold">{folder.title}</h3>
                    <p className="text-[0.9rem] opacity-90">{folder.description}</p>

                    <div className="flex gap-2 mt-1 text-[0.7rem] flex-wrap">
                        {folder.category.map((tag) => (
                            <span key={tag}>#{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <p className="text-[0.6rem]">
                        최근 업데이트 : {folder.update_at}
                    </p>

                    <div className="bg-white text-gray-800 px-3 py-0.5 rounded-full text-[0.7rem]">
                        {folder.place_count}곳
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default FolderCard