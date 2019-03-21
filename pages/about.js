import Layout from '../views/layouts/mainLayout';
import CardBackground from '../views/cardBackground';

export default () => (
    <Layout>
        <CardBackground>
            <h1 id="about-title" className="card-title text-success">About Project Bacchus</h1>
            <CardBackground>
                <div id="bacchus-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#bacchus-one" data-slide-to="0" className="active"></li>
                        <li data-target="#bacchus-two" data-slide-to="1" className="active"></li>
                        <li data-target="#bacchus-three" data-slide-to="2" className="active"></li>
                        <li data-target="#bacchus-four" data-slide-to="3" className="active"></li>
                        <li data-target="#bacchus-five" data-slide-to="4" className="active"></li>
                    </ol>
                    <div className="carousel-innner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/static/images/bacchus/bacchus-1.jpg" alt="First Slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/static/images/bacchus/bacchus-2.jpg" alt="Second Slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/static/images/bacchus/bacchus-3.jpg" alt="Third Slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/static/images/bacchus/bacchus-5.jpg" alt="Fourth Slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/static/images/bacchus/bacchus-6.jpg" alt="Fifth Slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#bacchus-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#bacchus-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </CardBackground>
            <div className="container about-container">
                <h5 id="description" className="text-dark">Description</h5>
                <p className="text-success">Our app uses client input to store pet health records and log care data to track pet exercise, appointments, feeding, medication and more.</p>

                <h5 id="Motivation" className="text-dark">Motivation</h5>

                <p className="text-success">Our team wanted to simplify being able to share and log pet information easily between pet owners and caregivers. Filing and tracking your pets health records over their lifetimes can be a lot of work. Over the years, your pet will have countless vet visits, possibly some injuries and at times will need to be in the care of others. This could be overwhelming to keep track of and provide that information to a pet sitter. Our app allows you to easily store, access and share critical pet information. No more digging in files for your pets old health records or writing detailed information every time you need a pet sitter.</p>

                <h5 id="Result" className="text-dark">Results</h5>

                <p className="text-success">Project Bacchus is an app that allows users to login, input and store pet information and continue to add to their file, logging details about pet health, medical treatment and daily needs.</p>
            </div>
        </CardBackground>
        <style jsx>{`
              .about-container {
                  margin-top: -80px;
              }
              h1 {
                  margin-top: 20px;
                  margin-bottom: -50px;
              }
              p{
                font-size: 20px;
              }
              #about-title{
                  text-align: center;
              }
            `}</style>
    </Layout>
);