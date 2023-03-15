import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainers} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "../../redux/profile-reducer";


type ProfileType = {
    profile:ProfilePropsType | null
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainers
            />
        </div>
    );
};

