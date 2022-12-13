import React from 'react';
import s from './Post.module.css'

type PostType = {
    message:string
    likes:number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://mobimg.b-cdn.net/v3/fetch/a3/a3b4e5ed83e97a654d4831cccb1d7e6a.jpeg?w=1470"/>
                {props.message}
                <div>
                <span>
                    {props.likes}
                </span>
                </div>
            </div>
        </div>

    );
};

