import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ padding: "10px" }}>
        <Link style={{ marginRight: "20px" }} href="/">
          🏠 Home
        </Link>{" "}
        <Link href="/post/new">📝 New Post</Link>
      </header>
      <main style={{ padding: "20px" }}>{children}</main>
      <footer style={{ textAlign: "center", padding: "10px", marginTop: "30px" }}>
        © 2025 Mini Blog
      </footer>
    </div>
  );
}
