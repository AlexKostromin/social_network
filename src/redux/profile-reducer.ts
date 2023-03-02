/*export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>*/
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

let initialState = {
    posts: [
        {id: 1, message: 'Hi , how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: '1'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return  {
                ...state,
                newPostText:'',
                posts: [...state.posts, newPost]
            }
        }
        case 'UPDATE-NEW-POST-TEXT':
            return  {...state,
            newPostText:action.newText}
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}