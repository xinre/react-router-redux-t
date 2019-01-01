import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { Route,Switch} from "react-router-dom";
import asyncComponent from '../untils/asynccomponent';
const NestComponent1 = asyncComponent(() => import('./nestComponent1'));
const NestComponent2 = asyncComponent(() => import('./nestComponent2'));

export default class Component2 extends Component{
    state={
        id:6,
    }
    render(){
        return (
           <div>
               <p>component2</p>
               <Link to={{pathname:'/component2/NestComponent1',query: '我是通过query传值 '}}><p>nestcomponent1</p></Link>
               <Link to={{pathname:`/component2/${this.state.id}`,state: { number: 88 }}}><p>nestcomponent2</p></Link>

                <Switch>
                    <Route path='/component2/NestComponent1' component={NestComponent1}/>
                    <Route path='/component2/:id' component={NestComponent2}/>
                </Switch>
           </div>
        )
    }
}