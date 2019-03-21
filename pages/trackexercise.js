import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="exercise-notes" data-toggle="modal" data-target={props.targetId} className="exerciseDate btn btn-success text-center">{props.date}</button>
        <style jsx>{`
        button{
            width: 100%
        }
        .exerciseDate {
            margin-bottom: 7px;
        }
        `}</style>
    </div>
);

const ExerciseModal = (props) => (
    <div id="modal-exercise-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-exercise-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-exercise-note">Exercise</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&true;</span>
                            </button>
                    </div>
                    <div className="modal-body">
                        <p>{props.exerciseType}</p>
                        <p>{props.exerciseLength}</p>
                        <p>{props.exerciseNote}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
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
        const { error, isLoaded, exercise } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            console.log(exercise);
            var elements = [];
            for (var i = 0; i < exercise.length; i++) {
                if (exercise[i].logType === 4) {
                elements.push(<Date key={"date-number-" + i} date={moment().local(exercise[0].createdAt.split(".")[0]).format("MM/DD/YYYY hh:mm a")} />);
                elements.push(<ExerciseModal key={"modal-number-" + i} type={exercise[i].exerciseType} length={exercise[i].exerciseLength} note={exercise[i].exerciseNote} id={"modal"+exercise[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1 className="text-success text-center">Last Exercise</h1>
                    </div>
                    { elements }
                    {/* <Date date="3/17/2019 at 4:20" pottyModal="#pottyModal" /> */}
                    {/* <PottyModal pottyModal={"pottyModal"} pottyData1={"Test"} /> */}
                </CardBackground>
            </SignedInLayout>
        )
    }
};

export default Exercise;