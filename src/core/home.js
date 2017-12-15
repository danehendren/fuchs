import React from 'react';
import axios from './axios';
import { Link } from 'react-router';
import About from './about';
import Portfolio from './portfolio';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }



    componentDidMount() {

    }

    render() {

        return(
            <h1>THIS IS THE HOME PAGE, HOORAY!</h1>
        )
    }

}
