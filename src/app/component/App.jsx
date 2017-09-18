import React from 'react';
import {Main} from './Main.jsx';
import {User} from './User.jsx';

export class App extends React.Component {

    render() {
        return(
            <div className="container">
            <Main />
            <User />
            </div>

        );
    }

}