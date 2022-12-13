import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    name: string
    id: number
}
export const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}