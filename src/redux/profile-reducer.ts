
export type addPostActionCreatorType = {
    type: 'ADD-POST'
}
export type updateNewPostTextActionCreatorType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText:string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfileActionsType = addPostActionCreatorType | updateNewPostTextActionCreatorType

let initialState =  {
    posts: [
        {id: 1, message: 'Hi , how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
        newPostText: '1'
}

export const profileReducer = (state:ProfilePageType = initialState, action:ProfileActionsType):ProfilePageType => {
    switch (action.type){
        case 'ADD-POST':
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText =action.newText
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: 'ADD-POST'})

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}