import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUserAC, unfollowAC, usersType} from "../../redux/users-reducer";

type MapStateToPropsType = {
    users: Array<usersType>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<usersType>) => {
            dispatch(setUserAC(users))
        }
    }
}
export const UsersContainers = connect(mapStateToProps, mapDispatchToProps)(Users)