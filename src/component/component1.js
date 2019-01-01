import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import Fetch from "../untils/fetchFun";
import {returnFun} from '../action/firstAction.js';

@connect(
    ({
        reduxState
    }) => ({
        data:reduxState
    }),
    {returnFun}
)


export default class Component1 extends Component{
    async componentDidMount(){
        // const e =await Fetch.fetch({apiName:"https://gank.io/api/data/Android",
        // sumparams:{mothod:'get'}});
        // console.log(e);
        const {returnFun} = this.props;
        returnFun()
    }
    // testTsFun(){
    //     let x: [string,number];
    //     x=['hello',66];
    //     return(
    //         <p>re</p>
    //     )
    // }
    render(){
        const {data} = this.props;
        console.log(6666888,data)
        return (
           <div>
               <p>component1</p>
               <Link to='/component2/NestComponent1'><p>nestcomponent1</p></Link>
           </div>
        )
    }
}