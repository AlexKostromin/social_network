import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/state";


type DialogsPropsType = {
    dialogs:Array<DialogsType>,
    messages:Array<MessageType>
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map((el, id) => <DialogItem id={el.id} name={el.name} />)
    let messagesElements = props.messages.map((el, id) => <Message id={el.id} message={el.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

