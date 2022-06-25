import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {allBlogPosts, BlogPost} from "contentlayer/generated";
import {authors} from "../authors";
import path from "path";
import {useMDXComponent} from "next-contentlayer/hooks";
import {SEO} from "../components/seo";
import Image from "next/image";
import Link from "next/link";
import {Footer} from "../components/footer";
import {Nav} from "../components/nav";

export default function PathPage({
                                     post,
                                     similarPosts,
                                     author,
                                 }: InferGetStaticPropsType<typeof getStaticProps>) {
    const components = {
        img: ({src, alt}: { src: string; alt: string }) => {
            return (
                <img
                    className="m-auto"
                    alt={alt}
                    src={path.join(post.imagePath, src!)}
                />
            )
        },
        pre: (props: any) => <pre {...props} className="no-prose"/>,
    }

    const MdxSection = useMDXComponent(post.body.code);

    return (
        <>
            <SEO
                title={post.title}
                description={post.description}
                image={post.imageUrl}
                author={author.name}
                date={new Date(post.date)}
                type="article"
            />

            <Nav />

            <main className="wrapper py-10">
                <h1 className="text-4xl md:text-6xl text-center py-2 sm:py-0 max-w-[900px] m-auto font-bold mt-10">
                    {post.title}
                </h1>

                <div className="flex flex-col items-center mt-10">
                    <div className="flex-shrink-0">
                        <a href={"#"}>
                            <span className="sr-only">{author.name}</span>
                            <Image
                                src={author.profile}
                                width={60}
                                height={60}
                                className="rounded-full"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">
                        <a href={"#"}>{author.name}</a>
                    </p>
                    <span aria-hidden="true">&middot;</span>
                    <span>reading in {readTime(post.readTime)}</span>
                </div>

                <div className="prose prose-lg m-auto mt-6 px-4 md:px-0">
                    <MdxSection components={components}/>
                </div>
            </main>

            <SimilarPosts posts={similarPosts}></SimilarPosts>
            <Footer />
        </>
    )
}

const SimilarPosts = ({posts}: { posts: BlogPost[] }) => {
    if (posts.length === 0) {
        return null;
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Other related contents
                </h2>
                <div className="mt-6 pt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-12">
                        {posts.map((post) => (
                            <div key={post.href}>
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    <Link href={post.href}>
                                        <a className="hover:text-green-800 underline">
                                            {post.title}
                                        </a>
                                    </Link>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    {post.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = allBlogPosts.map(d => {
        return {
            params: {
                path: d.postPath.split("/").filter(p => !!p),
            },
        };
    });

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({params}: GetStaticPropsContext<{ path: string[] }>) {
    const post = allBlogPosts.find((p) => p.postPath == params!.path.join("/"));

    if (!post) {
        throw new Error("Post not found!");
    }

    const similarPosts = allBlogPosts.filter((p) => {
        for (let tag of post.tags) {
            if (p.tags.includes(tag)) {
                return p.path !== post.path
            }
        }
    })

    return {
        props: {
            post: post,
            author: authors.find(a => a.name === post.author) || authors[0],
            similarPosts: similarPosts,
        },
    };
}

const readTime = (rt: number) => {
    if (rt === 1) {
        return "1 minute";
    } else {
        return `${rt} minutes`;
    }
};
