import {InferGetStaticPropsType} from "next";
import {getBlogData} from "../utils/getBlogData";
import {SEO} from "../components/seo";
import {PostPreview} from "../components/post-preview";

export default function Blog({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <SEO title="Blog"></SEO>
            {posts.map((post) => (
                <PostPreview
                    post={post.frontMatter}
                    author={post.author}
                    key={post.frontMatter.title}
                />
            ))}
        </>
    )
}

export async function getStaticProps() {
    const posts = getBlogData();

    return {
        props: {posts}
    }
}
