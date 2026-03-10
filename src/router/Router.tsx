import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouterList } from "./RouteList";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {RouterList.map((route, index)=>(
                    <Route path={route.path} element={route.element} key={index} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;