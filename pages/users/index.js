import Link from 'next/link';
const users = (props) => {
    const users = props.users;
    console.log(users)
    return (<>
    {users.map(user => {
        return (
            <Link key={user.id} href={`/users/${user.id}`}>
                <h6>{user.name}</h6>
            </Link>
        )
    })}
    </>);
}
 
export default users;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    console.log(data);
    return {
        props: {
            users: data
        }
    }
}