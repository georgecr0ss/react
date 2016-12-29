import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return(
            <div className="container">
                <nav className="navbar navbar-default">
                    <ul id="header">
                        <li className="tabs"><Link to="/">Home</Link></li>
                        <li className="tabs"><Link to="counter">Counter</Link></li>
                        <li className="tabs"><Link to="">Store from Scratch</Link></li>
                        <li className="tabs"><Link to="avoid_mutation">Avoid Mutation</Link></li>
                        <li className="tabs"><Link to="">Isomorphic React Redux</Link></li>
                    </ul>
                </nav>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
