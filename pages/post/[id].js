export async function getServerSideProps({ params }) {
  const res = await fetch("http://localhost:3000/api/posts");
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
