import { Folder } from "lucide-react"

const CreateFolderCard = () => {
  return (
    <div className="bg-green-700 text-white rounded-xl p-5">

      <div className="flex justify-between items-start">
        <div>
          <p className="text-lg font-semibold">
            나만의 공간을 만들어볼까요?
          </p>

          <p className="text-sm opacity-80">
            다른 친구와 함께 작성해보아요
          </p>
        </div>

        <Folder size={28} />
      </div>

      <button className="mt-4 w-full bg-white text-green-700 py-2 rounded-lg font-medium">
        새 파일 만들기
      </button>

    </div>
  )
}

export default CreateFolderCard