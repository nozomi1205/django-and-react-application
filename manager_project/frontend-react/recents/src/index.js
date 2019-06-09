import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationMenu from './multi-component/navigationMenu';
import * as serviceWorker from './serviceWorker';
import PhotoText from "./multi-component/photoText";

try {
    ReactDOM.render(getDOM(), document.getElementById('root'));
    console.log("succeeded in rendering")
} catch (error) {
    console.log(error);
    console.log("erroor");
}

function getDOM() {
    // You have to make the first character capital to use it as a component
    return (
        <div>
            <NavigationMenu/>
            <PhotoText img="/static/img/IMG_1573.JPG" title="dog" description="picture of my dog"/>
            <PhotoText img="/static/img/Akadake2.jpg" title="climbed Mt.Akadake" description="the first climb of Mt.Akadake"/>
        </div>
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
