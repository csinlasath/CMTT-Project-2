import SignedInLayout from '../views/layouts/signedInLayout';
import CardDeck from '../views/cardBackground';

const name = "bob";

const UserDetails = (props) => (
    <div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-2">
                    <h5 className="card-title text-success">Name:</h5>
                </div>
                <div className="col-md-4">
                    <p id="userName">{props.userName}</p>
                </div>
                <div className="col-md-6">
                    <button id="userNameButton" className="card btn text-center">Change Name</button>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-2">
                    <h5 className="card-title text-success">Email:</h5>
                </div>
                <div className="col-md-4">
                    <p id="userEmail">{props.userEmail}</p>
                </div>
                <div className="col-md-6">
                    <button className="card btn text-center">Change Email</button>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-2">
                    <h5 className="card-title text-success">Phone Number:</h5>
                </div>
                <div className="col-md-4">
                    <p id="userPhone">{props.userPhone}</p>
                </div>
                <div className="col-md-6">
                    <button className="card btn text-center">Change Phone Number</button>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-6">
                    <h5 className="card-title text-success">Want to change your password?</h5>
                </div>
                <div className="col-md-6">
                    <button className="card btn text-center">Change Password</button>
                </div>
            </div>
        </div>
    </div>
);
export default () => (
    <SignedInLayout>
        
        <h2 id="accountSettings" className="card-title text-success">Account Settings</h2>
        <style jsx>{`
            #accountSettings {
                margin-top: 5%;
                text-align: center;
            }`
        }</style>
        <CardDeck>
            <UserDetails userName = {name} userEmail = "JoeIsTheDirt@Joe'sDirt.com" userPhone = "1-800-Joe-Is-Dirt"/>
        </CardDeck>
    </SignedInLayout>
);


