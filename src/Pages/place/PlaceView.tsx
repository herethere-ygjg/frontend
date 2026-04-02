import { useState } from "react";
import DefaultMain from "../../components/layout/DafultMain";
import { useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../components/btn/IconBtn";
import NotiMsgBox from "../../components/folder/NotiMsgBox";
import PlaceCard from "../../components/folder/PlaceCard";
import type { PlaceType } from "../../types/FolderTypes";
import { img } from "../../assets/img";
import DefaultBtn from "../../components/btn/defaultBtn";
import DelBtn from "../../components/btn/DelBtn";
import BottomSheet from "../../components/modal/BottomSheet";
import { PLACE_ITEMS } from "../../data/PlaceList";

const PlaceView = () => {
  const param = useParams();
  const navigate = useNavigate();
  

  const [isUpdatePlace, setIsUpdatePlace] = useState<boolean>(false); // 폴더 설정 모달창
  const [delPlaceType, setDelPlaceType] = useState<string | null>(null); // 폴더효과속성 (삭제 / 수정)


  const [title, setTitle] = useState("여행일지");
  const [placeList, setPlaceList] = useState<PlaceType[]>(PLACE_ITEMS);



  const typeList: { label: string, onClick: () => void }[] = [
    { label: "폴더 수정", onClick: () => { navigate(`/folders/${param.folderId}`)} },
    { label: "장소 삭제", onClick: () => { setDelPlaceType("delete"); setIsUpdatePlace(false); } }
  ];

  /// 함수 ===================================


  // right slot 컴포넌트
  const ComponentRightSlot = () => {
    return delPlaceType != null ?
      <IconBtn iconType="close" onClick={() => { setDelPlaceType(null) }} /> :
      <>
        <IconBtn iconType="plus" onClick={() => { navigate("/map", {state : "search"}) }} />
        <IconBtn iconType="setting" onClick={() => { setIsUpdatePlace(true) }} />
      </>
  }


  return (
    <DefaultMain title={title} isBack isTitleCenter
      rightSlot={<>{ComponentRightSlot()}</>}
    >
      {/* SettingModal */}
      <BottomSheet isOpen={isUpdatePlace} onClose={() => { setIsUpdatePlace(false) }}>
        {
          typeList.map((eleemnt, index) => {
            return <button
              key={index}
              className={`block w-full py-4 text-center text-[0.8rem] text-[#6C6C6C] ${index + 1 < typeList.length && ' border-b border-gray-300'}`}
              onClick={eleemnt.onClick}>{eleemnt.label}</button>
          })
        }
      </BottomSheet>


      {/* MainView */}
      <div className="mt-5 px-5">
        <NotiMsgBox isSell={delPlaceType == null} isDelete={delPlaceType !== null} />
        <p className="mt-2 text-end text-[#6C6C6C] text-[0.8rem] ">저장된 장소 {placeList.length}곳</p>
      </div>

      <div className={`px-5 pb-5 flex flex-col h-auto ${delPlaceType !== null && 'mb-[100px]'}`}>
        {
          placeList.length == 0 ? <div className="flex-1 text-center text-[0.9rem] mt-[5rem] text-[#BEBEBE]">
            아직 저장된 장소가 없어요.<br />  우측 상단 + 버튼을 눌러, 장소를 추가해보세요
          </div>
            : <div className="mt-5 flex flex-col gap-5">
              {placeList.map((element, index) => {
                if (delPlaceType != null) {
                  return (
                    <div className="flex gap-5" key={`0` + index}>
                      <DelBtn />
                      <PlaceCard
                        place={element}
                      />
                    </div>
                  )
                } else {
                  return (
                    <PlaceCard
                      key={`1` + index}
                      place={element}
                    />
                  )
                }

              })}
            </div>
        }

        {
          delPlaceType !== null && (
            <div className="fixed bottom-[120px] left-0 px-5 w-full">
              <DefaultBtn text="삭제" />
            </div>
          )
        }
      </div>
    </DefaultMain>
  )
}

export default PlaceView;