import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state:any) => {
    return {
        newPostText: state.newPostText,
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
       addPost:()=> {
           dispatch(addPostActionCreator())
       },
       updateNewPostText: (text:string)=> {
           dispatch(updateNewPostTextActionCreator(text))
       }
    }
}

export const MyPostsContainers = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

