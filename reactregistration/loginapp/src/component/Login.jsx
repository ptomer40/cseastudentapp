import React from 'react'
import {useNavigate} from 'react-router-dom'
function Login() {
    const navigate=useNavigate();
    
  async function sendData(e){
    //alert("hhiii");
    e.preventDefault();
    
    const email=e.target.email.value;
    const password=e.target.password.value;
    //alert(name+email+password);
   
    const response=await fetch("http://localhost:3002/login",{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'}
    })
   const res= await response.json();
    alert(res.message);
    if(res.message=='success'){
      navigate('/dashboard');
    }
}

  
    return(
      <div>Login Form
        <div>
        <form onSubmit={sendData}>
<label>Email:</label><input type='email' name='email' required placeholder='Enter email' />
<br></br>
<label>Password:</label><input type='password' name='password' required placeholder='Enter password' />
<br></br>
<button type="submit" >Login</button>
</form>
</div>
      </div>
      
    )
    }
    
   


export default Login