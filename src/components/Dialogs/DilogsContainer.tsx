import React from 'react';
import {
    DialogsPageType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dilogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogsPage:DialogsPageType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string)=>void
    sendMessage:()=>void
}

let mapStateToProps = (state:AppRootStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch ):MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))

        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



