
import {useNavigate} from "react-router-dom"
import {useState} from "react"
export const Login = () => { 
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
  
        email:"",
 
        password:""
    })
    const handleChange = (e)=>{
   
        const {name,value}= e.target
        setFormData({...formData,[name]:value})

    }
    // console.log(formData)

    let local = JSON.parse(localStorage.getItem("userDetails")) || []
    // console.log(local)
    const handleSubmit =(e)=>{
        e.preventDefault()
        let Data = [{email:formData.email, password:formData.password}]
        // console.log(formData.email,formData.password, "obj", Data)
      let flag = false
  for(let key in Data){
    if(Data[key].email == local.email && Data[key].password == local.password ){
        flag = true
    }
         
      }
 
        if(flag === true){
            alert("Login success")
            navigate("/")

        }else{
            alert("Login fail")
        }

    }

    // console.log(local)

    return (
        <>
           
            <div className="login-box" style={{display: 'flex', flexDirection: 'column', border: '1px solid black', width: '300px', margin: "auto"}}>
             <h2>Login</h2>
         <form onSubmit={handleSubmit}>
         <label htmlFor="">Email</label>
             <input onChange={handleChange} name="email" type="text" placeholder="Enter your Email" />
             <label htmlFor="">Password</label>
             <input onChange={handleChange} name="password" type="password"  placeholder="Enter your password" />
             <input onChange={handleChange} type="submit" value="Submit" placeholder="Submit"  />
             <p>Don't have an account? Click on Register</p> <input onChange={handleChange} type="submit" value={"Register"} placeholder="Register" onClick={()=> {navigate("/register")}} />
         </form>
            </div>
        </>
    )
}