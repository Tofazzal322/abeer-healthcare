
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
firebaseInitialize();





const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser ] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
// console.log(password);
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
    
    // const signUpWithPassword = (email,password) => {
        
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //         setPassword(result.user)
    //     })
        
    // }
    


    const signInWithPassword = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
            // setPassword(result.user)
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