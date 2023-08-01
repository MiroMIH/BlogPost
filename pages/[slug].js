import blogPosts from '../data/blog-posts.json';
import Layout from '../components/Layout';

function BlogPost({ post }) {
    return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>Author: {post.author}</p>
        <p>Date: {post.date}</p>
      </div>
    </Layout>
    );
  }
  
  export async function getStaticPaths() {
    const paths = blogPosts.map((post) => ({
      params: { slug: post.slug },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    return { props: { post } };
  }
  
  export default BlogPost;