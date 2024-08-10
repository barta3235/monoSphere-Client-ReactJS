import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


import auth from '../firebase/firebase.config'
const googleProvider = new GoogleAuthProvider();
export const AuthContext=createContext(null);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser);
                console.log(currentUser)
                setLoading(false);
            }else{
                setUser(null);
                setLoading(false);
            }
        })
        return ()=>{
            return unSubscribe();
        }
    },[])


    const authInfo={
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile
    }








    return (
        <AuthContext.Provider value={authInfo}>
               {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;