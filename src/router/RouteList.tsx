import type { ReactNode } from "react";
import FolderView from "../Pages/folder/FolderView";
import PlaceView from "../Pages/place/PlaceView";
import DetailFolderView from "../Pages/folder/DetailFolderView";
import DetailPlaceView from "../Pages/place/DetailPlaceView";
import LoadingPage from "../Pages/LoadingPage";
import LoginPage from "../Pages/auth/LoginPage";
import SignupCompletePage from "../Pages/auth/SignupCompletePage";
import SignupInterestPage from "../Pages/auth/SignupInterestPage";
import SignupPage from "../Pages/auth/SignupPage";
import HomeView from "../Pages/HomeView";
import MapView from "../Pages/map/MapView";
import AddPlaceView from "../Pages/folder/AddPlaceView";

interface RouteObject  {
    path : string, 
    element : ReactNode | null
}


const authList : RouteObject[] = [
    {path : "/", element : <LoadingPage /> },
    {path : "/login", element : <LoginPage /> },
    {path : "/signup", element : <SignupPage /> },
    {path : "/signup/interests", element : <SignupInterestPage /> },
    {path : "/signup/complete", element : <SignupCompletePage /> }
];

const folderList : RouteObject[] = [
    { path: "/folders", element: <FolderView /> },
    { path: "/folders/:folderId", element: <DetailFolderView /> },
    { path: "/folders/:folderId/places", element: <PlaceView /> },
    { path: "/places/:placeId", element: <DetailPlaceView /> },
    { path: "/place/add", element: <AddPlaceView/> },

];

const mapList : RouteObject[] = [
    { path: "/map", element: <MapView /> },
];

const shopList : RouteObject[] = [];


export const RouterList = [
    ...authList,
    ...folderList,
    ...mapList,
    ...shopList,
    {path : "/home" , element : <HomeView />}
];