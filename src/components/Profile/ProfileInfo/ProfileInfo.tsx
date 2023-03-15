import React from 'react';
import s from './ProdileInfo.module.css'
import {ProfilePropsType} from "../../../redux/profile-reducer";
import {Preloader} from "../../сommon/Preloader/Preloader";

type ProfileInfoType = {
    profile:ProfilePropsType | null
}

export const ProfileInfo:React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div >
            <div>
                <img src='https://images6.alphacoders.com/568/568500.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div><span>{props.profile.fullName}</span></div>
                <img src={props.profile.photos.large}/>
                <div><span>{props.profile.contacts.facebook}</span></div>
                <div><span>{props.profile.aboutMe}</span></div>
                <div><span>{props.profile.lookingForAJob}</span></div>
                <div><span>{props.profile.lookingForAJobDescription}</span></div>


            </div>
        </div>
    );
};

