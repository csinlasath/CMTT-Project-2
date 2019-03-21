import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="water-notes" data-toggle="modal" data-target={props.targetId} className="waterDate btn btn-success">{props.date}</button>
        <style jsx>{`
                #pet-exercise-title{
                    text-align: center;
                }
                button {
                    width: 100%;
                }
                .waterDate {
                    margin-bottom: 7px;
                }
                `}
        </style>
    </div>
);

const WaterModal = (props) => (
    <div id="modal-water-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-water-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-water-note">Water Intake</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><strong>How Much Did They Drink? </strong> {props.waterMeasure}</p>
                        <p><strong>Around What Meal Was It? </strong> {props.waterMeal}</p>
                        <p><strong>Additional Notes: </strong> {props.waterNotes}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
                #modal-water-note {
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

class Water extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            petId: null,
            water: []
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
                        water: result
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
        const { error, isLoaded, water } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            console.log(water);
            console.log(moment().local(water[0].createdAt.split(".")[0]).format("MM/DD/YYYY hh:mm a"));
            var elements = [];
            for (var i = 0; i < water.length; i++) {
                if (water[i].logType === 1) {
                    elements.push(<Date key={"date-number-" + i} date={moment().local(water[0].createdAt.split(".")[0]).format("MM/DD/YYYY hh:mm a")} targetId={"#modal" + water[i].id} />);
                    elements.push(<WaterModal key={"modal-number-" + i} waterMeasure={water[i].waterMeasure} waterMeal={water[i].waterMeal} waterNotes={water[i].waterNotes} id={"modal" + water[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1>Water Break</h1>
                    </div>
                    {elements}
                </CardBackground>
                <style jsx>{`
                #pet-exercise-title{
                    text-align: center;
                }
                h1 {
                    text-align: center;
                }
                `}
                </style>
            </SignedInLayout>
        )
    }
};

export default Water;