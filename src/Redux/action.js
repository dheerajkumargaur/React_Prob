import * as types from "./types"
import axios from "axios"
const postTodoReq = (payload) => ({ type: types.POST_TODO_REQ, payload })
const postTodoSuccess = (payload) => ({ type: types.POST_TODO_SUCCESS, payload })
const postTodoFail = (payload) => ({ type: types.POST_TODO_FAIL, payload })

const getOfficial = (payload) => ({ type: types.GET_OFFICIAL, payload })

const getPersonal = (payload) => ({ type: types.GET_PERSONAL, payload })

const getOthers = (payload) => ({ type: types.GET_OTHERS, payload })


const getAll = (payload) => ({ type: types.GET_ALL, payload })


const getSingleTask = (payload) => ({ type: types.GET_SINGLE_TASK, payload })


const updateTask = (payload) => ({ type: types.UPDATE_TASK, payload })

const deleteTask = (payload) => ({ type: types.DELETE_TASK, payload })


const sendToInProgress = (payload) => ({ type: types.SEND_TO_INPROGRESS, payload })


const PostTodo = (obj, type) => (dispatch) => {
    dispatch(postTodoReq("Loading"))
    try {

        axios.post("http://localhost:8080/All", obj).then((res) => {
            dispatch(postTodoSuccess())
        }).catch((error) => {
            dispatch(postTodoFail(error))
        })


    } catch (error) {
        console.log(error)
    }
}


const GetOfficial = () => (dispatch) => {

    try {

        axios.get("http://localhost:8080/official").then((res) => {
            dispatch(getOfficial(res.data))
        }).catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }

}


const GetPersonal = () => (dispatch) => {

    try {

        axios.get("http://localhost:8080/personal").then((res) => {
            dispatch(getPersonal(res.data))
        }).catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }

}

const GetOthers = () => (dispatch) => {

    try {

        axios.get("http://localhost:8080/others").then((res) => {
            dispatch(getOthers(res.data))
        }).catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }

}

const GetAll = () => (dispatch) => {

    try {

        axios.get("http://localhost:8080/All").then((res) => {
            dispatch(getAll(res.data))
        }).catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }

}



const GetSingleTask = (id) => (dispatch) => {

    try {

        axios.get(`http://localhost:8080/All/${id}`).then((res) => {
            dispatch(getSingleTask(res.data))
        }).catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }

}



const UpdateTask = (obj, type, id) => (dispatch) => {
    console.log(`http://localhost:8080/${type}/${id}`)
    dispatch(postTodoReq("Loading"))
    try {

        axios.patch(`http://localhost:8080/${type}/${id}`, obj).then((res) => {
            dispatch(updateTask())
        }).catch((error) => {
            console.log(error)
        })


        axios.patch(`http://localhost:8080/All/${id}`, obj).then((res) => {
            dispatch(updateTask())
            alert("Task Updated")
            dispatch(GetSingleTask())
        }).catch((error) => {
            console.log(error)
        })


    } catch (error) {
        console.log(error)
    }
}



const SentToInProgress = ({ title, description, subTask, date }, id) => (dispatch) => {
    // console.log(elem, "elem")
    try {


        axios.post('http://localhost:8080/inprogress', { title, description, subTask, date }).then((res) => {
            dispatch(sendToInProgress())
        }).catch((error) => {
            console.log(error)
        })


        axios.delete(`http://localhost:8080/All/${id}`).then((res) => {
            dispatch(deleteTask())
            dispatch(GetAll())
            console.log("deleted success")
        }).catch((error) => {
            console.log(error)
            console.log("deleted fail")
        })
    } catch (error) {
        console.log(error)
    }
}


export { PostTodo, GetOfficial, GetPersonal, GetOthers, GetAll, GetSingleTask, UpdateTask, SentToInProgress }



