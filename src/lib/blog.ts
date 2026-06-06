import { getCollection } from 'astro:content';

// How many posts per page on the blog index. Change this to re-paginate.
export const POSTS_PER_PAGE = 9;

/** Published (non-draft) posts, newest first. */
export async function getSortedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
