import React from 'react';
import s from './Prodile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/store";
import {MyPostsContainers} from "./MyPosts/MyPostsContainer";


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainers dispatch={props.dispatch} posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    );
};

