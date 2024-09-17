import { useState } from "react"
import { sendPasswordReset } from "../firebase"
import { NavLink } from "react-router-dom"


function Reset() {
  const [email, setEmail] = useState('')
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset Your Password</h1>
      <div className="">
        <input type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
        className="mx-2 my-2 border border-gray-100 rounded-sm"/>

         <button onClick={() => sendPasswordReset(email)} className="bg-black text-white p-1 rounded-md">Send Password Reset Email</button>
      </div>
      <p>
        Don't you have an account?
        <NavLink to='/register' className='underline'>Register</NavLink>
      </p>
    </div>
  )
}

export default Reset