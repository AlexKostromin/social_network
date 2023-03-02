import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((el, id) => <DialogItem id={el.id} name={el.name} key={el.id}/>)
    let messagesElements = props.dialogsPage.messages.map((el, id) => <Message id={el.id} message={el.message} key={el.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    const onSendMessageClick = () => {
        props.sendMessage()
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

