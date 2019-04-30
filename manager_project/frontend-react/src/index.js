import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InchToCm from './multi-component/inchToCm'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(getDOM(), document.getElementById('root'));

function getDOM() {
    // You have to make the first character capital to use it as a component
    return (
        <div>
            <App/>
            <InchToCm/>
        </div>
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
