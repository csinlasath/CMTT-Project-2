import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import Link from 'next/link';
var moment = require('moment');
moment().format();

const AddApptForm = (props) => (
    <div id="add-appt-div">
        <h1 id="appt-form-title" className="card-title text-success">Add a Vet Appointment</h1>
        <hr></hr>
        <form id="add-appt-form">
            <div className="form-group">
                <label htmlFor="add-appt-date" className="text-success">Date</label>
                <input type="text" className="form-control" id="add-appt-date" placeholder="03/25/2019"></input>
            </div>
            <div className="form-group">
                <label htmlFor="add-appt-time" className="text-success">Time</label>
                <input type="text" className="form-control" id="add-appt-time" placeholder="4:30pm"></input>
            </div>
            <button id="appt-form-submit" type="submit" className="btn btn-success add-appt-submit">Submit</button>
        </form>
        <style jsx> {`
                #add-appt-form {
                    margin-top: 25px;
                }
                progress {
                    --webkit-appearance: none;
                    appearance: none;
                    color: green;
                    background-color: green;
                    margin-top: 10px;
                }
                ::placeholder {
                    opacity: 0.4;
                }
                .add-appt-submit {
                    margin-top: 25px;
                    width: 100%;
                }
                #appt-form-title{
                    text-align: center;
                }
                    `}</style>
    </div>
);

export default () => (
    <SignedInLayout>
        <CardBackground>
            <AddApptForm />
        </CardBackground>
    </SignedInLayout>
);