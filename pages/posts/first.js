import Link from 'next/link'
import Head from 'next/head';
import Container from '../../components/container';
import FetchData from './fetchData';

export default function FirstPost(props) {
   return (
      <Container>
         <Head>
            <title>My First Post</title>
         </Head>
         <h1>My First Post</h1>
         <FetchData/>
         <h2>
            <Link href="/">
               <a>Home</a>
            </Link>
         </h2>
      </Container>	  
   )
}

