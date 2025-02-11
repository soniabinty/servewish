import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { LiaServicestack } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';



const Register = () => {



  const {createUser , updateUserProfile ,setUser ,googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleGoogle =() =>{
    googleSignIn()
    .then((result) =>{
      const user = result.user
      setUser(user)
      navigate("/");
      
        })
      
  }



  const handleRegister = (e) =>{
    e.preventDefault()
    const form = e.target 
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photo = form.photo.value
    console.log(name ,photo ,email ,password)

    const newUser = {email , name}
      console.log(newUser)
    axios.post('https://servewish-server.vercel.app/users', newUser)
    .then(data =>{
      console.log(data.data)

    
    })


    const passwordErrors = [];
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push("Password must contain at least one lowercase letter.");
    }
    if (password.length < 6) {
      passwordErrors.push("Password must be at least 6 characters long.");
    }
  
    if (passwordErrors.length > 0) {
    
      toast.error(passwordErrors.join(" "));
      return 
  
    }
  


    createUser(email,password)
  .then((result) =>{
const user = result.user
setUser(user)
updateUserProfile({ displayName: name, photoURL: photo })
.then(() => {

  navigate("/");
})
.catch((err) => {
     
  toast.error("Register Failed.PLease Try Again!!")
 });



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });
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

        <form onSubmit={handleRegister} className="">


     


       <div className="form-control">


            
<label className="label">
  <span className="label-text">Name</span>
</label>
<input type="text" placeholder="name" name='name' className="input input-bordered" required />
</div>




<div className="form-control">


            
<label className="label">
  <span className="label-text">Photo URL</span>
</label>
<input type="text" placeholder="photo" name='photo'  className="input input-bordered" required />
</div>

          <div className="form-control">


            
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password'  placeholder="password" className="input input-bordered" required />
          
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>



        </form>

        <p className='mt-4'>Already have an account? <br /> <Link to={'/login'} className='text-red-500'>Log in.</Link></p>
      </div>
    </div>
  </div>
  );
};

export default Register;