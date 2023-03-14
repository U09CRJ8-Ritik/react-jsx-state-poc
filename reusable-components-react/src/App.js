import React from 'react';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css';

const App = () => {
    return (
        <div>

            <section className='hero is-primary'>
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>

            </section>



            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard
                                title='Alexa'
                                handle='@alexa99'
                                image={AlexaImage}
                                description="Alexa is made by Amazon" />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title='Cortana'
                                handle='@cortana32'
                                image={CortanaImage}
                                description="Cortana is made by Microsoft" />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title='siri'
                                handle='@siri01'
                                image={SiriImage}
                                description="Siri is made by Apple" />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default App
