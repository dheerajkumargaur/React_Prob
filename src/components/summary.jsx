import { Sidebar } from "./Sidebar";
import {useSelector} from "react-redux"
export const Summary = () => {  
//  const todos = useSelector(state => state.todos);
//  const todoData = todos.filter(item => item.category ==="Todo").length;
//  const inprogressData = todos.filter(item => item.category ==="In Progress").length;
//  const doneData = todos.filter(item => item.category ==="Done").length;
  return (
    <>
      <div className="container" style={{display: 'flex', border: '1px solid black'}} >
        <div ><Sidebar /></div>
        <div className="side-box" style={{ border: '1px solid black'}}>
            <div className="summary" style={{marginTop: "10px", marginLeft: "50px", border: "1px solid black"}}><h2>Summary</h2></div>
            <div className="Todo" style={{ marginLeft: "50px", border: "1px solid black"}}>To DO :- 3</div>
            <div className="Inprogress" style={{ marginLeft: "50px", border: "1px solid black"}}>In Progress :- 1</div>
            <div className="Done" style={{ marginLeft: "50px", border: "1px solid black"}}>Done :- 1 </div>
        </div>        
      </div>
    </>
  );
};