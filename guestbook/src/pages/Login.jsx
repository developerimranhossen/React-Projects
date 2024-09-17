import { useState } from "react"
import {loginWithEmailAndPassword, singInWithGoogle} from '../firebase'
import { NavLink, useNavigate } from "react-router-dom"


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const response = await loginWithEmailAndPassword(email, password)
      console.log(response);
      navigate('/home')
    } catch(error) {
      console.log(error);
    }
  }
  const handleSocialLogin = async () => {
    const user = await singInWithGoogle()
    console.log(user);
    navigate('/home')
  }
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Login</h1>
      <form className="flex flex-col justify-center items-center">
      <div>
      <div className="my-1">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" required placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        className="mx-2 my-2 border border-gray-100 rounded-sm"/>
      </div>
      <div className="">
        <label htmlFor="password">Email password</label>
        <input type="password" id="password" required placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        className="mx-2 my-2 border border-gray-100 rounded-sm"/>
      </div>
      <div className="">
        <button onClick={handleLogin} className="bg-black text-white p-1 rounded-md">Login</button>
        <button onClick={handleSocialLogin} className="bg-blue-500 text-white p-1 rounded-md mx-2">Login with Google</button>
      </div>
    </div>
    </form>
    <p>
      No Account?
      <NavLink to='/register' className='underline'>
        Register
      </NavLink>
    </p>
    <p>
      forgot password?
      <NavLink to='/reset' className='underline'>
        Reset password
      </NavLink>
    </p>
    </div>
  )
}

export default Login