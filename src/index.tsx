import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import { store } from './redux/redux-store';


export let rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App  dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderTree()
store.subscribe(()=>{
    let state = store.getState()
    rerenderTree()
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
