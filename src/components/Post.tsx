import { MouseEvent } from 'react';
import blogPost from "../types";
import './Post.css';

type Props = {
    post: blogPost;
}

const Post = (props: Props) => {
    const readMoreHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const target = e.currentTarget;
        if (target.innerHTML === 'Hide full post') {
            target.parentElement!.children[2].innerHTML = `${props.post.body.slice(0, 100)}...`;
            return target.innerHTML = 'Read full post';
        }
        target.parentElement!.children[2].innerHTML = props.post.body;
        return target.innerHTML = 'Hide full post';
    }

    return (
        <div className="post">
            <img className="postImg" src={`https://source.unsplash.com/random/360x240/?sig=${props.post.id}/`} alt="blog post" />
            <h3 className="postTitle">{props.post.title}</h3>
            <p className="postBodyPreview">{props.post.body.slice(0, 100)}...</p>
            <div className="postTags">
                {props.post.tags.map((tag: string) => <p>#{tag}</p>)}
            </div>
            <button className="readBtn" onClick={readMoreHandler}>Read full post</button>
        </div>
    )
}

export default Post;