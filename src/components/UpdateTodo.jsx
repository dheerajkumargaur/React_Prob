import { useEffect, useState } from "react"
import { Sidebar } from "./Sidebar"
import { PostTodo, GetSingleTask, UpdateTask } from "../Redux/action"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {useNavigate} from "react-router-dom"


export const UpdateTodo = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { SingleTask } = useSelector((state) => state.TodoData)

    console.log(SingleTask, "single")

    const { id } = useParams()


    const [sub, addSub] = useState([])

    const [type, setType] = useState("")
    const [isSelected, setSelected] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        subTask: {},
        date: ""

    })
    console.log("type", type)

    const handleCheck = (e) => {
        const { value, checked } = e.target;
        // console.log(`${value} is ${checked}`);

        setType(value)
        setSelected(checked)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value, })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(PostTodo(formData, type))
        dispatch(UpdateTask(formData, type, id))
    }

    const AddSubTask = (e) => {
        const { name, value } = e.target
        addSub({ ...sub, [name]: value })

    }

    useEffect(() => {
        dispatch(GetSingleTask(id))

    }, [])

    useEffect(() => {
        if (SingleTask) {
            setFormData({ ...SingleTask })
        }
    }, [SingleTask])

    console.log(formData, "form")

    return <>

        <div className="createTask" style={{ display: "flex" }}>
            <div><Sidebar /></div>
            <form action="" onSubmit={handleSubmit}>
                <div className="create" style={{ border: "1px solid black", display: "flex", padding: "10px" }}>


                    <div className="titledis" style={{marginRight:"10px"}}>

                        <input onChange={(e) => { handleChange(e) }} value={formData.title} type="text" name="title" placeholder="TITLE" /> <br />
                        <input onChange={(e) => { handleChange(e) }} value={formData.description} type="text" name="description" placeholder="DESCRIPTION" style={{ height: "100px", marginTop: "10px"}} />
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
                    <div className="createsubtask" style={{marginRight:"20px"}}>
                        <input onChange={(e) => { handleChange(e) }} value={formData.subTask} type="text" className="sub" name="subTask" placeholder="Add sub task" /> <button onClick={AddSubTask}>Add</button>  <br />
                        <div>
                            {/* {formData.subTask.map((elem) => {
                                return <span>{elem}</span>
                            })} */}



                        </div>
                    </div>

                    <div>    <input onChange={(e) => { handleChange(e) }} value={formData.date} type="text" name="date" placeholder="DATE"  /> <br />
                        <input type="submit" value={"Update Task"} placeholder="UPDATE" style={{ marginTop:"10px"}} />

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