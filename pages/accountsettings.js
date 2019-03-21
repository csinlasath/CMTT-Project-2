import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

import { server } from "../config/server-config"
import fetch from 'isomorphic-unfetch';

var userFirstName = "John"
var userLastName = "Doe"
var userEmailAddress = "johndoe@yahoo.com"
var userPhoneNumber = "855-867-5309"

class AccountSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dbUserId: null,
            dbFirstName: null,
            dbLastName: null,
            firebase_email: null,
            firebase_phoneNumber: null,
        };
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                fetch("/api/users/firebase/" + user.uid).then(res => res.json()).then((data) => {
                    this.setState({
                        dbUserId: data.id.toString(),
                        dbFirstName: data.firstName.toString(),
                        dbLastName: data.lastName.toString(),
                        firebase_email: data.email.toString(),
                        firebase_phoneNumber: data.phoneNumber.toString(),
                    });
                    if (data.id.firstName === "null") {
                        this.setState({
                            dbFirstName: "N/A"
                        });
                    }
                    if (data.id.lastName === "null") {
                        this.setState({
                            dbLastName: "N/A"
                        });
                    }
                    if (data.id.email === "null") {
                        this.setState({
                            firebase_email: "N/A"
                        });
                    }
                    if (data.id.phoneNumber === "null") {
                        this.setState({
                            firebase_phoneNumber: "N/A"
                        });
                    }
                });

            }
            else {
                window.location.replace("/login");
            }
        });
    };
    render() {
        return (
            <div id="account-settings-div">
                <div className="row">
                    <div className="col-md-4">
                        <div className="nav flex-column nav-pills" id="account-settings-tab" role="tablist">
                            <a href="#account-settings-name" className="nav-link active" id="account-settings-name-tab" data-toggle="pill" role="tab">Name</a>
                            <a href="#account-settings-email" className="nav-link" id="account-settings-Email-tab" data-toggle="pill" role="tab">Email</a>
                            <a href="#account-settings-password" className="nav-link" id="account-settings-Password-tab" data-toggle="pill" role="tab">Password</a>
                            <a href="#account-settings-phone" className="nav-link" id="account-settings-Phone-tab" data-toggle="pill" role="tab">Phone</a>
                            <a href="#account-settings-other" className="nav-link" id="account-settings-Phone-tab" data-toggle="pill" role="tab">Other Settings</a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content" id="account-settings-content">
                            <div className="tab-pane fade show active" id="account-settings-name" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.dbFirstName}</p>
                                        <hr></hr>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.dbLastName}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="change-first-name-field">Change First Name</label>
                                                <input type="text" className="form-control" id="change-first-name-field" placeholder="John"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="change-last-name-field">Change Last Name</label>
                                                <input type="text" className="form-control" id="change-last-name-field" placeholder="Smith"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success account-settings-btn" id="account-name-update-btn">Change Name</button>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="account-settings-email" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Email Address</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.firebase_email}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="change-email-field">Change Email Address</label>
                                                <input type="email" className="form-control" id="change-email-field" placeholder="johnsmith@projectbacchus.com"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success account-settings-btn" id="account-email-update-btn">Change Email</button>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="account-settings-password" role="tabpanel">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="current-pass-field">Current Password</label>
                                                <input type="email" className="form-control" id="current-pass-field" placeholder="New Password"></input>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="new-pass-field">Current Password</label>
                                                <input type="email" className="form-control" id="new-pass-field" placeholder="New Password"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success account-settings-btn" id="account-pass-update-btn">Change Password</button>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="account-settings-phone" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Primary Phone Number</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.firebase_phoneNumber}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="change-phone-field">Change Phone Number</label>
                                                <input type="number" className="form-control" id="change-phone-field" placeholder="800-867-5309"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success account-settings-btn" id="account-phone-update-btn">Change Phone Number</button>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="account-settings-other" role="tabpanel">
                                <div className="col-md-12">
                                    <label>Delete Account</label>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-danger account-settings-btn" id="delete-account-btn">Delete Account</button>
                                    <hr></hr>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                a {
                    color: green;
                }
    
                .account-settings-btn {
                    width: 100%;
                }
    
                #account-settings-div {
                    margin-top: 25px;
                    height: 350px;
                }
    
                label {
                    color: gray;
                    font-size: 14px;
                }
    
                .nav-pills > a.active {
                    background-color: green;
                }
    
                p {
                    font-size: 22px;
                }
                #user-detail-div {
                    margin-top: 25px;
                }
            `}</style>
            </div>
        );
    };
};


// export default AccountSettings;

export default () => (
    <SignedInLayout>
        <CardBackground>
            <h2 id="accountSettings" className="card-title text-success">Account Settings</h2>
            <hr></hr>
            <AccountSettings firstName={userFirstName} lastName={userLastName} emailAddress={userEmailAddress} phoneNumber={userPhoneNumber} />
        </CardBackground>
        <style jsx>{`
           #accountSettings {
            text-align: center;
        }`
        }</style>
    </SignedInLayout>
);
