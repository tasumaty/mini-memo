import { useState } from "react";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    setMessage(`投稿完了: ${data.title}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>📝 新規投稿</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", margin: "0 auto 20px" }}
        />
        <textarea
          placeholder="本文"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ display: "block", margin: "0 auto 20px" }}
        />
        <button type="submit">投稿</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
