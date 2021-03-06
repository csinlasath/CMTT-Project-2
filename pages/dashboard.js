import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import CardDeck from '../views/cardDeck';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petId: null
        };
    }
    getCurrentPetId() {
        this.setState({
            petId: window.location.href.split("=")[1]
        });
    }
    componentDidMount() {
        this.getCurrentPetId();
    }
    render() {
        return (
            <SignedInLayout>
                <CardBackground>
                    <h2 className="card-title text-success">My Pet Dashboard</h2>
                    <CardDeck>
                        <Link href={`/trackfood?id=${this.state.petId}`}>
                            <a href="/trackfood" className="card btn text-center">
                                <i className="card-img-top fas fa-utensils"></i>
                                <div className="card-body">
                                    <h5 className="card-title text-success">Food Logs</h5>
                                </div>
                            </a>
                        </Link>
                        <Link href={`/trackwater?id=${this.state.petId}`}>
                            <a href="/trackwater" className="card btn text-center">
                                <i className="card-img-top fas fa-glass-whiskey"></i>
                                <div className="card-body">
                                    <h5 className="card-title text-success">Water Logs</h5>
                                </div>
                            </a>
                        </Link>
                        <Link href={`/trackmedicine?id=${this.state.petId}`}>
                            <a href="/trackmedicine" className="card btn text-center">
                                <i className="card-img-top fas fa-pills"></i>
                                <div className="card-body">
                                    <h5 className="card-title text-success">Medicine Logs</h5>
                                </div>
                            </a>
                        </Link>
                    </CardDeck>
                    <CardDeck>
                        <Link href={`/trackweight?id=${this.state.petId}`}>
                            <a href="/trackweight" className="card btn text-center">
                                <i className="card-img-top fas fa-weight"></i>
                                <div className="card-body">
                                    <h5 className="card-title text-success">Weight Logs</h5>
                                </div>
                            </a>
                        </Link>
                        <Link href={`/trackexercise?id=${this.state.petId}`}>
                            <a href="/trackexercise" className="card btn text-center">
                                <i className="card-img-top fas fa-running"></i>
                                <div className="card-body">
                                    <h5 className="card-title text-success">Excercise Logs</h5>
                                </div>
                            </a>
                        </Link>
                        <Link href={`/trackpotty?id=${this.state.petId}`}>
                            <a href="/trackpotty" className="card btn text-center">
                                <i className="card-img-top fas fa-poop"></i>
                                <div className="card-body">
                                    <h5 className="card-title text-success">Potty Logs</h5>
                                </div>
                            </a>
                        </Link>
                    </CardDeck>
                    <CardDeck>
                        <a href="#" className="card btn text-center">
                            <i className="card-img-top fas fa-plus dashboard-available"></i>
                            <div className="card-body">
                                <h5 className="card-title dashboard-available">Add Widget</h5>
                            </div>
                        </a>
                        <a href="#" className="card btn text-center">
                            <i className="card-img-top fas fa-plus dashboard-available"></i>
                            <div className="card-body">
                                <h5 className="card-title dashboard-available">Add Widget</h5>
                            </div>
                        </a>
                        <a href="#" className="card btn text-center">
                            <i className="card-img-top fas fa-plus dashboard-available"></i>
                            <div className="card-body">
                                <h5 className="card-title dashboard-available">Add Widget</h5>
                            </div>
                        </a>
                    </CardDeck>
                </CardBackground >
                <style jsx> {`
                      .card:hover {
                          transition: 1s;
                          transform: scale(1.1);
                          border: 2px solid #000000;
                      }
    
                      .dashboard-available {
                          color: gray;
                      }
    
                      h2 {
                          margin-top: 25px;
                          text-align: center;
                      }
    
                      i { 
                          color: #5cb85c;
                          font-size: 50px;
                          margin-top: 30px;     
                      }
    
            `}</style>
            </SignedInLayout >

        )
    }
}

export default Dashboard
