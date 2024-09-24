import path from "path";
import { readFile } from "node:fs";
import { promisify } from "util";

import { notFound } from "next/navigation";
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxOptions } from "@/app/utils";

const postsPath = path.join(process.cwd(), "/src/posts");
const readFileAsync = promisify(readFile);

export default async function Home() {
  try {
    const source = await readFileAsync(`${postsPath}/${'test'}.mdx`, "utf8");
    const { content } = await compileMDX({ source, options: mdxOptions});
    
    return (
      <article className="prose lg:prose-xl w-full max-w-3xl m-auto px-4">
        {content}
      </article>
    );

  } catch (e) {
    notFound();
  }
}
