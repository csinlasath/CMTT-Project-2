import SignedInLayout from '../views/layouts/signedInLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
var moment = require('moment');
moment().format();

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pet: [],
            petImage: null,
            vet: [],
            log: [],
            appt: [],
            lastFed: null,
            latestWeight: null,
            nextApptTime: null,
            nextApptDate: null
        };
    }
    static getInitialProps({ query }) {
        return { query };
    };
    componentDidMount() {
        fetch("/api/pets/pet-id/" + this.props.query.id) //:petId
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pet: result
                    });
                    if (result.imageId === "") {
                        this.setState({
                            petImage: "/static/images/enzo.jpg"
                        });
                    }
                    if (result.imageId === null) {
                        this.setState({
                            petImage: "/static/images/enzo.jpg"
                        });
                    }
                    if ((result.imageId !== "") && (result.imageId !== null)) {
                        this.setState({
                            petImage: result.imageId
                        });
                    }
                    localStorage.setItem("dbCurrentPetBreed", result.breed);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                },
                fetch("api/records/pet-id/" + this.props.query.id) //:petId
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({
                                isLoaded: true,
                                vet: result
                            });
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error: error
                            });
                        },
                        fetch("api/log/" + this.props.query.id + "/all") //:petId
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    let lastFed1 = [];
                                    let lastWeight1 = [];
                                    for (let i = 0; i < result.length; i++) {
                                        if (result[i].logType === 0) {
                                            let feedTimes = [];
                                            feedTimes.push(result[i].createdAt);
                                            lastFed1 = feedTimes[feedTimes.length - 1];
                                            lastFed1 = moment.utc(lastFed1.split(".")[0]).local().format("MM/DD hh:mm a")
                                        }
                                        else if (result[i].logType === 3) {
                                            lastWeight1 = result[i].weight;
                                        };
                                    };
                                    this.setState({
                                        isLoaded: true,
                                        log: result,
                                        lastFed: lastFed1,
                                        latestWeight: lastWeight1
                                    });
                                },
                                (error) => {
                                    this.setState({
                                        isLoaded: true,
                                        error: error
                                    });
                                },
                                fetch("/api/appointments/pet-id/" + this.props.query.id) //:petId
                                    .then(res => res.json())
                                    .then(
                                        (result) => {
                                            let nextApptTime1 = null;
                                            let nextApptDate1 = null;
                                            for (let i = 0; i < result.length; i++) {
                                                nextApptDate1 = result[i].date;
                                                nextApptTime1 = result[i].time;
                                            }
                                            this.setState({
                                                isLoaded: true,
                                                appt: result,
                                                nextApptTime: nextApptTime1,
                                                nextApptDate: nextApptDate1
                                            });
                                        },
                                        (error) => {
                                            this.setState({
                                                isLoaded: true,
                                                error: error
                                            });
                                        }
                                    )
                            )
                    )
            )
    }
    render() {
        // if (this.state.pet.imageId === "") {
        //     this.setState({
        //         pet.imageId = "/static/images/enzo.jpg"
        //     });
        // }
        // if (error) {
        //     return (<div>Error: {error.message}</div>);
        // }
        // else if (!isLoaded) {
        //     return (
        //         <SignedInLayout>
        //             <div>Loading...</div>;
        //         </SignedInLayout>)
        // }
        // else {
            return (
                <SignedInLayout>
                    <br></br>
                    <div className="top row">
                        <div className="pic col-md-4">
                            <img src={this.state.petImage}></img>
                        </div>
                        <div className="info col-md-4">
                            <h1>{this.state.pet.petName}</h1>
                            <h5>DOB: {this.state.pet.dob}</h5>
                            <h5>Weight: {this.state.latestWeight}</h5>
                            <h5>Vet: Dr. {this.state.vet.vetFirstName} {this.state.vet.vetLastName}</h5>
                            <h5>Phone: {this.state.vet.vetPhone}</h5>
                            <h5>Next Appt:  {this.state.nextApptTime} {this.state.nextApptDate}</h5>
                            <h5>Last Fed: {this.state.lastFed}</h5>
                        </div>
                        <div className="buttons col-md-4">
                            <Link href={`/petdetails?id=${this.state.pet.id}`}>
                                <button className="btn btn-success">Pet Details</button>
                            </Link>
                            <Link href={`/dashboard?id=${this.state.pet.id}`}>
                                <button className="btn btn-success">View Logs</button>
                            </Link>
                            <Link href={`/appointments?id=${this.state.pet.id}`}>
                                <button className="btn btn-success">Set Next Appointment</button>
                            </Link>
                        </div>
                    </div>
                    <div className="container negative-wrapper">
                        <div className="row bottom">
                            <Link href={`/logfood`}>
                                <div className="card btn text-center">
                                    <i className="card-img-top fas fa-utensils"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-success">Log Food</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/logwater?id=${this.state.pet.id}`}>
                                <div className="card btn text-center">
                                    <i className="card-img-top fas fa-glass-whiskey"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-success">Log Water</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/logmedicine?id=${this.state.pet.id}`}>
                                <div className="card btn text-center">
                                    <i className="card-img-top fas fa-pills"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-success">Log Medicine</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/logweight?id=${this.state.pet.id}`}>
                                <div className="card btn text-center">
                                    <i className="card-img-top fas fa-weight"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-success">Log Weight</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/logexercise?id=${this.state.pet.id}`}>
                                <div className="card btn text-center">
                                    <i className="card-img-top fas fa-running"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-success">Log Excercise</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/logpotty?id=${this.state.pet.id}`}>
                                <div className="card btn text-center">
                                    <i className="card-img-top fas fa-poop"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-success">Log Potty</h5>
                                    </div>
                                </div>
                            </Link>
                            <div className="push-wrapper"></div>
                        </div>
                    </div>
                    <style jsx> {`
                    .appt {
                        max-width: 280px;
                        margin: auto;
                    }
                    .info {
                        width: 100%;
                        margin: auto;
                    }
                    button {
                        margin: 5px;
                        width: 100%;
                    }
                    button:hover {
                        cursor: pointer;
                    }
                    .buttons {
                        padding-bottom: 35px;
                    }
                    .card:hover {
                        transition: 1s;
                        transform: scale(1.1);
                        border: 2px solid #000000;
                    }
                    .col-md-4 {
                        margin: 0 auto;
                    }
                    .container {
                        margin: auto;
                        max-width: 1110px;
                        width: 100%;
                    }
                    .pic {
                        margin: auto;
                    }
                    img {
                        max-height: 280px;
                        max-width: 280px;
                        margin: auto;
                        border: 2px solid green;
                        width: 100%;
                    }
                    i { 
                        color: #5cb85c;
                        font-size: 50px;
                        margin-top: 30px;     
                    }
                    .card {
                        max-width: 325px;
                        max-height: 325px;
                        min-height: 230px;
                        min-width 230px;
                        width: 100%;
                        height: 100%;
                        margin: 10px auto;
                        border: 1px solid green;
                    }
                    .row {
                        max-width: 1110px;
                        margin: auto;
                    }
                    .top {
                        margin: 70px auto 20px auto;
                        max-width: 1110px;
                        border: 1px solid green;
                        padding: 30px;
                    }
                    .bottom, .push {
                        margin-bottom: 50px;
                    }
                    .negative-wrapper {
                        min-height: 100%;
                        margin-bottom: 150px;
                    }
            `}</style>
                </SignedInLayout>
            );
        }
    // }
};

export default Profile


