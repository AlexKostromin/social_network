import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsType,
    MessageType,
    StoreType,
} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    store: StoreType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.store._state.dialogsPage
    let dialogsElements = state.dialogs.map((el, id) => <DialogItem id={el.id} name={el.name}/>)
    let messagesElements = state.messages.map((el, id) => <Message id={el.id} message={el.message}/>)
    let newMessageBody = state.newMessageBody
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder='Enter your message'
                            onChange={onNewMessageChange}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

