
export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>,
    newMessageBody: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}

export type sendMessageActionCreatorType = {
    type:'SEND--MESSAGE'
}
export type updateNewMessageBodyActionCreatorType = {
    type:'UPDATE-NEW-MESSAGE-BODY'
    body:string
}

type DialogsActionsType = sendMessageActionCreatorType | updateNewMessageBodyActionCreatorType

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Andrey'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'You'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state:DialogsPageType = initialState, action:DialogsActionsType):DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND--MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }

}


export const sendMessageActionCreator = () => ({type: 'SEND--MESSAGE'})
export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    }
}