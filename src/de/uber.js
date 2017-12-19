import React from 'react';

export default class Uber extends React.Component {


    render() {
        return (
            <div>
                <div className="about-page-main-image-container">
                    <a><img src="/images/couchcouple.jpg" className="about-page-main-image"/></a>
                </div>

                <div className="about-me-container">
                    <div className="about-me-border">
                        <a><img src="/images/sitfox.jpg" className="about-me-image"/></a>
                        <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        )
    }
}
