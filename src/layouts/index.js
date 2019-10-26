import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Fruits from '../views/fruits';
import Test1 from '../views/test1';
import './style.scss';

function TopLayout(props, ref) {
    return (
        <div className={'container-TopLayout'}>
            layout page
            <Router>
                <div className={'link-box'}>
                    <Link to='/test1'>test1</Link>
                    <Link to='/test2'>test2</Link>
                </div>
                <Switch>
                    <Route path={'/test1'} component={Fruits}></Route>
                    <Route path={'/test2'} component={Test1}></Route>
                    {/* <Fruits></Fruits> */}
                </Switch>
            </Router>
        </div>
    )
}

export default TopLayout;