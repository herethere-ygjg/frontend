const NotiMsgBox = ({ isSell, isDelete }: {isSell? : boolean, isDelete? : boolean}) => {
  if (isSell) {
    return (
      <div className="w-full bg-red-100 rounded-lg py-3 text-center">
        <p className="text-red-600 font-semibold text-sm">판매중</p>
        <p className="text-gray-600 text-sm">
          판매를 중단하고 싶다면, 이전 화면에서 설정해주세요
        </p>
      </div>
    )
  }

  if (isDelete) {
    return (
      <div className="w-full bg-gray-100 rounded-lg py-3 text-center">
        <p className="text-gray-500 text-sm">
          삭제할 장소를 선택하세요.
        </p>
      </div>
    )
  }

  return null
}

export default NotiMsgBox