import { useState } from 'react'
import './App.css'
function App() {

let [email,setEmail] = useState("")
let[Password,setPassword] = useState("")
let[Cpassword,setCpassword] = useState("")


function changeBorder(e){
  if(verify(email)){
    e.target.style.border = "1px solid green"
  }
}

function ValidEmail(e){
setEmail(e.target.value)
}


function Passwordc(e){
setPassword(e.target.value)

}



function ValidPassword(e){
  if(Password.length>=8){
    e.target.style.border = "1px solid green"
  }
}


function verifypassword(e){
setCpassword(e.target.value)
}



function ValidCpassword(e){
  if(Cpassword == Password){
    e.target.style.border = "1px solid green"
  }
}


function verify(v){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(v);
}




   function SubmitForm(){
if(Password.length >=8 && verify(email)&& Cpassword == Password){
  alert("Form submitted successfully")
}
else{
  alert("Form cannot be submitted")
}
    
   }

   function inputBorder(e){
   e.target.style.border = "1px solid blue"
   }


  return (
    <div id='form-div'>
    
    <form id='form' onSubmit={()=>{SubmitForm()}}>


<div>
  <b>Email</b><br></br>
  <input type='text' onFocus={(e)=>{inputBorder(e)}}
  
  onChange={(e)=>{ValidEmail(e)}}
  onBlur={(e)=>{changeBorder(e)}}
  />

{
   email !== "" && verify(email)  ? <h1></h1> : <p  className='show'>Invalid email formate</p>

}

</div>


<div>
  <b>Password</b><br></br>
  <input type='password' onFocus={(e)=>{inputBorder(e)}}
  onBlur={(e)=>{ValidPassword(e)}}
   onChange={(e)=>{Passwordc(e)}}  
    

  />
{
  Password.length >=8 ? <p></p> :<p  className=' show'>Password must be at least 8 character</p>

}
  
</div>

<div>
  <b>Confirm Password</b><br></br>
  <input type='password' onFocus={(e)=>{inputBorder(e)}}
  onBlur={(e)=>{ValidCpassword(e)}}
  onChange={(e)=>{verifypassword(e)}}
  
  />
   {
     Cpassword == Password  ? <p></p> :<p  className='show'>Password do not match</p>
   }
    
</div>




<div>
  <button>Sign up</button>
  </div>

    </form>

    </div>
  )
}

export default App





