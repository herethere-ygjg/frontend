import { useLocation } from "react-router-dom";
import DefaultMain from "../../components/layout/DafultMain";
import { useEffect, useState } from "react";
import Rating from "../place/Rating";
import CategorySearchInput from "../../components/input/CategorySearchInput";
import type { PlaceType } from "../../types/FolderTypes";

const AddPlaceView = () => {
  const location = useLocation();
  const [categoryList, setCateogyList] = useState([]);
  const [folderList, setFolderList] = useState([]);
  const [placeData, setPlaceData] = useState<PlaceType | null>(null);

  /// 함수 ==================================
  const getState = () => {
    console.log(location.state);
    const data = location.state;
    setPlaceData({
      name: data?.place_name ?? "",
      category: [],
      content: "",
      rating: 0,
      image_url: "",
      place: data?.address_name ?? ""
    })
}

useEffect(() => { getState(); }, [])


return (
  <DefaultMain title="추가">
    <div className="p-5">
      <div className="flex flex-col gap-10">
        {/* 장소 */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[0.9rem]">장소</h3>
          <p className="text-[0.7rem] text-[#696969]">장소를 등록한 후 수정이 장소 수정은 불가능합니다.</p>
          <span className="mt-3 flex gap-5">
            <img src={placeData?.image_url} alt={""} width={110} height={110} className="object-cover rounded-sm" />

            <span className="flex-1">
              <h4 className="text-[1.1rem]">{placeData?.name}</h4>
              <p className="mt-1 text-[0.9rem] text-[#696969]">{placeData?.place}</p>
            </span>
          </span>
        </div>

        {/* 폴더 */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[0.9rem]">폴더</h3>

          <div className="mt-2">
            <CategorySearchInput
              isSearch={false}
              placeholder="저장할 폴더를 선택해주세요"
              categories={folderList} />
          </div>
        </div>

        {/* 카테고리 */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[0.9rem]">카테고리</h3>

          <div className="mt-2">
            <CategorySearchInput categories={categoryList} />
          </div>
        </div>

        {/* 메모 */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[0.9rem]">메모</h3>
          <textarea placeholder={"기록할 내용을 입력해주세요"} className="mt-2 w-full p-2 h-[5rem] flex items-center rounded-md border border-gray-200 bg-white text-[0.85rem]"></textarea>
        </div>
        {/* 별점 */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[0.9rem]">별점</h3>

          <div className="mt-2">
            <Rating value={placeData?.rating} size={20} onChange={() => { }} />
          </div>
        </div>
      </div>


    </div>
  </DefaultMain>
)
}

export default AddPlaceView;