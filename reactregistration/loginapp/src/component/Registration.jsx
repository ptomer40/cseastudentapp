import React from 'react'

function Registration() {

    async function sendData(e){
        //alert("hhiii");
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        //alert(name+email+password);
        console.log(name+email+password);
        const response=await fetch("http://localhost:3002/register",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{'Content-Type':'application/json'}
        })
       const res= await response.json();
        alert(res.message);
    }
  return (
    <div>Registration
        <div>
<form onSubmit={sendData}>
<label>Name:</label><input type='text' name='name' required placeholder='Enter Name' />
<br></br>
<label>Email:</label><input type='email' name='email' required placeholder='Enter email' />
<br></br>
<label>Password:</label><input type='password' name='password' required placeholder='Enter password' />
<br></br>
<button type="submit" >Submit</button>
</form>

        </div>
    </div>
  )
}

export default Registration