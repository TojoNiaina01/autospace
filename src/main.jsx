import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Layout from "./components/Layout.jsx";
import {data} from "./data.js"

export const dataContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
    <dataContext.Provider value={data}>
        <Layout>
            <App/>
        </Layout>
    </dataContext.Provider>
)
