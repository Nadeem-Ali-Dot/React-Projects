import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext' 
function Login() {
    const [userName,setUsername]=useState('')
    const [password,setpassword]=useState('')

    const {setUser}=useContext(UserContext);

const handleSubmit=(e)=>{
e.preventDefault();
setUser(userName,password)
console.log(userName,password)
}

  return (
   <>
   <h2>login</h2>
   <input type='text' onChange={(e)=>(setUsername(e.target.value))} placeholder='UserName' value={userName}/>
   <input type='text' onChange={(e)=>(setpassword(e.target.value))}  placeholder='Password' value={password}/>
   <button onClick={handleSubmit}>Submit</button>
   </>
  )
}

export default Login