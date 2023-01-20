import React, {MouseEventHandler, useState} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostType> = (props) => {

    let postElements = props.posts.map((el, id) => <Post message={el.message} likes={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current!.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    );
};

