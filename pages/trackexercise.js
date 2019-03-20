import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

const TrackExercise = (props) => (
    <div id="track-exercise-div">
        <h1 id="pet-exercise-title" className="card-title text-success">Your Pets Exercise</h1>
            <div className="row">
                <div className="col-md-3">
                    <h5 className="text-success">Time of Exercise</h5>
                </div>
                <div className="col-md-3">
                    <h5 className="text-success">Type of Exercise</h5>
                </div>
                <div className="col-md-3">
                    <h5 className="text-success">Length of Exercise</h5>
                </div>
                <div className="col-md-3">
                    <h5 className="text-success">Additional Notes</h5>
                </div>
            </div>
        <div className="list-group-item list-group-item-action" type="button" data-toggle="modal" data-target="#exerciseModal">
            <div className="row">
                <div className="col-md-3">
                    <div id="exercise-timeStamp" className=" text-success">{props.timeStamp}</div>
                </div>
                <div className="col-md-3">
                    <div id="exercise-type" className="text-success">{props.exerciseType}</div>
                </div>
                <div className="col-md-3">
                    <div id="exercise-length" className="text-success">{props.exerciseLength}</div>
                </div>
                <div className="col-md-3">
                    <button id="exercise-notes" className="btn btn-success">Exercise Notes</button>
                </div>
            </div>
        </div>
        <style jsx>{`
                #pet-exercise-title{
                    text-align: center;
                }
                `}</style>
    </div>
);

const ExerciseModal = (props) => (
    <div id="modal-exercise-div">
        <div className="modal fade" role="dialog" id="exerciseModal" tabindex="-1" aria-labelledby="modal-exercise-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-exercise-note">Exercise Note</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.exerciseNote}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default () => (
    <SignedInLayout>
        <CardBackground>
            <TrackExercise timeStamp="Example of time stamp" exerciseType="Walk" exerciseLength="7hr 43min" />
            <ExerciseModal exerciseNote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."  />
        </CardBackground>
    </SignedInLayout>
);