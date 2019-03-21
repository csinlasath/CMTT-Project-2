import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="weight-notes" data-toggle="modal" data-target={props.targetId} className="weightDate btn btn-success">{props.date}</button>
        <style jsx>{`
                button {
                    width: 100%;
                }
                .weightDate {
                    margin-bottom: 7px;
                }
                `}
        </style>
    </div>
);

const WeightModal = (props) => (
    <div id="modal-weight-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-weight-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-weight-note">Pet Weight</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="modal-body">
                    <p className="text-success"><strong>Weight:</strong>  {props.weight}</p>
                    <p className="text-success"><strong>Additional Notes:</strong> {props.weightNote}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

class Weight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            weight: []
        };
    }
    static getInitialProps({query}) {
        return {query};
    };
    componentDidMount() {
        fetch("/api/log/" + this.props.query.id +"/all") // :petId 
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        weight: result
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
        const { error, isLoaded, weight } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            console.log(weight);
            var elements = [];
            for (var i = weight.length - 1; i > -1; i--) {
                if (weight[i].logType === 3) {
                elements.push(<Date key={"date-number-" + i} date={moment().local(weight[0].createdAt.split(".")[0]).format("MM/DD/YYYY hh:mm a")} targetId={"#modal"+weight[i].id} />);
                elements.push(<WeightModal key={"modal-number-" + i} weight={weight[i].weight} note={weight[i].weightNotes} id={"modal"+weight[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1 className="text-success text-center">Last Weigh-In</h1>
                    </div>
                    { elements }
                </CardBackground>
            </SignedInLayout>
        )
    }
};

export default Weight;


