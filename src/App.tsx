import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dilogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";


type AppPropsType = {
    dispatch: (action: any) => void
    store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {
    let dialogs = props.store._state.dialogsPage.dialogs
    let messages = props.store._state.dialogsPage.messages
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact render={() => <Dialogs store={props.store}
                                               />}
                           path='/dialogs'/>
                    <Route exact render={() => <Profile dispatch={props.store.dispatch}
                                                        profilePage={props.store._state.profilePage}
                    />} path='/profile'/>
                    <Route exact component={News} path='/news'/>
                    <Route exact component={Music} path='/music'/>
                    <Route exact component={Setting} path='/setting'/>
                    {/*<Profile />*/}

                </div>
            </div>
        </BrowserRouter>
    );
}


