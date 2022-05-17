import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import store,{persistor} from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from './components/ScollToTop/ScrollToTop'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <BrowserRouter>
                    <ScrollToTop/>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        </PersistGate>
    </Provider>
)

