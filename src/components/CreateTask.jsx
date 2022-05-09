import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { PostTodo } from "../Redux/action"
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
export const CreateTask = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [sub, addSub] = useState([])

    const [type, setType] = useState("")
    const [isSelected, setSelected] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        subTask: {},
        date: ""


    })


    const handleCheck = (e) => {
        const { value, checked } = e.target;
        // console.log(`${value} is ${checked}`);

        setType(value)
        setSelected(checked)

    }
    // console.log(type, isSelected)
    // const { type } = formData

    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData({ ...formData, [name]: value, })


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(PostTodo(formData, type))


    }

    const AddSubTask = (e) => {

        const { name, value } = e.target
        addSub({ ...sub, [name]: value })

    }

    console.log(sub)
    return <>

        <div className="createTask" style={{ display: "flex" }}>
            <div><Sidebar /></div>
            <form action="" onSubmit={handleSubmit}>
                <div className="create" style={{ border: "1px solid black", display: "flex", padding: "10px" }}>


                    <div className="titledis" style={{ marginRight:"10px"}}>

                        <input onChange={(e) => { handleChange(e) }} type="text" name="title" placeholder="TITLE" /> <br />
                        <input onChange={(e) => { handleChange(e) }} type="text" name="description" placeholder="DESCRIPTION" style={{ height: "100px", marginTop: "10px"}} />
                        <br />
                        <div className="categories" style={{ marginTop: "275px"}}>
                            <input type="radio" />
                            <label htmlFor="">To Do</label> <br />
                            <input type="radio" />
                            <label htmlFor="">In Progress</label> <br />
                            <input type="radio" />
                            <label htmlFor="">Done</label>
                        </div>
                        <div className="type" style={{ marginTop: "50px" }}>
                            <input onChange={(e) => { handleCheck(e) }} className="official" type="checkbox" value="official" /> <label htmlFor="">Official</label>
                            <br /> <input onChange={(e) => { handleCheck(e) }} className="personal" type="checkbox" value="personal" /> <label htmlFor="">Personal</label>
                            <br /> <input onChange={(e) => { handleCheck(e) }} className="others" type="checkbox" value="others" /> <label htmlFor="">Others</label>
                        </div>


                    </div>
                    <div className="createsubtask" style={{marginRight:"10px"}}>
                        <input onChange={(e) => { handleChange(e) }} type="text" className="sub" name="subTask" placeholder="Add sub task" /> <button onClick={AddSubTask}>Add</button>  <br />
                        <div>
                            
                        </div>
                    </div>

                    <div>    <input onChange={(e) => { handleChange(e) }} type="text" name="date" placeholder="DATE" /> <br />
                        <input type="submit" value={"Create A New Task"} placeholder="CREATE A NEW TASK" style={{marginTop:"10px"}} />

                        <div className="backtohome">
                   <button onClick={() => { navigate("/")}}style={{  marginTop: "400px",  border: "1px solid black", }}>
                    Back
                   </button>
                  </div>
                    </div>





                </div>
            </form>
        </div>

    </>
}