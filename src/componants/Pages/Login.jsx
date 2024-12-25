import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { LiaServicestack } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {

  const { user, signIn ,setUser ,googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleLogIn = (e) =>{
    e.preventDefault()
    const form = e.target 
   
    const email = form.email.value
    const password = form.password.value


   
   
    console.log(email ,password)

   signIn(email,password)
    .then((result) =>{
  const user = result.user
  setUser(user)
  navigate("/");
  toast.success("You are succcessfully login")
  
    })
    .catch((err) => {
     
     toast.error("Login Failed.PLease Try Again!!")
    });
  }


  const handleGoogle =() =>{
    googleSignIn()
    .then((result) =>{
      const user = result.user
      setUser(user)
      navigate( "/");
      
        })
      
  }
  return (
    <div className="hero  min-h-screen">
    <div className="hero-content flex-col text-center ">
      <div className="text-center flex flex-col justify-center mb-4 ">
         <div className='flex items-center text-center text-green-900 mx-auto'>
            <LiaServicestack className='text-2xl ' />
                   <h1 className="logo-name btn btn-ghost  text-xl p-0 ">ServeWISH
                   
                   </h1>
            </div>
        <h1 className="text-3xl font-bold">Join the ServeWISH</h1>
        <p className="">
      Explore, review, and discover trusted 
        <br />
        services with real user feedback to make informed decisions 
      </p>
      </div>
      <div className="card  w-full max-w-lg  p-6">
        
       <button onClick={handleGoogle} className="btn  border w-full"><span><FcGoogle className='text-2xl' /></span>Continue With Google</button>

<div className="divider">OR</div>
        <form onSubmit={handleLogIn} className="">



          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>



        </form>

        <p className='mt-4'>New to ServeWISH Community? <br /> <Link to={'/register'} className='text-red-500'>Register account</Link></p>
      </div>
    </div>
  </div>
  );
};

export default Login;