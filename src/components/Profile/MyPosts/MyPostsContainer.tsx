import React from 'react';
import {
    addPostActionCreator,
    PostType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    newPostText:string
    posts:Array<PostType>
}

type MapDispatchToPropsType = {
    addPost: ()=>void
    updateNewPostText:(text:string)=>void
}


const mapStateToProps = (state:AppRootStateType):MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
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

