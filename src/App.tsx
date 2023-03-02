import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DilogsContainer";
import {Users} from "./components/Users/Users";


type AppPropsType = {

}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact render={() => <DialogsContainer
                    />}
                           path='/dialogs'/>
                    <Route exact render={() => <Profile
                    />} path='/profile'/>
                    <Route exact render={() => <Users />} path='/users'/>
                    <Route exact component={News} path='/news'/>
                    <Route exact component={Music} path='/music'/>
                    <Route exact component={Setting} path='/setting'/>
                    {/*<Profile />*/}

                </div>
            </div>
        </BrowserRouter>
    );
}



