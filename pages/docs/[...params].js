import { useRouter } from "next/router";

const docParms = () => {

    const router = useRouter();
    const { params = [] } = router.query;
    if(params.length == 2) {
        return <h1>viewing {`${params[0]} and ${params[1]}`}</h1>
    } else if(params.length == 1) {
        return <h1>viewing {`${params[0]}`}</h1>
    }
    return <h1>thi sis lih</h1>
}
 
export default docParms;