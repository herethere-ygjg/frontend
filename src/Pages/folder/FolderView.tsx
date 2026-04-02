import { useState } from "react";
import ToggleBtn from "../../components/btn/ToggleBtn";
import SearchInput from "../../components/input/SearchInput";
import DefaultMain from "../../components/layout/DafultMain";
import FolderCard from "../../components/folder/FloderCard";
import { img } from "../../assets/img";
import IconBtn from "../../components/btn/IconBtn";
import type { FolderType } from "../../types/FolderTypes";
import BottomSheet from "../../components/modal/BottomSheet";
import AddFolderForm from "./AddFolderForm";
import DelBtn from "../../components/btn/DelBtn";
import DefaultBtn from "../../components/btn/defaultBtn";
import { FOLDER_ITEMS } from "../../data/FolderList";

interface folderUpdateType {
  type: "delete" | "sell"
}

const FloderView = () => {
  const [isAddFolder, setIsAddFolder] = useState<boolean>(false); // 폴더 추가 모달창
  const [isUpdateFolder, setIsUpdateFolder] = useState<boolean>(false); // 폴더 설정 모달창
  const [folderType, setFolderType] = useState<folderUpdateType | null>(null); // 폴더효과속성 (삭제 / 판매)

  const [searchText, setSearchText] = useState<string>(""); // 검색창


  const [selectFileter, setSelectFileter] = useState<String>("내폴더"); // 필터
  const [folderList, setFloderList] = useState<FolderType[]>(FOLDER_ITEMS);


  const filterList: { label: string }[] = [{ label: "내폴더" }, { label: "공유 중인 폴더" }, { label: "저장한 폴더" }];
  const typeList: { label: string, type: string }[] = [{ label: "폴더 판매", type: "sell" }, { label: "폴더 삭제", type: "delete" }];

  /// 함수 ===================================
  const handleOnchangeToggle = (element: string) => {
    setSelectFileter(element);
  }

  // 기타설정 목록에 따른 이벤트
  const onClickFolderType = (e: any) => {
    console.log(e.target.value)
    setFolderType({ type: e.target.value });
    setIsUpdateFolder(false);
  }

  // right slot 컴포넌트
  const ComponentRightSlot = () => {
    return folderType != null ?
      <IconBtn iconType="close" onClick={() => { setFolderType(null) }} /> :
      <>
        <IconBtn iconType="plus" onClick={() => { setIsAddFolder(true) }} />
        <IconBtn iconType="more" onClick={() => { setIsUpdateFolder(true) }} />
      </>
  }


  return (
    <DefaultMain title="폴더"
      rightSlot={<>{ComponentRightSlot()}</>}
    >
      {/* AddModal */}
      <BottomSheet isOpen={isAddFolder} onClose={() => { setIsAddFolder(false) }}>
        <AddFolderForm onClose={() => setIsAddFolder(false)} />
      </BottomSheet>
      {/* DeleteModal */}
      <BottomSheet isOpen={isUpdateFolder} onClose={() => { setIsUpdateFolder(false) }}>
        {
          typeList.map((eleemnt, index) => {
            return <button
              key={index}
              className={`block w-full py-4 text-center text-[0.8rem] text-[#6C6C6C] ${index + 1 < typeList.length && ' border-b border-gray-300'}`}
              value={eleemnt.type}
              onClick={onClickFolderType}>{eleemnt.label}</button>
          })
        }
      </BottomSheet>

      {/* Main View */}
      <div className={`p-5 flex flex-col h-auto ${folderType !== null && 'mb-[100px]'}`}>
        <SearchInput
          value={searchText}
          onChange={(e) => { setSearchText(e.target.value) }}
        />

        <div className="mt-5 flex gap-2 flex-wrap">
          {filterList.map((element, index) => {
            return (
              <ToggleBtn key={index} isRadio={true} label={element.label} isSetActive={element.label == selectFileter} onChange={() => { handleOnchangeToggle(element.label) }} />
            )
          })}
        </div>


        { // folder List 
          folderList.length == 0 ? <div className="flex-1 text-center text-[0.9rem] mt-[5rem] text-[#BEBEBE]">
            아직 나만의 폴더가 없어요.<br />  우측 상단 + 버튼을 눌러, 나만의 폴더를 만들어보세요
          </div>
            : <div className="mt-5 flex flex-col gap-5">
              {folderList.map((element, index) => {
                if (folderType != null) {
                  return (
                    <div className="flex gap-5" key={`0` + index}>
                      <DelBtn />
                      <FolderCard
                        folder={element}
                        isShare={selectFileter == "공유 중인 폴더"}
                      />
                    </div>
                  )
                } else {
                  return (
                    <FolderCard
                      key={`1` + index}
                      folder={element}
                      isShare={selectFileter == "공유 중인 폴더"}
                    />
                  )
                }

              })}
            </div>
        }

        {
          folderType !== null && (
            <div className="fixed bottom-[120px] left-0 px-5 w-full">
              <DefaultBtn text={folderType?.type == 'sell' ? "판매 시작" : "삭제"} />
            </div>
          )
        }
      </div>
    </DefaultMain>
  )
}

export default FloderView;