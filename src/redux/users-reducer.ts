

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

let initialState = {
    users: [
        {id: 1, fullName: 'Sanya', status: 'I am boss', location: {city:'Bryansk', country:'Russia'}},
        {id: 2, fullName: 'Olya', status: 'I am boss', location: {city:'Moscow', country:'Russia'}},
        {id: 3, fullName: 'Vova', status: 'I am boss', location: {city:'Minsk', country:'Belarus'}},
    ]
}

export const usersReducer = (state: any = initialState, action: ProfileActionsType): any => {
    switch (action.type) {

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