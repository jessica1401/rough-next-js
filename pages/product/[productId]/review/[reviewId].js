import { useRouter } from "next/router";

const reviewId = () => {
    const route = useRouter();
    const { productId, reviewId} = route.query; 
    return (<>
    <h1>product id is {productId}</h1>
    <h1>this is Review Id {reviewId}</h1></>);
}
 
export default reviewId;