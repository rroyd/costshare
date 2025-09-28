"use client"

import { useState } from "react";
import { auth } from './Firebase'
import {signInWithEmailAndPassword} from "firebase/auth"


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        const handleSignIn = async (e) => {
            e.preventDefault()

            try {
                await signInWithEmailAndPassword(auth, email, password)
                alert("user login successfully")

            } catch (err) {
                console.log(err)
                alert("email or password not correct ! plz try again")
            }
        }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" value = {email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" value = {password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type = "submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;