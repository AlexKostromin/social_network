import React from 'react';
import './App.css';

import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DilogsContainer";
import UsersContainers from "./components/Users/UsersContainers";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


type AppPropsType = {

}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route  render={() => <DialogsContainer
                    />}
                           path='/dialogs'/>
                    <Route  render={() => <ProfileContainer
                    />} path='/profile/:userId?'/>
                    <Route  render={() => <UsersContainers />} path='/users'/>
                    <Route  component={News} path='/news'/>
                    <Route  component={Music} path='/music'/>
                    <Route  component={Setting} path='/setting'/>
                    {/*<Profile />*/}

                </div>
            </div>
        </BrowserRouter>
    );
}



