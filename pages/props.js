import Users from '../components/Users'
const props = (props) => {
    const users = props.users;
    // console.log(users)
    return (
        <>
        {users.map(user => {
            return <Users key={user.id} user={user}></Users>
        })}
        </>
    );
}
 
export default props;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // console.log(data);
    const path = data.map(d => {
        return {
            params: {
                id: d.id.toString()
            }
        }
    });
    console.log(path)
    return {
        props: {
            users: data
        }
    }
}