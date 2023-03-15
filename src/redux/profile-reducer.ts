/*export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>*/
import {photosType} from "./users-reducer";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile:ProfilePropsType | null
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePropsType = {
    aboutMe:string
    contacts:ContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    userId:number
    photos:photosType
}
export type ContactsType = {
    facebook:string | null
    website:string | null
    vk:string | null
    twitter:string | null
    instagram:string | null
}

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

let initialState = {
    posts: [
        {id: 1, message: 'Hi , how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: '1',
    profile:null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST': {
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
        case 'UPDATE_NEW_POST_TEXT':
            return  {...state,
            newPostText:action.newText}
         case 'SET_USER_PROFILE':
            return  {...state,
            profile:action.profile}

        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: 'ADD_POST'} as const)

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}