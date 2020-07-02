import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = ({title, slug}) => {
    return (<li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>);
}

export default () => {
    return (
        <Layout>
            <ul>
                <PostLink slug="react-post" title="React"/>
                <PostLink slug="next-post" title="Next"/>
                <PostLink slug="vue-post" title="Vue"/>
            </ul>
        </Layout>
    );
}