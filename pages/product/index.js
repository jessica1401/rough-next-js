import Link from "next/link";
const product = () => {
    return (<>
    <Link href="/"><a>Go to home</a></Link><br></br><br></br>
    <Link href="/product/1"><a>Product 1</a></Link><br></br><br></br>
    <Link href="/product/2"><a>Product 2</a></Link><br></br><br></br>
    <Link href="/product/3"><a>Product 3</a></Link><br></br><br></br>
    </>);
}
 
export default product;