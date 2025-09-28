import ExpenseItem from "./ExpenseItem"


function ExpenseTable(props) {
    let { users } = props;

    console.log(users)

    return (
        <div>
        {  
            users.map((user, index) => (
                <ExpenseItem key = {index} user = {user} />
            ))
        }
        </div>
    )

}

export default ExpenseTable;