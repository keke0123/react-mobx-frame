import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Fruits from '../views/fruits';

function TopLayout(props, ref) {
    return (
        <div>
            layout page
            <Fruits></Fruits>
        </div>
    )
}

export default TopLayout;