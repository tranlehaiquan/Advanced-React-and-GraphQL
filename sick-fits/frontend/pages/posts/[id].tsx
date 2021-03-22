import { useRouter } from "next/router";
import path from "path";
import { promises as fs } from "fs";

function Post({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <p>{post}</p>;
}

// This function gets called at build time
export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);
  console.log(filenames);

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  return {
    props: { post: params.id },
    // Re-generate the post at most once per second
    // if a request comes in
    // revalidate: 1,
  };
}

export default Post;
