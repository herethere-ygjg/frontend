import { useState } from "react";
import FolderCard from "../components/folder/FloderCard";
import CreateFolderCard from "../components/home/CreateFolderCard";
import DefaultMain from "../components/layout/DafultMain";
import type { FolderType } from "../types/FolderTypes";
import { FOLDER_ITEMS } from "../data/FolderList";

const HomeView = () => {
    const [folderList , setFolderList] = useState<FolderType[]>(FOLDER_ITEMS);

    const places = [1, 2, 3]

    return (
        <DefaultMain title="홈">
            <div className="p-5">
                <CreateFolderCard />

                <div className="mt-5">
                    <h2 className="font-semibold mb-3">
                        장소 추천 TOP 10
                    </h2>

                    <div className="space-y-3">
                        {folderList.map((element, i) => ( <FolderCard key={i} folder={element} />))}
                    </div>

                </div>


            </div>
        </DefaultMain>
    )
}

export default HomeView;