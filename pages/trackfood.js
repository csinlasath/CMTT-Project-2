import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="food-notes" data-toggle="modal" data-target={props.targetId} className="foodDate btn btn-success">{props.date}</button>
        <style jsx>{`
                button {
                    width: 100%;
                }
                .foodDate {
                    margin-bottom: 7px;
                }
                `}
        </style>
    </div>
);

const FoodModal = (props) => (
    <div id="modal-food-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-food-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-food-note">Food Break</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><strong>What Did They Eat? </strong> {props.foodName}</p>
                        <p><strong>What Meal Was It? </strong> {props.foodMeal}</p>
                        <p><strong>How Much? </strong> {props.foodMeasure}</p>
                        <p><strong>Additional Notes: </strong> {props.foodNotes}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
                #modal-food-note {
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

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            food: []
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
                        food: result
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
        const { error, isLoaded, food } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            var elements = [];
            for (var i = food.length - 1; i > -1; i--) {
                if (food[i].logType === 0) {
                    elements.push(<Date key={"date-number-" + i} date={moment.utc(food[i].createdAt.split(".")[0]).local().format("MM/DD/YYYY hh:mm a")} targetId={"#modal" + food[i].id} />);
                    elements.push(<FoodModal key={"modal-number-" + i} foodName={food[i].foodName} foodMeal={food[i].foodMeal} foodMeasure={food[i].foodMeasure} foodNotes={food[i].foodNotes} id={"modal" + food[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1>Latest Feedings</h1>
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

export default Food;