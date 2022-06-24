import {BlogPost} from "contentlayer/generated";
import {Author} from "../authors";
import Link from "next/link";

interface PostPreviewProps {
    post: Omit<BlogPost, "body">;
    author: Author;
}

export const PostPreview = ({ post, author }: PostPreviewProps) => {
    return (
        <Link href={post.href}>
            <a key={post.title}>
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <hr/>
            </a>
        </Link>
    );
};
