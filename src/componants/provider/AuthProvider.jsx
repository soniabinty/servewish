
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';


const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null)
  const [loading , setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()


  const createUser =(email , password) =>{

    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() =>{
    const unsubscriber = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log(currentUser)
      setLoading(false)
    })
    return () =>{
      unsubscriber()
    }

  },[])

  const signIn =(email , password) =>{

    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile =(updateData) =>{
    return updateProfile(auth.currentUser, updateData)
  }


  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };
  

  const logOut =() =>{
    setLoading(true)
    return signOut(auth)
  }


  const authInfo ={
 createUser,
 setLoading,
 signIn,
 user,
 setUser,
 updateUserProfile,
 googleSignIn,
 logOut


  }

  return (
    <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>
   );
};

export default AuthProvider;