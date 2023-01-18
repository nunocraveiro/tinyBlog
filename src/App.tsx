import { useState, MouseEvent, useEffect } from 'react';
import './App.css';
import blogPost from './types';
import PostsGrid from './components/PostsGrid'
import fakeBlog from './fakeData';

function App() {
  // const [blogPosts, setBlogPosts] = useState<blogPost[]>(fakeBlog);
  const [blogPosts, setBlogPosts] = useState<blogPost[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://dummyjson.com/posts')
      const data = await response.json();
      setBlogPosts(data.posts);
    }
    getData()
  }, [])

  const tagHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.className === 'tagSection') {
      return;
    }
    const children = e.currentTarget.children;
    for (let i=0; i<children.length; i++) {
      children[i].className = 'tag';
    };
    target.className = 'tag chosen';
    if (target.innerHTML === 'All') {
      return setBlogPosts(fakeBlog);
    }
    return setBlogPosts(fakeBlog.filter((post: blogPost) => post.tags.includes(target.innerHTML.toLowerCase())));
  }  

  return (
    <div className="App">
      <h3 className='logo'>blog.</h3>
      <h1 className='blogTitle'>B L O G .</h1>
      <section className='tagSection' onClick={tagHandler}>
        <h3 className='tag chosen'>All</h3>
        <h3 className='tag'>Classic</h3>
        <h3 className='tag'>Crime</h3>
        <h3 className='tag'>Fiction</h3>
        <h3 className='tag'>History</h3>
        <h3 className='tag'>Magical</h3>
      </section>
      <PostsGrid blogPosts={blogPosts}/>
    </div>
  );
}

export default App;
