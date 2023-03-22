export type setUserDataType = {
    type: 'SET_USER_DATA'
    data: dataType
}

type dataType = {
    userId: string,
    email:null | string,
    login:null | string
    isAuth:boolean
}
export type authActionsType = setUserDataType
export type AuthReducerType = {
    data: dataType
}

let initialState = {
    data:{
        userId: '2',
        email:null ,
        login:null,
        isAuth:false
    }
}

export const authReducer = (state: AuthReducerType = initialState, action: authActionsType): AuthReducerType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                data:{...state.data, isAuth:true}
            }

        default:
            return state
    }
}


export const setUserData = (userId: string, email:string | null, login:string|null) => (
    {type: 'SET_USER_DATA', data:{email,login,userId}
    } as const)

