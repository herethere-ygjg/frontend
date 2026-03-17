import type { ReactNode } from "react";
import LoadingPage from "../Pages/LoadingPage";

interface RouteObject  {
    path : string, 
    element : ReactNode | null
}


const authList : RouteObject[] = [
    {path : "/", element : <LoadingPage /> }
];

const folderList : RouteObject[] = [];

const mapList : RouteObject[] = [];

const shopList : RouteObject[] = [];


export const RouterList = [
    ...authList,
    ...folderList,
    ...mapList,
    ...shopList
];
