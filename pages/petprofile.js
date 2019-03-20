import SignedInLayout from '../views/layouts/signedInLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { withRouter } from 'next/router';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pet: [],
            vet: [],
            log: [],
            appt: [],
        };
    }
    static getInitialProps({ query }) {
        return { query };
    };
    componentDidMount() {
        console.log(this.props.query.id)
        fetch("/api/pets/pet-id/" + this.props.query.id) //:petId
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pet: result
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
                                error
                            });
                        },
                        fetch("api/log/" + this.props.query.id + "/all") //:petId
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.setState({
                                        isLoaded: true,
                                        log: result
                                    });
                                },
                                (error) => {
                                    this.setState({
                                        isLoaded: true,
                                        error
                                    });
                                },
                                fetch("/api/appointments/pet-id/" + this.props.query.id) //:petId
                                    .then(res => res.json())
                                    .then(
                                        (result) => {
                                            this.setState({
                                                isLoaded: true,
                                                appt: result
                                            });
                                        },
                                        (error) => {
                                            this.setState({
                                                isLoaded: true,
                                                error
                                            });
                                        }
                                    )
                            )
                    )
            )



    }
    render() {
        const { error, isLoaded, pet, vet, log, appt } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(pet);
        };
        return (
            <SignedInLayout>
                <br></br>
                <div className="top row">
                    <div className="pic col-md-4">
                        <img src="/static/images/bacchus.jpg"></img>
                    </div>
                    <div className="info col-md-4">
                        <h1>{pet.petName}</h1>
                        <h5>DOB: {pet.dob}</h5>
                        <h5>Weight: {vet.weight} lbs.</h5>
                        <h5>Vet: Dr. {vet.vetFirstName} {vet.vetLastName}</h5>
                        <h5>Phone: {vet.vetPhone}</h5>
                        <h5>Next Appt: {appt.nextVet}</h5>
                        <h5>Last Fed: {log.lastFed}</h5>
                    </div>
                    <div className="buttons col-md-4">
                        <Link href={`/petdetails?id=${pet.id}`}>
                            <button className="btn btn-success">Pet Details</button>
                        </Link>
                        <Link href={`/dashboard?id=${pet.id}`}>
                            <button className="btn btn-success">View Logs</button>
                        </Link>
                        <Link href={`/appointments?id=${pet.id}`}>
                            <button className="btn btn-success">Set Next Appointment</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <Link href={`/logfood?id=${pet.id}`}>
                        <div className="card btn text-center">
                            <i className="card-img-top fas fa-utensils"></i>
                            <div className="card-body">
                                <h5 className="card-title text-success">Log Food</h5>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/logwater?id=${pet.id}`}>
                        <div className="card btn text-center">
                            <i className="card-img-top fas fa-glass-whiskey"></i>
                            <div className="card-body">
                                <h5 className="card-title text-success">Log Water</h5>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/logmedicine?id=${pet.id}`}>
                        <div className="card btn text-center">
                            <i className="card-img-top fas fa-pills"></i>
                            <div className="card-body">
                                <h5 className="card-title text-success">Log Medicine</h5>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/logweight?id=${pet.id}`}>
                        <div className="card btn text-center">
                            <i className="card-img-top fas fa-weight"></i>
                            <div className="card-body">
                                <h5 className="card-title text-success">Log Weight</h5>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/logexercise?id=${pet.id}`}>
                        <div className="card btn text-center">
                            <i className="card-img-top fas fa-running"></i>
                            <div className="card-body">
                                <h5 className="card-title text-success">Log Excercise</h5>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/logpotty?id=${pet.id}`}>
                        <div className="card btn text-center">
                            <i className="card-img-top fas fa-poop"></i>
                            <div className="card-body">
                                <h5 className="card-title text-success">Log Potty</h5>
                            </div>
                        </div>
                    </Link>
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
        `}</style>
            </SignedInLayout>
        )
    }
};

export default Profile


