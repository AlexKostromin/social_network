import React from "react";
import sl from './Users.module.css'
import {usersType} from "../../redux/users-reducer";
import  axios from "axios";
import userPhoto from '../../assets/images/users-vector-icon-png_260862.png'

export type UsersPropsType = {
    users: Array<usersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
    totalUsersCount:number
    pageSize:number
    currentPage:number
}



export class Users extends React.Component<UsersPropsType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res)=>{
                this.props.setUsers(res.data.items)
            })
    }
    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize
        let pages = []

        for (let i = 0; i<=pagesCount; i++){
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(el=>
                    <span className={` ${this.props.currentPage === el && sl.selectedPage}`}>{el}</span>
                )}
            </div>
            {
                this.props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small: userPhoto} className={sl.userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                this.props.unfollow(el.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
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
    }
}