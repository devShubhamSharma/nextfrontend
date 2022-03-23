import Link from 'next/link';
import FetchData from './posts/fetchData';

function HomePage(props) {    
    return (
      <>
         <div key="title">Welcome to Next.js!</div>
         <FetchData />
         <Link href="/posts/first"><a>First Post</a></Link>
         <Link href="/posts/fetchData"><a>Fetch Data</a></Link>
      </>	    
    )
}
export default HomePage