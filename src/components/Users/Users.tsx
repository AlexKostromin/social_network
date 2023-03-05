import React from "react";
import sl from './Users.module.css'
import {usersType} from "../../redux/users-reducer";

export type UsersPropsType ={
    users:Array<usersType>
    follow:(userId: number)=>void
    unfollow:(userId: number)=>void
    setUsers:(users:Array<usersType>)=>void
}



export let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl:'http://cdn1.flamp.ru/a992cfb02dd71b2dc22b2f577067ddd8.jpg',
                followed: false,fullName: 'Sanya',status: 'I am boss',location: {city: 'Bryansk', country: 'Russia'}        },
            {id: 2,  photoUrl:'http://cdn1.flamp.ru/a992cfb02dd71b2dc22b2f577067ddd8.jpg',
                followed: true, fullName: 'Olya', status: 'I am boss', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3,  photoUrl:'http://cdn1.flamp.ru/a992cfb02dd71b2dc22b2f577067ddd8.jpg',
                followed: false, fullName: 'Vova', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}}
        ])
    }

    return <div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div >
                        <img src={el.photoUrl} className={sl.userPhoto} />
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={()=>{props.unfollow(el.id)}}>UNFOLLOW</button>
                            : <button onClick={()=>{props.follow(el.id)}}>FOLLOW</button>}

                    </div>
                </span>
                <span>
                <span>
                    <div>{el.fullName}</div><div>{el.status}</div>
                </span>
                    <span>
<div>
    {el.location.country}
</div>
                        <div>
                            {el.location.city}
                        </div>
                </span>
            </span>
            </div>)
        }
    </div>
}