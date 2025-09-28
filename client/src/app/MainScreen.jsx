"use client"

import { useEffect, useState } from "react";
import ExpenseTable from "./ExpenseTable"
import Form from "./Form"


function MainScreen() {
    let [users, setUsers] = useState([])

    function onAddUser(newUser) {
        setUsers([...users, newUser])
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersFetch = await fetch("https://randomuser.me/api/?results=20")
                const users = await usersFetch.json()
                const formattedUsers = users.results.map((user) => {
                    return {
                        picture: user.picture.medium,
                        fullName: `${user.name.first} ${user.name.last}`,
                        gender: user.gender,
                        city: user.location.city
                    }
                })

                setUsers(formattedUsers)
            }
            catch(err) {
                console.log(err)
                setUsers([])
            }
        }

        fetchUsers()
    }, [])

    return (
        <div>
            <Form onSubmit = {onAddUser} />
            <ExpenseTable users = {users} />
        </div>
    )
}

export default MainScreen;