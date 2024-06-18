import { MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode, { Options } from "rehype-pretty-code";

const prettyCodeOptions: Options = {
  theme: "github-dark-default",
};

export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
};
