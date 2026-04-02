import { useEffect, useState } from "react";
import DefaultMain from "../../components/layout/DafultMain";
import ToggleBtn from "../../components/btn/ToggleBtn";
import { getCategoryList } from "../../util/getCategoryList";
import type { shopType } from "../../types/ShopTypes";
import { SHOP_ITEMS } from "../../data/ShopList";
import { button } from "framer-motion/client";

const ShopView = () => {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [filterList, setFilterList] = useState<string[]>([]);

  const [shopList , setShopList] = useState<shopType[]>(SHOP_ITEMS); // TODO:  api shopList

  const setFilter = (value: string) => {
    setFilterList((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // 제거
        : [...prev, value] // 추가
    );
  }


  useEffect(() => {
    const categorys = getCategoryList();
    setCategoryList(categorys);


  }, [])


  return (
    <DefaultMain title="폴더 구매">
      <div id="ad_div" className="w-full h-[200px] bg-black"></div>
      <div className="p-5">
        {/* 카테고리 filter */}
        <span className="flex flex-wrap gap-2">
          {
            categoryList.map((element, index) => {
              return (
                <ToggleBtn key={index} label={element} onChange={()=>{setFilter(element)}} />
              )
            })
          }
        </span>

          {/* SHop List */}
          <div className="mt-5 grid grid-rows-3 grid-cols-3 gap-3 items-start justify-start">
            {
              shopList.map((element , index) =>{
                return (
                  <button className="block text-start">
                    <img src={element.thumbnail_url} alt={`${element.title} 이미지`} className="object-cover" />
                    <p className="text-[#696969] text-[0.7rem]">{element.owner_user}</p>
                    <span className="flex">
                      <p className="flex-1 text-[#434343] text-[0.9rem]">{element.title}</p>
                    </span>

                  </button>
                )
              })
            }
          </div>

      </div>
    </DefaultMain>
  );
}
export default ShopView;