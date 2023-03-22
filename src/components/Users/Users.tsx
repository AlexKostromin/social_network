import React from 'react'
import sl from "./Users.module.css";
import userPhoto from "../../assets/images/users-vector-icon-png_260862.png";
import {usersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    users: Array<usersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(el =>
                    <span key={el} className={` ${props.currentPage === el && sl.selectedPage}`}
                          onClick={() => props.onPageChanged(el)}
                    >{el}</span>
                )}
            </div>
            {
                props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small != null ? el.photos.small : userPhoto}
                                 className={sl.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY":"478707ce-8c13-49b6-ac43-f9361f990c22"
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(el.id)
                                        }
                                    })

                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY":"478707ce-8c13-49b6-ac43-f9361f990c22"
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(el.id)
                                        }
                                    })
                            }}>FOLLOW</button>}

                    </div>
                </span>
                    <span>
                <span>
                    <div>{el.name}</div><div>{el.status}</div>
                </span>
                    <span>
                            <div>
                                {'el.location.country'}
                            </div>
                        <div>
                              {'el.location.city'}
                        </div>
                </span>
            </span>
                </div>)
            }
        </div>
    )
}