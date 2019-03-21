import Layout from "../views/layouts/mainLayout";
import CardBackground from "../views/cardBackground";

export default () => (
  <Layout>
    <CardBackground>
      <h1 id="project-features" className="card-title text-success">
        Project Bacchus Features
      </h1>
    </CardBackground>
    <CardBackground>
      <h1 id="user-login" className="card-title text-success">
        User Login
      </h1>
      <div className="container">
        <h5 id="signin" className="text-dark">
          Create your account
        </h5>

        <ul>
    
          <li>We save your information for easy login.</li>
          <li>
            Our privacy policy protect our users data, we do not share your
            email with anyone.
          </li>
          <li>Users can share pet profile with other users. </li>
        </ul>
      </div>
    </CardBackground>
    <CardBackground>
      <h1 id="pet-profile" className="card-title text-success">
        Pet Profiles
      </h1>
      <div className="container">
        <h5 id="petprofile" className="text-dark">
          Add your pets
        </h5>

        <ul>
          <li>
            Make a profile for each pet. Create an unlimited number of profiles.
          </li>
          <li>Upload your pet's picture.</li>
          <li>
            Store your pets name, birthday, breed and other important details.
          </li>
        </ul>
      </div>
    </CardBackground>
    <CardBackground>
      <h1 id="logging-feature" className="card-title text-success">
        Logging
      </h1>
      <div className="container">
        <h5 id="logging" className="text-dark">
          Easily track daily information about your pet with logs for
        </h5>
        <ul>
          <li>Food and water</li>
          <li>Medicine </li>
          <li>Weight and exercise</li>
          <li>Potty breaks</li>
          <li>Notes</li>
        </ul>
      </div>
    </CardBackground>
    <CardBackground>
      <h1 id="records-feature" className="card-title text-success">
        Medical Records
      </h1>
      <div className="container">
        <h5 id="records" className="text-dark">
          Add your pets medical records and store them on their profile.
        </h5>
        <ul>
          <li>
            Easy access your pet's veternarian name and contact information.
          </li>
          <li>Keep track of immunizations and other medical history.</li>
          <li>Upload medical documents for pets.</li>
        </ul>
      </div>
    </CardBackground>
    <CardBackground>
      <h1 id="appointments-feature" className="card-title text-success">
        Appointments
      </h1>
      <div className="container">
        <h5 id="appointments" className="text-dark">
          Add pet appointments to your calendar
        </h5>
        <ul>
          <li>Receive alerts for upcoming appointments.</li>
        </ul>
      </div>
    </CardBackground>
    <style jsx>{`
      p {
        font-size: 20px;
      }
      #project-features {
        font-size: 48;
        text-align: center;
        margin-bottom: 0;
        margin-top:0;
      }
     
    `}</style>
  </Layout>
);
