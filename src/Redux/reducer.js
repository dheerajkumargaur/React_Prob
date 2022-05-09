import * as types from "./types"


const initialState = {
    loading: false,
    error: "",
    official: [],
    personal: [],
    others: [],
    All: [],
    SingleTask: []

}

export const TodoReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case types.POST_TODO_REQ:
            return { ...state, loading: true }

        case types.POST_TODO_SUCCESS:
            return { ...state, loading: false }

        case types.POST_TODO_FAIL:
            return { ...state, loading: false, error: "" }

        case types.GET_OFFICIAL:
            return { ...state, loading: false, official: payload }

        case types.GET_PERSONAL:
            return { ...state, loading: false, personal: payload }


        case types.GET_OTHERS:
            return { ...state, loading: false, others: payload }

        case types.GET_ALL:
            return { ...state, loading: false, All: payload }

        case types.GET_SINGLE_TASK:
            return { ...state, loading: false, SingleTask: payload }


        default:
            return state
    }

} 