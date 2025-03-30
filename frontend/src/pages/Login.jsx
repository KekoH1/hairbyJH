import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState("Login") // Default till "Login"

  const submitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={submitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl border-zinc-400 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>Var snäll och {state === "Sign Up" ? "sign up" : "log in"} för att boka en tid</p>
       {
        state === "Sign Up"&&
        <div className='w-full'>
          <p>Namn</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name}  required/>
        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.name)} value={email}  required/>
        </div>
        <div className='w-full'>
          <p>Lösenord</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.name)} value={password} required />
        </div>
        
        <button className='bg-blue-600 text-white w-full rounded-md text-base' type="submit">{state === "Sign Up" ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
          ? <p>Har du redan ett Konto? <span onClick={()=>setState('Login')} className='text-blue-600 underline cursor-pointer'>Logga in här</span></p>
          : <p>Har du inget konto? <span onClick={()=>setState('Sign Up')} className='text-blue-600 underline cursor-pointer'>Skapa ett konto här</span></p>
        }   
      </div>
    </form>
  )
}

export default Login
