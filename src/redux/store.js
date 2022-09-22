import { configureStore } from '@reduxjs/toolkit'
import agendarReducer from './slices/agendar'

export default configureStore({
    reducer: {
        agendar: agendarReducer,
    },
})
