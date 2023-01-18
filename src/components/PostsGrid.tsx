import blogPost from '../types';
import Post from './Post';
import './PostsGrid.css';

type Props = {
    blogPosts: blogPost[]
}

const PostsGrid = (props: Props) => {
    return (
        <section className='postsGrid'>
            {props.blogPosts.map((post: blogPost) => <Post post={post}/>)}
        </section>
    )
}

export default PostsGrid;