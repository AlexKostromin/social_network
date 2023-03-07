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
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
export type usersType = {
    id:number
    photos:photosType
    followed:boolean
    name:string
    status:string
    location: locationType
}
export type photosType = {
    small: string
    large:string
}
export type locationType = {
    city:string
    country:string
}

let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount:0,
    currentPage:1
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
