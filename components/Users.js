const Users = (props) => {
    const user = props.user;
    // console.log(props)
    return (<>
    <p>{user.name}</p>
    <p>{user.email}</p>
    </>);
}
 
export default Users;