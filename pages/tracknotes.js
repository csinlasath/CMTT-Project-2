import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="addNotes-notes" data-toggle="modal" data-target={props.targetId} className="addNotesDate btn btn-success">{props.date}</button>
        <style jsx>{`
                button {
                    width: 100%;
                }
                .addNotesDate {
                    margin-bottom: 7px;
                }
                `}
        </style>
    </div>
);

const AddNotesModal = (props) => (
    <div id="modal-addNotes=div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-addNotes-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-addNotes-note">{props.notesTitle}</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="modal-body">
                    <p className="text-success"><strong className="text-success">Notes: </strong>{props.notes}</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

class AddNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            addNotes: []
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
                        addNotes: result
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
        const { error, isLoaded, addNotes } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            
            var elements = [];
            for (var i = 0; i < addNotes.length; i++) {
                if (addNotes[i].logType === 5) {
                    elements.push(<Date key={"date-number-" + i} date={moment.utc(TimeVariable).local().format("MM/DD/YYYY hh:mm a")} targetId={"#modal" + addNotes[i].id} />);
                    elements.push(<AddNotesModal key={"modal-number-" + i} noteTitle={addNotes[i].notesTitle} note={addNotes[i].notes} id={"modal" + addNotes[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1>Additional Notes</h1>
                    </div>
                    {elements}
                </CardBackground>
                <style jsx>{`
                h1 {
                    text-align: center;
                    color: green;
                }
                `}
                </style>
            </SignedInLayout>
        )
    }
};

export default AddNotes;