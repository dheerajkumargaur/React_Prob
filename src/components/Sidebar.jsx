
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {
    const navigate = useNavigate()
    
    let local = JSON.parse(localStorage.getItem("userDetails")) || []
    return <>

        <div className="sidebarDiv" style={{ border: "2px solid black" }}>

            <div className="username"> Name : {local.name}
            <br />
            <br />
             <button onClick={()=> {navigate("/login")}}>Login</button>
             <button onClick={()=> {navigate("/register")}}>Register</button>
            </div>
            <div className="tasks" style={{ marginTop: "100px", border: "2px solid black" }}>
                <div className="all" style={{  border: "2px solid"}}>All:  4</div>
                <div className="personal" style={{  border: "2px solid"}}>personal: 1</div>
                <div className="official" style={{  border: "2px solid"}}>official: 1</div>
                <div className="others" style={{  border: "2px solid"}}>others:  2</div>


            </div>
            <div className="createTask">
                <button onClick={() => { navigate("/createtodo") }} style={{itemsAllign:"center", border: "2px solid black",  marginTop: "100px"}}>Create Task</button>
                <br />
                <button onClick={() => { navigate("/summary") }} style={{ marginTop: "10px", border: "2px solid black" }}>Summary</button>
            </div>
            <div className="logout" style={{ marginTop: "200px", border: "2px solid black" }}>
                <button >Logout</button>
            </div>




        </div>


    </>
}