export type followACType = {
    type: 'FOLLOW'
    userId: number
}
export type unfollowACType = {
    type: 'UNFOLLOW'
    userId: number
}
export type setUsersType = {
    type: 'SET_USERS'
    users:Array<usersType>
}
export type usersActionsType = followACType | unfollowACType | setUsersType

export type UsersPageType = {
    users:Array<usersType>
}
export type usersType = {
    id:number
    photoUrl:string
    followed:boolean
    fullName:string
    status:string
    location: locationType
}
export type locationType = {
    city:string
    country:string
}

let initialState = {
    users: [

    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: usersActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed:true} : el)
            }
            case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed:false} : el)
            }
        case 'SET_USERS':
            return {
                ...state,
                users:[...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUserAC = (users:Array<usersType>) => ({type:'SET_USERS', users})
