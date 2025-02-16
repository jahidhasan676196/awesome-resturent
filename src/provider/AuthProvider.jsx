import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { PiAxeDuotone } from "react-icons/pi";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null)


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosSecure=useAxiosSecure()

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
                const info={email:currentUser?.email}
                axiosSecure.post('/jwt',info)
                .then(res=>{
                    console.log(res.data.token);
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
                .then(err=>{
                    console.log(err);
                })
                
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // logout
    const logOut = () => {
        localStorage.removeItem('access-token')
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