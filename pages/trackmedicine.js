import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
    <button id="med-notes" data-toggle="modal" data-target={props.targetId} className="medDate btn btn-success text-center">{props.date}</button>
    <style jsx>{`
        #button{
            width: 100%;
        }
        .medDate{
            margin-bottom: 7px;
        }
    `}</style>
    </div>
);

const MedicineModal = (props) => (
    <div id="modal-med-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" arialabelledby="modal-med-note" aria-hidden="true">
            <div className="modal-dialog" role="docmuent">
                <div className="modal-header text-success">
                    <h5 className="modal-title text-center" id="modal-med-note">Medication</h5>
                    <button type="button"
                    className="close" data-dismiss="modal"
                    aria-label="Close"><span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <p>{props.medName}</p>
                <p>{props.medAmount}</p>
                <p>{props.medNote}</p>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal">Close
                </button>
                </div>
            </div>
        </div>
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
    static getInitialProps({query}) {
        return {query};
    };
    componentDidMount() {
        // fetch("/api/log/" + this.props.query.id +"/all") // :petId 
        fetch("/api/log/1/all")
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
            console.log(medicine);
            var elements = [];
            for (var i = 0; i < medicine.length; i++) {
                if (medicine[i].logType === 2) {
                elements.push(<Date key={"date-number-" + i} date={moment().local(medicine[0].createdAt.split(".")[0]).format("MM/DD/YYYY hh:mm a")} targetId={"#modal"+medicine[i].id} />);
                elements.push(<MedicineModal key={"modal-number-" + i} name={medicine[i].medName} amount={medicine[i].medAmount} note={medicine[i].medNote} id={"modal"+pottys[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1 className="text-success text-center">Last Medicine Taken</h1>
                    </div>
                    { elements }
                    {/* <Date date="3/17/2019 at 4:20" pottyModal="#pottyModal" /> */}
                    {/* <PottyModal pottyModal={"pottyModal"} pottyData1={"Test"} /> */}
                </CardBackground>
            </SignedInLayout>
        )
    }
};

export default Medicine;