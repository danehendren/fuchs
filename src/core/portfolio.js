import React from 'react';

export default class Portfolio extends React.Component {


    render() {
        return (
            <div>
                <h1>Here you will find a catalogue of my work throughout my studies</h1>

                <div className="portfolio-container">

                    <div className="img__wrap">
                      <a><img className="img__img" src="/portfolio/alicexmas.jpg" className="portfolio-image"/></a>
                      <div className="img__description_layer">
                        <p className="img__description">This image looks super neat.</p>
                      </div>
                    </div>


                    {/* <a><img src="/portfolio/alicexmas.jpg" className="portfolio-image"/></a> */}






                    {/* <a><img src="/portfolio/couchfox.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/tigerxmas.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/panxmas.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/xmastreecat.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/evilsanta.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/pencilowl.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/pencilpan.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/pencilfox.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/manycats.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/manyfox.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/multicats.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/darkcat.jpg" className="portfolio-image"/></a>
                    <a><img src="/portfolio/skelet.jpg" className="portfolio-image"/></a> */}

                </div>
            </div>
        )
    }
}
