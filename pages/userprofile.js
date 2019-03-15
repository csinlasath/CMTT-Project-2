import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

const name = "bob";

const UserDetails = (props) => (
    <div id="user-detail-div">
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
        <style jsx>{`
            #user-detail-div {
                margin-top: 25px;
            }`
        }</style>
    </div>
);
export default () => (
    <SignedInLayout>
        <CardBackground>
        <h2 id="accountSettings" className="card-title text-success">Account Settings</h2>
            <UserDetails userName = {name} userEmail = "JoeIsTheDirt@Joe'sDirt.com" userPhone = "1-800-Joe-Is-Dirt"/>
        </CardBackground>
        <style jsx>{`
           #accountSettings {
            margin-top: 25px;
            text-align: center;
        }`
        }</style>
    </SignedInLayout>
);


