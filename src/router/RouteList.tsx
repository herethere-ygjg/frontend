import type { ReactNode } from "react";
import FolderView from "../Pages/folder/FolderView";
import PlaceView from "../Pages/place/PlaceView";
import DetailFolderView from "../Pages/folder/DetailFolderView";
import DetailPlaceView from "../Pages/place/DetailPlaceView";
import { path } from "framer-motion/client";
import HomeView from "../Pages/HomeView";

interface RouteObject  {
    path : string, 
    element : ReactNode | null
}


const authList : RouteObject[] = [
    // {path : "/", element : <TestView /> }
];

const folderList : RouteObject[] = [
    { path: "/folders", element: <FolderView /> },
    { path: "/folders/:folderId", element: <DetailFolderView /> },
    { path: "/folders/:folderId/places", element: <PlaceView /> },
    { path: "/places/:placeId", element: <DetailPlaceView /> },

];

const mapList : RouteObject[] = [];

const shopList : RouteObject[] = [];


export const RouterList = [
    ...authList,
    ...folderList,
    ...mapList,
    ...shopList,
    // {path : "/home" , element : <HomeView />}
];