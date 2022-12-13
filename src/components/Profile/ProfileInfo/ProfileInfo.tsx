import React from 'react';
import s from './ProdileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://images6.alphacoders.com/568/568500.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

