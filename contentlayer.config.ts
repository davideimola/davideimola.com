import {defineDocumentType, makeSource} from "contentlayer/source-files"
import path from "path";
// @ts-ignore
import prism from "@mapbox/rehype-prism";

const WORDS_PER_MINUTE = 225;

export const BlogPost = defineDocumentType(() => ({
    name: "BlogPost",
    filePathPattern: `blog/**/*.(md|mdx)`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        description: {
            type: "string",
            description: "The description of the post",
            required: true,
        },
        tags: {
            type: "list",
            description: "The tags of the post",
            of: {
                type: "string",
            },
            default: [],
        },
        date: {
            type: "date",
            description: "Published date",
            required: true,
        },
        author: {
            type: "string",
            required: true,
            description: "Author of the post",
            default: "davideimola",
        },
        image: {
            type: "string",
            required: true,
            description: "Featured image",
        },
        path: {
            type: "string",
            description: "Path of the post",
            required: false,
        },
        slug: {
            type: "string",
        },
        draft: {
            type: "boolean",
            default: false,
        },
    },
    computedFields: {
        imagePath: {
            type: "string",
            resolve: (content) => path.join("/.content", content._raw.sourceFileDir)
        },
        imageUrl: {
            type: "string",
            resolve: (content) => path.join("/.content", content._raw.sourceFileDir, content.image),
        },
        readTime: {
            type: "number",
            resolve: (post) => readingTime(post.body.raw),
        },
        postPath: {
            type: "string",
            resolve: (post) => getPath(post.path, post._raw.sourceFilePath),
        },
        href: {
            type: "string",
            resolve: (post) => {
                const postPath = getPath(post.path, post._raw.sourceFilePath);
                return path.join("/", postPath);
            },
        },
    },
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [BlogPost],
    mdx: {
        rehypePlugins: [prism]
    }
});

function readingTime(text: string) {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / WORDS_PER_MINUTE);
}

const getPath = (path: string | undefined, file: string) => {
    if (!path) {
        return extractPathFromFile(file);
    }
    if (path.startsWith("/")) {
        path = path.substring(1);
    }
    if (path.endsWith("/")) {
        path = path.slice(0, -1);
    }
    return path;
};

const extractPathFromFile = (file: string) => {
    const filename = file
        .replace(/index.md[x]?$/, "")
        .split("/")
        .filter((d) => !!d)
        .pop()!
        .split(".")[0];
    return filename.replace(
        /([0-9]*)-([0-9]*)-[0-9]*-(.*)$/,
        (_, yy, mm, slug: string) => {
            return `${yy}/${mm}/${slug.toLowerCase()}`;
        }
    );
};
