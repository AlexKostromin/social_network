import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducers);


export type AppRootStateType = typeof reducers

export type ReduxStateType = ReturnType<AppRootStateType>