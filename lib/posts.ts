import posts from '@/lib/posts.json';

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts;
}

export async function getPostById(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts.posts.find((post) => post.id === id);
}
