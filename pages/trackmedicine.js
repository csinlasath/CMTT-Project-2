import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="medicine-notes" data-toggle="modal" data-target={props.targetId} className="medicineDate btn btn-success">{props.date}</button>
        <style jsx>{`
                button {
                    width: 100%;
                }
                .medicineDate {
                    margin-bottom: 7px;
                }
                `}
        </style>
    </div>
);

const MedicineModal = (props) => (
    <div id="modal-medicine-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-medicine-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-medicine-note">Got Meds?</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><strong>What Did They Take? </strong> {props.medicineName}</p>
                        <p><strong>How Much Did They Take? </strong> {props.medicineMeasure} Hours {props.medicineTimeMinutes} Minutes</p>
                        <p><strong>When Did They Take It? </strong> {props.medicineMeal}</p>
                        <p><strong>Notes: </strong> {props.medicineNotes}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
                #modal-medicine-note {
                    text-align: center;
                }
                h1 {
                    text-align: center;
                }
                p {
                    color: green;
                }
                `}
        </style>
    </div>
);

class Medicine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            medicine: []
        };
    }
    static getInitialProps({ query }) {
        return { query };
    };
    componentDidMount() {
        fetch("/api/log/" + this.props.query.id + "/all") // :petId 
            // fetch("/api/log/12/all") //test
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        medicine: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }

            )
    }
    render() {
        const { error, isLoaded, medicine } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            var elements = [];
            for (var i = medicine.length - 1; i > -1; i--) {
                if (medicine[i].logType === 2) {
                    console.log(medicine[i]);
                    elements.push(<Date key={"date-number-" + i} date={moment.utc(medicine[i].createdAt.split(".")[0]).local().format("MM/DD/YYYY hh:mm a")} targetId={"#modal" + medicine[i].id} />);
                    elements.push(<MedicineModal key={"modal-number-" + i} medicineName={medicine[i].medicineName} medicineMeasure={medicine[i].medicineMeasure} medicineMeal={medicine[i].medicineMeal} medicineNotes={medicine[i].medicineNotes} id={"modal" + medicine[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1>Latest Medicine Dosing</h1>
                    </div>
                    {elements}
                </CardBackground>
                <style jsx>{`
                h1 {
                    text-align: center;
                }
                `}
                </style>
            </SignedInLayout>
        )
    }
};

export default Medicine;