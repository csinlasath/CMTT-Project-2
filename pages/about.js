import Layout from '../views/layouts/mainLayout';
import CardBackground from '../views/cardBackground';

export default () => (
    <Layout>
        <CardBackground>
            <h1 id="about-title" className="card-title text-success">About Project Bacchus</h1>
            <div className="container">
                <h5 id="description" className="text-dark">Description</h5>
                <p className="text-success">Our app uses client input to store pet health records and log care data to track pet exercise, appointments, feeding, medication and more.</p>

                <h5 id="Motivation" className="text-dark">Motivation</h5>

                <p className="text-success">Our team wanted to simplify being able to share and log pet information easily between pet owners and caregivers. Filing and tracking your pets health records over their lifetimes can be a lot of work. Over the years, your pet will have countless vet visits, possibly some injuries and at times will need to be in the care of others. This could be overwhelming to keep track of and provide that information to a pet sitter. Our app allows you to easily store, access and share critical pet information. No more digging in files for your pets old health records or writing detailed information every time you need a pet sitter.</p>

                <h5 id="Result" className="text-dark">Results</h5>

                <p className="text-success">Project Bacchus is an app that allows users to login, input and store pet information and continue to add to their file, logging details about pet health, medical treatment and daily needs.</p>
            </div>
        </CardBackground>
        <style jsx>{`
              p{
                font-size: 20px;
              }
              #about-title{
                  text-align: center;
              }
            `}</style>
    </Layout>
);