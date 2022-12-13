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

type ProfilePageType = {
    posts:Array<PostType>
}

type DialogsPageType = {
    dialogs:Array<DialogsType>,
    messages:Array<MessageType>
}

export type RootStateType = {
        profilePage: ProfilePageType,
        dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11}
        ]
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
        ]}
}

export default state;

