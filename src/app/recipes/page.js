import Link from "next/link";

export default async function Postspage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  return (
    <div>
      <h2>My posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
