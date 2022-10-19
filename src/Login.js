// 
import React,{useState} from "react";

function Login()
{

    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [useErr,setUserErr]=useState(false)
    const [passErr,setpassErr]=useState(false)




    function submit(e){

        if(user.length<3 || password.length<3)
        {
            alert('type correct value')
        }
        else{
            alert('all good :)')
        }

        let name = document.getElementById('name')
        let pass = document.getElementById('pass')

        name.value = ''
        pass.value = ''

        e.preventDefault()
    }

    function userdata(e){
        let item = e.target.value;
        if(item.length<3){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }

        setUser(item)

       
    }

    function pass(e){
        let item = e.target.value;
        if(item.length<3){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }

        setPassword(item)

       
    }

    return(
    <div>
        <h1>Login</h1>
        <form onSubmit={submit}>
        <input type="text" id="name" placeholder="Enter your name" autoComplete="on" onChange={userdata}/>{useErr?<span>User not valid</span>:""}
        <br/><br/>
        <input type="text" id="pass" placeholder="Enter Password" autoComplete="off" onChange={pass}/>{passErr?<span>Password not valid</span>:""}
        <br/><br/>
        <button type="submit">Login</button>
        </form>
    </div>
    )
    
}
export default Login;