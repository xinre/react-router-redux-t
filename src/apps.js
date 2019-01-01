import React from 'react';
import { Provider } from "react-redux";
import App from './App';
import store from "./store";

export default class Apps extends React.Component{
    render(){
        return  (<Provider store={store}>
                    <App />
                </Provider>)
    }
} 