import type { ReactNode } from "react";
import LoginPage from "../Pages/LoginPage";
import LoadingPage from "../Pages/LoadingPage";

interface RouteObject  {
    path : string, 
    element : ReactNode | null
}


const authList : RouteObject[] = [
    {path : "/", element : <LoadingPage /> },
    {path : "/login", element : <LoginPage /> }
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
