import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const index = () => {
  const router = useRouter();
  const cartBtn = () => {
    console.log("Btn clicked");
    router.replace("/product")
  }
  return (<>
  <Head>
    <title>Home</title>
  </Head>
  <h1>Hello World</h1>
  <Link href="/blog" ><a>Blog</a></Link>
  <Link href="/product"><a>Products</a></Link>
  <button onClick={cartBtn}>All to Cart</button>
  </>);
}
 
export default index;