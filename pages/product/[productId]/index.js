import { useRouter } from "next/router";
const productDetail = () => {

    const router = useRouter();
    const id = router.query.productId;
    return (<>
    <h1>product Details Of {id}</h1>
    </>);
}
 
export default productDetail; 