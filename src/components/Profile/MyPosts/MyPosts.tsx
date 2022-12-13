import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../redux/state";

type MyPostType = {
    posts:Array<PostType>
}

export const MyPosts: React.FC<MyPostType> = (props) => {

    let postElements = props.posts.map((el) => <Post message={el.message} likes={el.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    );
};

