import path from "path";
import { readFile } from "node:fs";
import { promisify } from "util";

import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc'

const postsPath = path.join(process.cwd(), "/src/posts");
const readFileAsync = promisify(readFile);

const getPost = async (post: string) => {
  const fileContent = await readFileAsync(`${postsPath}/${post}.mdx`, "utf8");

  return fileContent;
};

export default async function Home() {
  try {
    const mdxText = await getPost("test");

    return <MDXRemote source={mdxText} />;

  } catch (e) {
    notFound();
  }
}
