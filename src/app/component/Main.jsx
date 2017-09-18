import React from 'react';

export class Main extends React.Component {

    render() {
        return(
            <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                        onClick={() => this.props.changeUsername('Anna')}>Change the Username</button>
                </div>
            </div>
        </div>
        );
    }
}