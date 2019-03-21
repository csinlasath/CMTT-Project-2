import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="exercise-notes" data-toggle="modal" data-target={props.targetId} className="exerciseDate btn btn-success">{props.date}</button>
        <style jsx>{`
                button {
                    width: 100%;
                }
                .exerciseDate {
                    margin-bottom: 7px;
                }
                `}
        </style>
    </div>
);

const ExerciseModal = (props) => (
    <div id="modal-exercise-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-exercise-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-exercise-note">Exercise Break</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><strong>What Did We Do? </strong> {props.exerciseType}</p>
                        <p><strong>How Long Was The Exercise? </strong> {props.exerciseTimeHours} Hours {props.exerciseTimeMinutes} Minutes</p>
                        <p><strong>Additional Notes: </strong> {props.exerciseNotes}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
                #modal-exercise-note {
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

class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            exercise: []
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
                        exercise: result
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
        const { error, isLoaded, exercise } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            var elements = [];
            for (var i = exercise.length - 1; i > -1; i--) {
                if (exercise[i].logType === 4) {
                    elements.push(<Date key={"date-number-" + i} date={moment.utc(exercise[i].createdAt.split(".")[0]).local().format("MM/DD/YYYY hh:mm a")} targetId={"#modal" + exercise[i].id} />);
                    elements.push(<ExerciseModal key={"modal-number-" + i} exerciseType={exercise[i].exerciseType} exerciseTimeHours={exercise[i].exerciseTimeHours} exerciseTimeMinutes={exercise[i].exerciseTimeMinutes} exerciseNotes={exercise[i].exerciseNotes} id={"modal" + exercise[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1>Latest Exercises</h1>
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

export default Exercise;