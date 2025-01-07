import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(email, password);
    }

    const updateUserProfile = (name, photoUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoUrl
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth); 
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user:',currentUser);
        });
        return () => unsubscribe()
    },[])

    const authInfo = {
        user,
        loading,
        signUp,
        login,
        updateUserProfile,
        logOut,
    };

   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;