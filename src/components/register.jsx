
import {useNavigate} from "react-router-dom"
import {useState} from "react"
export const Register = () => { 
    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        number:"",
        password:""
    })

    const handleChange = (e)=>{
   
        const {name,value}= e.target
        setFormData({...formData,[name]:value})

    }


    const handleSubmit =(e)=>{
        e.preventDefault()
        let local = []

       
if(!formData.name || !formData.email || !formData.number || !formData.password){
    alert("Fill complete form ")
}else{
    
    local.push(formData)
// console.log(local)

localStorage.setItem("userDetails", JSON.stringify(formData))
alert("Registration successful")
}


    }

    return (
        <>
           
            <div className="register-box" style={{display: 'flex', flexDirection: 'column', border: '1px solid black', width: '300px', margin: "auto"}}>
             <h2>Register</h2>
       <form onSubmit={handleSubmit}>
       <label htmlFor="">Name</label><input onChange={handleChange} name="name" type="text"  placeholder="Enter your Name" />
             <label htmlFor="">Email</label><input onChange={handleChange} name="email" type="text"  placeholder="Enter your Email" />
             <label htmlFor="">Mobile Number</label><input onChange={handleChange} name="number" type="number"  placeholder="Enter your Number" />
             <label htmlFor="">Password</label><input onChange={handleChange} name="password" type="password"  placeholder="Enter your password" />
             <input onChange={handleChange} type="submit" value={"Submit"} placeholder="Submit"  />
             <p>Already have an account? Click on Login</p> <input onChange={handleChange} type="submit" value={"Login"} placeholder="Login" onClick={()=> {navigate("/login")}} />
       </form>
            </div>
        </>
    )
}