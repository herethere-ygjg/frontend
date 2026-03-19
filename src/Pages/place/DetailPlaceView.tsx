import { useParams } from "react-router-dom";
import DefaultMain from "../../components/layout/DafultMain";
import { useState } from "react";
import IconBtn from "../../components/btn/IconBtn";
import type { PlaceType } from "../../types/FolderTypes";
import { img } from "../../assets/img";
import Rating from "./Rating";
import CategorySearchInput from "../../components/input/CategorySearchInput";

const DetailPlaceView = () => {
  const param = useParams();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("미분당");
  const [placeData, setPlaceData] = useState<PlaceType | null>({
    id: 1,
    name: "미분당",
    category: ["데이트", "바닐라라떼"],
    content: "5분거리, 쌀국수 맛남",
    rating: 3.5,
    image_url: img.folderTestImg,
    place: "서울 구로구 333동"

  });

  const [folderList , setFolderList] = useState(["폴더 1", "폴더 2", "폴더 3" ]);
  const [categoryList , setCategoryList] = useState(["카페", "레스토랑", "공원", "도서관","박물관", "쇼핑몰", "병원", "헬스장",]);

  // 함수 ==========================
  const handleUpdateCancel = () => {
    // TODO: 업데이트를 종료하겟습니까? 모달 제작 후 나갈때 추가 예정
  }


  return (
    <DefaultMain title={title} isTitleCenter isBack={!isUpdate} rightSlot={isUpdate && <IconBtn iconType="close" onClick={() => { setIsUpdate(false) }} />}>
      <div className="p-5 flex flex-col">
        {!isUpdate && <button className="block text-[0.7rem] text-[#878787] text-end" onClick={() => { setIsUpdate(true) }}>수정</button>}

        <div className="flex flex-col gap-10">
          {/* 장소 */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-[0.9rem]">장소</h3>
            {isUpdate && <p className="text-[0.7rem] text-[#696969]">장소를 수정하고 싶으시면, 삭제 후 새로 장소를 등록해주세요</p>}
            <span className="mt-3 flex gap-5">
              <img src={placeData?.image_url} alt={title} width={isUpdate ? 73 : 110} height={isUpdate ? 60 : 110} className="object-cover rounded-sm" />

              <span className="flex-1">
                <h4 className="text-[1.1rem]">{placeData?.name}</h4>
                <p className="mt-1 text-[0.9rem] text-[#696969]">{placeData?.place}</p>
                {!isUpdate &&
                  <div className="mt-4 flex gap-2 text-sm text-gray-400 flex-wrap">
                    {placeData?.category.map((item) => (
                      <span key={item}>#{item}</span>
                    ))}
                  </div>
                }
              </span>
            </span>
          </div>
          {
            isUpdate &&
            <>
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
            </>
          }

          {/* 메모 */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-[0.9rem]">메모</h3>
            {isUpdate ? <textarea placeholder={placeData?.content ?? "기록할 내용을 입력해주세요"} className="mt-2 w-full p-2 h-[5rem] flex items-center rounded-md border border-gray-200 bg-white text-[0.85rem]"></textarea> :
              <p className="mt-2 text-[0.85rem] text-[#434343]">{placeData?.content}</p>
            }
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

export default DetailPlaceView;