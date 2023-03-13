import React from 'react'
import sl from "./Users.module.css";
import userPhoto from "../../assets/images/users-vector-icon-png_260862.png";
import {usersType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<usersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged:(pageNumber: number)=>void
}

export const Users = (props:UsersPropsType) => {

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
                        <img src={el.photos.small != null ? el.photos.small : userPhoto} className={sl.userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unfollow(el.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                props.follow(el.id)
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