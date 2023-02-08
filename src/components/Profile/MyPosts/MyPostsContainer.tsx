import React, {MouseEventHandler, useState} from 'react';
import {PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostType = {
    posts: Array<PostType>
    dispatch: (action: any) => void
    newPostText: string

}


export const MyPostsContainers: React.FC<MyPostType> = (props) => {
    let addPost = () => {
        props.store.dispatch({addPostActionCreator})
    }

    let onPostChange = (text:string) => {
    let action = updateNewPostTextActionCreator(text)
      props.dispatch({action})
    }

    return (
        <MyPosts newPostText={onPostChange} addPost={addPost} posts={props.posts}/>
    );
};

