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
import state from "./redux/state";

export const App = () => {
    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages
    let posts = state.profilePage.posts
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact render={() => <Dialogs dialogs={dialogs} messages={messages}/>}
                           path='/dialogs'/>
                    <Route exact render={() => <Profile posts={posts}/>} path='/profile'/>
                    <Route exact component={News} path='/news'/>
                    <Route exact component={Music} path='/music'/>
                    <Route exact component={Setting} path='/setting'/>
                    {/*<Profile />*/}

                </div>
            </div>
        </BrowserRouter>
    );
}


