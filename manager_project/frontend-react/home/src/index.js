import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationMenu from './multi-component/navigationMenu';
import Earth from './multi-component/Earth';
import * as serviceWorker from './serviceWorker';

try {
    ReactDOM.render(getDOM(), document.getElementById('root'));
    console.log("succeeded in rendering")
} catch (error) {
    console.log(error);
}

function getDOM() {
    // You have to make the first character capital to use it as a component
    return (
        <div>
            <NavigationMenu/>
            <Earth/>
        </div>
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
