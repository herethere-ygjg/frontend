import type { ReactNode } from "react";
import LoadingPage from "../Pages/LoadingPage";
import LoginPage from "../Pages/auth/LoginPage";
import SignupCompletePage from "../Pages/auth/SignupCompletePage";
import SignupInterestPage from "../Pages/auth/SignupInterestPage";
import SignupPage from "../Pages/auth/SignupPage";

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

const folderList : RouteObject[] = [];

const mapList : RouteObject[] = [];

const shopList : RouteObject[] = [];


export const RouterList = [
    ...authList,
    ...folderList,
    ...mapList,
    ...shopList
];
