import React, {MouseEventHandler, useState} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../redux/profile-reducer";

type MyPostType = {
    posts: Array<PostType>
    addPost:()=>void
    updateNewPostText:(text:string)=>void
    newPostText:string
}


export const MyPosts: React.FC<MyPostType> = (props) => {

    let postElements = props.posts.map((el, id) => <Post message={el.message} likes={el.likesCount} key={el.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    );
};

