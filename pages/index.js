// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle';

import Layout from '../views/layouts/mainLayout';
import Masthead from '../components/Masthead';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default () => (
  <Layout>
    <Masthead />
    <div className="container">
      <div className="card-deck">
        <div className="card">
          <i className="fas fa-weight text-success"></i>
          <div className="card-body">
            <h5 className="card-title">Track</h5>
            <p className="card-text">Track Food Intake, Water Intake, Weight, Potty Breaks and more.</p>
          </div>
        </div>
        <div className="card">
          <i className="fas fa-comment text-success"></i>
          <div className="card-body">
            <h5 className="card-title">Stay Informed</h5>
            <p className="card-text">Get recommendations and reminders on upcoming vet appointments.</p>
          </div>
        </div>
        <div className="card">
          <i className="fas fa-share text-success"></i>
          <div className="card-body">
            <h5 className="card-title">Share</h5>
            <p className="card-text">Save pet records and share any information with your vetinarian or even your pet sitter.</p>
          </div>
        </div>
      </div>
    </div>
    <style jsx> {`
                  .card {
                    text-align: center;
                  }

                  .card i {
                    font-size: 75px;
                    margin-top: 25px;
                  }

                  i:hover {
                    transition: all 1s;
                    transform: rotate(360deg);
                  }
              `}</style>
  </Layout>
);