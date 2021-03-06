import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export default function Post({postData}){
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
      );
}

export async function getStaticPaths(){

    const paths =getAllPostIds();
    return{
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }){
    const postData = getPostData(params.id);
    console.log(postData)
    return {
        props: { postData: (await getPostData(params.id)) ?? null },
    };
}

