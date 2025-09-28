"use client"

import {useState, useNavigate, useEffect} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "./Firebase"
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Dashboard() {
    const [user, setUser] = useState(null)

    useEffect(() => {
            const unsub = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
            })

            return () => unsub();
    },[]);

    const handleSignOut = async () => {
        await signOut(auth);
        alert ("signed out");
    } 
    
    return (
        <div>
            { user ? (
                <div>
                    <h2>welcome {user.email}</h2>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div>
                    <h2>Hello guest</h2>
                    <SignIn/>
                    <SignUp/>
                </div>
            )
            }
        </div>
    )
}

export default Dashboard;