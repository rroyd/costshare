"use client"

import { useState } from "react";
import { auth } from './Firebase'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {set, ref} from "firebase/database"
import database from './Firebase'
import Form from './Form'

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async (newUser) => {
        const {email, password} = newUser;

        console.log(email, password)

        try {
            await createUserWithEmailAndPassword(auth, email, password)

            alert("user registered successfully")

            const uniqueKey = Date.now();

            set(ref(database, 'objects/' + uniqueKey), newUser)
            .then(() => {
                console.log("Data sent successfully")
            })
            .catch(() => {
                console.error(err)
            })

        } catch (err) {

            console.log(err)
        }
    }


    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSignUp} />
        </div>
    )
}

export default SignUp;