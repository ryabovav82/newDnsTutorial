import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main.tsx";
import SignIn from "./pages/SignIn/SignIn.tsx";
import AdminPage from "./pages/AdminPage/AdminPage.tsx";
import Header from "./pages/Header/Header.tsx";
import ErrPage from "./pages/ErrPage/ErrPage.tsx";

// import './App.css'

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='/adminpage' element={<AdminPage />}/>
            <Route path='*' element={<ErrPage />}/>
        </Routes>
    </>
  )
}

export default App;
