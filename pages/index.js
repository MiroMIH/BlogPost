// pages/index.js
import blogPosts from '../data/blog-posts.json';
import Layout from '../components/Layout';
function Home() {
    return (
        <Layout>
      <div className="flex items-center justify-center m-4">
        <h1 className="text-lg text-neutral-100 font-mono border-2 p-6  w-full text-center" >Blog Post Website with multiple Posts</h1>
      </div>
      <h1 className='text-4xl text-neutral-100 font-mono m-8  '>Blog Posts : </h1>
      <ul className='text-lg text-neutral-100 font-mono m-8'>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
      </Layout>
    );
  }
  
  export default Home;