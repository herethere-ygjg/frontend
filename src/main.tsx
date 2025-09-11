import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/app' element={<>test routing</>}></Route>
                {/* <Route path='/member/:id' element={<Member />}></Route> */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
