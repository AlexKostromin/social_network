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
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state:RootStateType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}

export const App = (props:AppPropsType) => {
    let dialogs = props.state.dialogsPage.dialogs
    let messages = props.state.dialogsPage.messages
    let posts = props.state.profilePage.posts
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact render={() => <Dialogs dialogs={dialogs} messages={messages}/>}
                           path='/dialogs'/>
                    <Route exact render={() => <Profile addPost={props.addPost}
                                                        profilePage={props.state.profilePage}
                                                        updateNewPostText={props.updateNewPostText}
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


