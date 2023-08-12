export interface BlogPost {
  title: string;
  slug: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    title: "First Blog Post",
    slug: "first-blog-post",
    content: "# First Blog Post\n\n ## This is the content of my first blog post. More details can be found [here](https://example.com)."
  },
  {
    title: "Second Blog Post",
    slug: "second-blog-post",
    content: "# Second Blog Post\n\nThis is the content of my second blog post. Check out this awesome project [here](https://example.com)."
  },
  {
    title: "Third Blog Post",
    slug: "third-blog-post",
    content: "# Third Blog Post\n\nThis is the content of my third blog post. Learn more about this topic [here](https://example.com)."
  }
];

export default posts;
