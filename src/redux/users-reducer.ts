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
    users: Array<usersType>
}
export type setCurrentPageType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type setTotalUserCountType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}
export type toggleIsFetcingType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
export type usersActionsType = followACType | unfollowACType | setUsersType | setCurrentPageType | setTotalUserCountType | toggleIsFetcingType

export type UsersPageType = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type usersType = {
    id: number
    photos: photosType
    followed: boolean
    name: string
    status: string
    location: locationType
}
export type photosType = {
    small: string
    large: string
}
export type locationType = {
    city: string
    country: string
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state: UsersPageType = initialState, action: usersActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching:action.isFetching
            }
        default:
            return state
    }
}


export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<usersType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUserCount = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: "TOGGLE_IS_FETCHING",
    isFetching
} as const)
