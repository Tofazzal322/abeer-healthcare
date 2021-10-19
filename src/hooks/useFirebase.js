
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth,signInWithPopup,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
firebaseInitialize();





const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser ] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
        
    }

    /////////////////////////////////
     useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              
            } else {
                setUser({})
        }
        setIsLoading(false)
      });
        return ()=>unsubscribed
     }, []);
    
    
    


    const signInWithPassword = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
            // setPassword(result.user)
            })
            .catch(error => {
            
        })
    }

    ///////////////////////////////////////

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => { })
    .finally(()=> setIsLoading(false));
    };

    return {
        user,
        signInWithGoogle,
        setUser,
        logOut,
        isLoading,
        signInWithPassword
        // signUpWithPassword


    }
}

export default useFirebase;