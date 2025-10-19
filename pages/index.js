import Link from "next/link";

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
    const posts = await res.json();
    return { props: { posts } };
  } catch (e) {
    console.error("フェッチエラー", e);
    return { props: { posts: [] } };
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>📰 記事一覧</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/post/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <Link href={`post/new`}>新規作成</Link>
    </div>
  );
}
