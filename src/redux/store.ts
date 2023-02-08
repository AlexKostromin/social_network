import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";



export type StoreType = {
    _state: RootStateType
    onChange: (_state: RootStateType) => void
    subscribe: (callback: () => void) => void
    getState: () => void
    dispatch: (action: any) => void
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>,
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
    sidebar:any
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi , how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: '1'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    onChange() {
        alert('Ok')
        console.log('State changed')
    },
    subscribe(callback) {
        this.onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this.onChange(this._state)
    }
}




export default store;

