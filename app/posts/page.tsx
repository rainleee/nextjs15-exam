'use client';

import { getPosts } from '@/lib/posts';
import { useEffect, useState } from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    getPosts().then((res) => {
      if (res.posts) setPosts(res.posts);
    });
  }, []);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <article key={post.id} className="rounded-lg border p-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
            <div className="mt-2 text-sm text-gray-500">
              작성자: {post.author} | 작성일: {post.createdAt}
            </div>
          </article>
        ))}
    </>
  );
};

export default PostsPage;
