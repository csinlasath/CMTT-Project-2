import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

export default () => (
    <SignedInLayout>
        <h2 className="card-title text-success">Account Settings</h2> 
        <CardBackground>
        <div className="card-body">
            <div className="row">
                <div className="col-md-2">
                    <h5 className="card-title text-success">Name:</h5>
                </div>
                <div className="col-md-4">
                    <p id="userName">Joe Dirt</p>
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
                    <p id="userEmail">JoeDirt502@gmail.com</p>
                </div>
                <div className="col-md-6">
                    <button className="card btn text-center">Change Email</button>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-2">
                    <h5 className="card-title text-success">Password:</h5>
                </div>
                <div className="col-md-4">
                    <p id="userPassword">JoeDirtIsAwesome73!</p>
                </div>
                <div className="col-md-6">
                    <button className="card btn text-center">Change Password</button>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-2">
                    <h5 className="card-title text-success">Phone Number:</h5>
                </div>
                <div className="col-md-4">
                    <p className="userPhone">1-800-Joe-Is-Dirt</p>
                </div>
                <div className="col-md-6">
                    <button className="card btn text-center">Change Phone Number</button>
                </div>
            </div>
        </div>
        </CardBackground>
    </SignedInLayout>
);


