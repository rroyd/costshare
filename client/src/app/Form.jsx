"use client"

import {useState} from "react"
import { set, ref } from "firebase/database"
import database from "./Firebase"

function Form(props) {
    let {onSubmit} = props

    let [fullName, setFullName] = useState("");
    let [email, setEmail] = useState("");
    let [gender, setGender] = useState("");
    let [country, setCountry] = useState("");
    let [password, setPassword] = useState("");

    function submitHandler(e) {
        e.preventDefault()

        let newUser = {
            email,
            fullName,
            gender,
            password,
            country
        }

        onSubmit(newUser);

        setFullName("")
        setEmail("")
        setPassword("")
        setGender("")
        setCountry("")

        // fetch("https://localhost:3000/addToMongo", {
        //     method: "POST",
        //     body: newUser
        // })
        // .catch((err) => console.log(err))
    }

    function fullNameHandler(e) {
        setFullName(e.target.value);
    }

    function countryHandler(e) {
        setCountry(e.target.value);
    }

    function fullNameHandler(e) {
       setFullName(e.target.value);
    }

    function emailHandler(e) {
        setEmail(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

       function genderHandler(e) {
        setGender(e.target.value);
    }

    function genderHandler(e) {
        setGender(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label htmlFor="">Full Name: </label>
                    <input type="text" value = {fullName} onChange={fullNameHandler}/>
                    </div>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input type="text" value = {email} onChange={emailHandler}/>
                    </div>
                    <div>
                        <label htmlFor="">Gender: </label>
                        <select value = {gender} onChange={genderHandler}> 
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Country: </label>
                        <input type="text" value = {country} onChange={countryHandler}/>
                    </div>
                       <div>
                        <label htmlFor="">Password: </label>
                        <input type="text" value = {password} onChange={passwordHandler}/>
                    </div>
                </div>
                <button type = "submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Form;