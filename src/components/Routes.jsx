
import { Routes, Route } from "react-router-dom"
import { CreateTask } from "./CreateTask"
import { Homepage } from "./Homepage"
import { UpdateTodo } from "./UpdateTodo"
import { Summary } from "./summary"
import {Login} from "./login"
import {Register} from "./register"

export const AllRoutes = () => {
    return <>

        <Routes>


            <Route path="/" element={<Homepage />} />
            <Route path="/createtodo" element={<CreateTask />} />
            <Route path="/updatetodo/:id" element={<UpdateTodo />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


        </Routes>

    </>
} 