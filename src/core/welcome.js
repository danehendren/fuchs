import React from 'react';
import Individualshop from '../cart/individualshop'

export default class Welcome extends React.Component {


    render() {
        return (
            <div>
                <h1>WELCOME PAGE BUDDY</h1>
                <a className="welcome-page-main-image"><img src="/images/princeimage.png" className="prince-image"/></a>
            </div>
        )
    }
}
