import { Sidebar } from "./Sidebar"
import { GetOfficial, GetPersonal, GetOthers, GetAll, SentToInProgress } from "../Redux/action"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const Homepage = () => {


    const navigate = useNavigate()
    const { official, personal, others, All } = useSelector((state) => state.TodoData)
    const [filter, setFilter] = useState([])
    const [all, setAll] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(GetAll())

    }, [])
    // console.log(All, "ALL")


    const progress = (elem, id) => {
        // console.log(elem, id)
        setFilter(All.filter((elem) => elem.id == id))
    }



    return <>
        <div className="container" style={{ display: "flex" }}>
            <div style={{ width: "20%" }}>  <Sidebar /></div>

            <div className="alltodos" style={{ display: "flex", border: "3px solid black", width: "100%", margin: "auto" }}>

                <div className="todo">
                    <h1>Todos</h1>
                    {All.map((elem) => {
                        return <div style={{ border: "1px solid black", width: "170px" }}>
                            <h4 onClick={() => { navigate(`/updatetodo/${elem.id}`) }}>Task Name- {elem.title}</h4>
                            <h4 onClick={() => { navigate(`/updatetodo/${elem.id}`) }}>Date- {elem.date}</h4>
                            <label onClick={() => { navigate(`/updatetodo/${elem.id}`) }} htmlFor="">Description: {elem.description}</label> <br />
                            <br />
                            <h4>SubTask</h4>
                            <span> <input onClick={() => { progress(elem, elem.id) }} type="button" />  {elem.subTask}</span>
                        </div>
                    })}
                </div>
                <div style={{ marginLeft: "40px" }} className="inprogress">

                    <h1>Inprogress</h1>

                    {filter.map((filter) => {
                            return <div style={{ border: "1px solid black", width: "170px" }}>
                                <h4 onClick={() => { navigate(`/updatetodo/${filter.id}`) }}>Task Name- {filter.title}</h4>
                                <h4 onClick={() => { navigate(`/updatetodo/${filter.id}`) }}>Date- {filter.date}</h4>
                                <label onClick={() => { navigate(`/updatetodo/${filter.id}`) }} htmlFor="">Description:     {filter.description}</label> <br />
                                <br />
                                <h4>SubTask</h4>
                                <span> <input onClick={() => { progress(filter, filter.id) }} type="button" />  {filter.subTask}</span>
                            </div>
                        })
                    }

                </div>
                <div className="done" style={{ marginLeft: "40px" }} >

                    <h1>Done</h1>
                    {filter.map((filter) => {
                            return <div style={{ border: "1px solid black", width: "170px" }}>
                                <h4 onClick={() => { navigate(`/updatetodo/${filter.id}`) }}>Task Name- {filter.title}</h4>
                                <h4 onClick={() => { navigate(`/updatetodo/${filter.id}`) }}>Date- {filter.date}</h4>
                                <label onClick={() => { navigate(`/updatetodo/${filter.id}`) }} htmlFor="">Description:     {filter.description}</label> <br />
                                <br />
                                <h4>SubTask</h4>
                                <span> <input onClick={() => { progress(filter, filter.id) }} type="button" />  {filter.subTask}</span>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>

    </>
}