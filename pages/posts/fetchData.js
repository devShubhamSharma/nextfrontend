export default function FetchData(props){
    return <h1>Number of posts:</h1>;
}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json();
    console.log(json.length)
    var numberOfPosts = json.length;
    return {
       props: {post: numberOfPosts} 
    }
}
