import React, { useState } from 'react'

 function StudentAdmin() {
  const [studentData,setStudentData]=useState([]);
  async function showData(e){
   
     e.preventDefault();
     const sid=e.target.sid.value;
      //alert(sid);
      if(sid=='*'){
       const data=await fetch("http://localhost:3002/admin/show");
                   const res=await data.json();
                   console.log(res.msg);
                   setStudentData(res.msg);

  }
  else{
    const data=await fetch(`http://localhost:3002/admin/showByEmail/${sid}`);
    const res=await data.json();
    console.log(res.msg);
    setStudentData(Array.isArray(res.msg)?res.msg:[res.msg]);
   
  }
}

async function handleDelete(email){
  const data=await fetch(`http://localhost:3002/admin/deleteByEmail/${email}`,{
    method:'delete'
  });
  const res=await data.json();
  alert(res.msg);
}

async function handleUpdate(email){
  const newName=prompt('Enter name to update');
  const newPassword=prompt('Enter password to update');
  if(!newName && !newPassword) return;
  //alert(newName+email);
  const data=await fetch(`http://localhost:3002/admin/updateByEmail/${email}`,
    {
    method:'PATCH',
    body:JSON.stringify({name:newName,password:newPassword}),
    headers:{'Content-Type':'application/json'}
  
  });
  const res=await data.json();
  alert(res.msg);
 
}
  return (
    <div>
    <div>StudentAdmin</div>
    <form onSubmit={showData}>
    <div>
      <input type='text' name='sid' placeholder='Enter * or sid' />
    </div>
    <div>
      <button>Serach Student</button>
    </div>
    </form>
    <div>
      {
        studentData && studentData.length>0?
        (<table>
        <thead>
          <tr><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
        {
          studentData.map((student,index)=>(
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td><button onClick={()=>handleDelete(student.email)}>Delete</button></td>
              <td><button onClick={()=>handleUpdate(student.email)}>Update</button></td>
            </tr>
          ))
        }
        </tbody>
        </table>):
        (<h2>Data not found</h2>)
      }
    </div>
    
    </div>
  )
}

export default StudentAdmin