import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import asyncComponent from './untils/asynccomponent';
const RouterOut = asyncComponent(() => import("./component/routerOut"));
const Component1 = asyncComponent(() => import("./component/component1"));
const Component2 = asyncComponent(() => import("./component/component2"));


const App =() => (
      <Router>
        <div>
          <span>我是导航</span>
          <Switch>
            <Route path="/" exact component={RouterOut}/>
            <Route key='component1' path="/component1" component={Component1}/>
            <Route key='component2' path='/component2' component={Component2}/>
          </Switch>
        </div>
      </Router>
)

export default App;
