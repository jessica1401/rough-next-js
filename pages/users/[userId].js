import { useRouter } from "next/router";
const userId = () => {
    const router = useRouter();
    const {userId} = router.query;
    return (<>
    <h1>This is user id: {userId}</h1>
    </>);
}
 
export default userId;