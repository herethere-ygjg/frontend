import { useEffect, useRef, useState } from "react";
import SearchInput from "../../components/input/SearchInput";
import DefaultMain from "../../components/layout/DafultMain";
import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";



const MapView = () => {
    const navigate  = useNavigate();
  const location = useLocation();

  const [searchList, setSearchList] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    if (!searchInput || searchInput.length < 2) return;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    setIsLoading(true);

    debounceRef.current = setTimeout(async () => {
      const currentRequestId = ++requestIdRef.current;

      try {
        const res = await axios.get(
          "https://dapi.kakao.com/v2/local/search/keyword.json",
          {
            headers: {
              Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API}`,
            },
            params: { query: searchInput },
          }
        );

        // ✅ 가장 중요한 부분
        if (currentRequestId !== requestIdRef.current) return;

        setSearchList(res.data.documents);
        console.log(res.data.documents)
      } catch (error) {
        console.error(error);
      } finally {
        if (currentRequestId === requestIdRef.current) {
          setIsLoading(false);
        }
      }
    }, 1000);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchInput]);


  const navigateByAddPlaces = (e : any) =>{
    console.log("evnet ::", e)
    navigate("/place/add", {state : e});
  }

  return (
    <DefaultMain title={"장소 검색"} isBack={location.state} isTitleCenter={location.state}>
      <div className="px-5 py-3 flex flex-col min-h-full h-auto">
        <div className="sticky top-5 bg-white w-full">
          <SearchInput
            placeholder="가맹점을 검색해주세요"
            value={searchInput}
            onChange={(e: any) => { setSearchInput(e.target.value) }}
          />
        </div>

        <div className={`mt-5 flex-1 mint-h-[80%] ${isLoading ? "flex flex-col items-center justify-center":""}`}>
          {
            searchList.length === 0 && !isLoading ?
              <div className="mt-10 flex flex-col gap-5 items-center justify-center">
                <p className="text-[0.9rem] text-[#878787]">추가할 장소를 검색해주세요</p>
                <p className="text-[0.8rem] text-center text-[#D9D9D9]">현재 위치를 기반으로 주변 가맹점을 보여드려요. <br /> 위치 권한을 허용해주세요.</p>
              </div>
              :
              isLoading ? <div className="flex justify-center items-center h-full">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
              </div> :
                searchList.map((element, index) => {
                  return (
                    <button onClick={()=>{navigateByAddPlaces(element)}} key={index} className={`block w-full pl-6 pr-3 pb-3 pt-5 flex flex-col items-start gap-2 ${index == 0 ? '' : 'border-t border-[#D9D9D9]'}`}>
                      <p className="text-[0.9rem]">{element.place_name}</p>
                      <p className="text-[0.8rem] text-[#696969]">{element.address_name}</p>
                      {/* <a href={element.place_url} className="text-[0.7rem] text-[#878787] flex items-center justify-end gap-2">장소 상세보기 <ArrowRight size={10} /> </a> */}
                    </button>
                  )
                })
          }
        </div>
      </div>
    </DefaultMain>
  )
}

export default MapView;