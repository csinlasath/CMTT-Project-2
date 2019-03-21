import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

var moment = require('moment');
moment().format();

const Date = (props) => (
    <div>
        <button id="food-notes" data-toggle="modal" data-target={props.targetId} className="foodDate btn btn-success text-center">{props.date}</button>
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

const FoodModal = (props) => {
    <div id="modal-food-div">
        <div id="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-food-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-food-note">Food</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="modal-body">
                    <p>{props.foodName}</p>
                    <p>{props.foodAmount}</p>
                    <p>{props.foodNote}</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            food: []
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
            console.log(food);
            var elements = [];
            for (var i = 0; i < food.length; i++) {
                if (food[i].logType === 0) {
                elements.push(<Date key={"date-number-" + i} date={moment().local(food[0].createdAt.split(".")[0]).format("MM/DD/YYYY hh:mm a")} targetId={"#modal"+food[i].id} />);
                elements.push(<FoodModal key={"modal-number-" + i} name={food[i].foodName} amount={food[i].foodAmount} note={food[i].foodNote} id={"modal"+food[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1 className="text-success text-center">Last Ate</h1>
                    </div>
                    { elements }
                    {/* <Date date="3/17/2019 at 4:20" pottyModal="#pottyModal" /> */}
                    {/* <PottyModal pottyModal={"pottyModal"} pottyData1={"Test"} /> */}
                </CardBackground>
            </SignedInLayout>
        )
    }
};

export default Food;