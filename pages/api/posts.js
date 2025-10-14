let posts = [
  {
    id: 1,
    title: "Next.jsとは何か",
    content: "SSRとSSGを統合したReactフレームワークです。",
  },
  {
    id: 2,
    title: "ReactとNext.jsの違い",
    content: "Next.jsはReactにルーティングとSSR機能を追加しています。",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    const newPost = { id: Date.now(), ...req.body };
    posts.push(newPost);
    res.status(201).json(newPost);
  }
}
