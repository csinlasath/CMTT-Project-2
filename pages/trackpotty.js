import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="potty-notes" data-toggle="modal" data-target={props.targetId} className="pottyDate btn btn-success">{props.date}</button>
        <style jsx>{`
                button {
                    width: 100%;
                }
                .pottyDate {
                    margin-bottom: 7px;
                }
                `}
        </style>
    </div>
);

const PottyModal = (props) => (
    <div id="modal-potty-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-potty-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-potty-note">Potty Break</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><strong>Did They Pee? </strong> {props.urine}</p>
                        <p><strong>What Color Was It? </strong> {props.urineColor}</p>
                        <p><strong>Did They Poop? </strong> {props.stool}</p>
                        <p><strong>What Type Was It? </strong> {props.stoolColor}</p>
                        <p><strong>Additional Notes: </strong> {props.stoolNotes}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
                #modal-potty-note {
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

class Potty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pottys: []
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
                        pottys: result
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
        const { error, isLoaded, pottys } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            // console.log(pottys);
            // console.log(moment().local(pottys[0].createdAt.split(".")[0]).format("MM/DD/YYYY hh:mm a"));
            var elements = [];
            for (var i = 0; i < pottys.length; i++) {
                if (pottys[i].logType === 5) {
                    elements.push(<Date key={"date-number-" + i} date={moment().local(pottys[0].createdAt.split(".")[0]).format("MM/DD/YYYY hh:mm a")} targetId={"#modal" + pottys[i].id} />);
                    elements.push(<PottyModal key={"modal-number-" + i} urine={pottys[i].urine} urineColor={pottys[i].urineMeasure} stool={pottys[i].stool} stoolColor={pottys[i].stoolColor} stoolNotes={pottys[i].stoolNotes} id={"modal" + pottys[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1>Latest Potty Breaks</h1>
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

export default Potty;