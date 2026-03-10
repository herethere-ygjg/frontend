import type { ReactNode } from "react";
// import TestView from "../Pages/TestView";

interface RouteObject  {
    path : string, 
    element : ReactNode | null
}


const authList : RouteObject[] = [
    // {path : "/", element : <TestView /> }
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