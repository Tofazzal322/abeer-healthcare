
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
firebaseInitialize();





const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser ] = useState([])
    const [isLoading,setIsLoading] = useState(true) 

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
        })
        .finally(()=> setIsLoading(false));
    }

    /////////////////////////////////
     useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUser(user.uid);
                setUser(user);
              
            } else {
                setUser({})
        }
        setIsLoading(false)
      });
        return ()=>unsubscribed
    }, []);

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
        isLoading


    }
}

export default useFirebase;