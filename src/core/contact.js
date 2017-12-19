import React from 'react';

export default class Contact extends React.Component {


    render() {
        return (
            <div>
                <div className="contact-form-wrapper">
                    <div className="contact-form-container">
                        <textarea placeholder="Name"></textarea>
                        <textarea placeholder="E-Mail"></textarea>
                        <textarea placeholder="Subject"></textarea>
                        <textarea placeholder="Message" className="contact-message"></textarea>
                        <button>Submit</button>
                    </div>
                </div>


            </div>
        )
    }


}
