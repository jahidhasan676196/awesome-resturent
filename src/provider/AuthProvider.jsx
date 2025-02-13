import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

console.log(user);
    // create user in email password
    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login in with email password
    const LoginInWithEmailPasword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signInWith google
    const singInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // logout
    const logOut = () => {
        return signOut(auth)
    }

    const info = {
        user,
        setUser,
        createUserWithEmailPassword,
        LoginInWithEmailPasword,
        logOut,
        singInWithGoogle


    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;