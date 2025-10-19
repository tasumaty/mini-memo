export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/posts`);
  const posts = await res.json();
  const post = posts.find((p) => p.id === parseInt(params.id));
  return { props: { post } };
}

export default function Post({ post }) {
  if (!post) return <h2>記事が見つかりませんでした</h2>;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
