import React, {MouseEventHandler, useState} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostType = {
    posts: Array<PostType>
    dispatch: (action: any) => void
    newPostText: string

}


export const MyPosts: React.FC<MyPostType> = (props) => {

    let postElements = props.posts.map((el, id) => <Post message={el.message} likes={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.dispatch({addPostActionCreator})
    }

    let onPostChange = () => {
        let text = newPostElement.current!.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch({action})
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

