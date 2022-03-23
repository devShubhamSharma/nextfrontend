import Link from "next/link";
import Container from "../../components/container";

import { GetPostData } from '../../lib/posts';

function Post({postData}){
    const { id, title, body } = postData;
    var nextId = (+id+1);
    var prevId = (+id-1);
    return(
        <div>
        <Container>
            <b>ID:</b> {id}
            <br />
            <b>Title:</b>{title}
            <br />
            <b>Body:</b> {body}
        </Container>
        <Container>
            <Link href={{
                pathname: '/posts/[id]',
                query: { id: prevId },
            }}>Prev</Link>
            <Link href={{
                pathname: '/posts/[id]',
                query: { id: nextId },
            }}>Next</Link>
        </Container>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } },
            { params: { id: '6' } },
            { params: { id: '7' } },
            { params: { id: '8' } }
        ],
        fallback: false
    }
}
 
export async function getStaticProps({ params }) {
    var postData = GetPostData(params.id);
    console.log(postData);
    return {
        props: {
            postData
        }
    }
}
export default Post;