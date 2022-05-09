import { configureStore } from "@reduxjs/toolkit"

import { TodoReducer } from "./reducer"


export const Store = (configureStore({

    reducer: {
        TodoData: TodoReducer
    }

}))