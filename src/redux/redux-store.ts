import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(rootReducer);


export type AppRootStateType = ReturnType<typeof rootReducer>

