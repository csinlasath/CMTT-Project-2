import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

import { server } from "../config/server-config"
import fetch from 'isomorphic-unfetch';

class AccountSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dbVetFirstName: null,
            dbVetLastName: null,
            dbVetPhone: null,
            dbPetWeight: null,
            dbPetCondition: null,
            dbPetRx: null,
            dbPetSymptoms: null,
            dbRecordNotes: null,
            dbUserId: null,
            dbFirstName: null,
            dbLastName: null,
            firebase_email: null,
            firebase_phoneNumber: null,
            dbCurrentPetBreed: null,
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
                    console.log("/api/records/pet-id/" + localStorage.getItem("dbCurrentPetId"));
                    fetch("/api/records/pet-id/" + localStorage.getItem("dbCurrentPetId")).then(res => res.json()).then((data) => {
                        if (data.length !== 0) {
                            this.setState({
                                dbVetFirstName: data[0].vetFirstName,
                                dbVetLastName: data[0].vetLastName,
                                dbVetPhone: data[0].vetPhone,
                                dbPetWeight: data[0].weight,
                                dbPetCondition: data[0].diagnosis,
                                dbPetRx: data[0].prescriptions,
                                dbPetSymptoms: data[0].symptoms,
                                dbRecordNotes: data[0].notes,
                                dbCurrentPetBreed: localStorage.getItem("dbCurrentPetBreed")
                            });
                        }
                        if (this.state.dbVetFirstName === null) {
                            this.setState({
                                dbVetFirstName: "N/A"
                            });
                        }
                        if (this.state.dbVetLastName === null) {
                            this.setState({
                                dbVetLastName: "N/A"
                            });
                        }
                        if (this.state.dbVetPhone === null) {
                            this.setState({
                                dbVetPhone: "N/A"
                            });
                        }
                        if (this.state.dbPetWeight === null) {
                            this.setState({
                                dbPetWeight: "N/A"
                            });
                        }
                        if (this.state.dbPetCondition === null) {
                            this.setState({
                                dbPetCondition: "N/A"
                            });
                        }
                        if (this.state.dbPetRx === null) {
                            this.setState({
                                dbPetRx: "N/A"
                            });
                        }
                        if (this.state.dbPetSymptoms === null) {
                            this.setState({
                                dbPetSymptoms: "N/A"
                            });
                        }
                        if (this.state.dbRecordNotes === null) {
                            this.setState({
                                dbRecordNotes: "N/A"
                            });
                        }
                    });
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
                            <a href="#pet-details-bio" className="nav-link active" id="pet-details-bio-tab" data-toggle="pill" role="tab">Pet Bio</a>
                            <a href="#pet-details-vet" className="nav-link" id="pet-details-vet-tab" data-toggle="pill" role="tab">Veterinarian</a>
                            <a href="#pet-details-conditions" className="nav-link" id="pet-details-conditions-tab" data-toggle="pill" role="tab">Conditions</a>
                            <a href="#pet-details-rx" className="nav-link" id="pet-details-rx-tab" data-toggle="pill" role="tab">Prescriptions</a>
                            <a href="#pet-details-records" className="nav-link" id="pet-details-records-tab" data-toggle="pill" role="tab">Records</a>
                            <a href="#pet-details-notes" className="nav-link" id="pet-details-notes-tab" data-toggle="pill" role="tab">Notes</a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content" id="pet-details-content">
                            <div className="tab-pane fade show active" id="pet-details-bio" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Breed</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.dbCurrentPetBreed}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pet-details-vet" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Vet First Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Vet Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.dbVetFirstName}</p>
                                        <hr></hr>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.dbVetLastName}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Vet Phone Number</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.dbVetPhone}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pet-details-conditions" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Condition(s)</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.dbPetCondition}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Symptom(s)</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.dbPetSymptoms}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pet-details-rx" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Prescription(s)</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.dbPetRx}</p>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pet-details-records" role="tabpanel">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="add-pet-pic" className="text-success">Upload Record</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="file" className="form-control-file" id="add-pet-picture-btn"></input>
                                        </div>
                                    </div>
                                    <progress value="0" max="100" role="progressbar" id="add-pet-progress"></progress>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pet-details-notes" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Note(s)</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{this.state.dbRecordNotes}</p>
                                        <hr></hr>
                                    </div>
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
            <h2 id="accountSettings" className="card-title text-success">Pet Details</h2>
            <hr></hr>
            <AccountSettings />
        </CardBackground>
        <style jsx>{`
           #accountSettings {
            text-align: center;
        }`
        }</style>
    </SignedInLayout>
);
