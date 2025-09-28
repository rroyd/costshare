
function ExpenseItem(props) {
    let {user} = props;

    return (
        <div>
            <img src={user.picture} alt="" />
            <h1 className="text-4xl">{user.fullName}</h1>
            <h5>{user.gender}</h5>
            <h3>Lives in {user.city}</h3>
        </div>
    )
}

export default ExpenseItem;