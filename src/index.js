import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/roboto'
import AgendarPages from 'pages'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<AgendarPages />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
