import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
