import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const defaultImage = ["/static/images/bacchus.jpg"];

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    onClickCard(event) {
        this.props.onClickHandler(event.target);
    }
    getPetIdToStorage(event) {
        localStorage.setItem("dbCurrentPetId", this.props.id);
        localStorage.setItem("dbCurrentPetName", this.props.name);
    }
    render() {
        return (
            <div key={this.props.id} data-id={this.props.id} className="jsx-3607384524 container2">
                <div className="jsx-3607384524 card text-center">
                    <h1 className="jsx-3607384524">{this.props.name}</h1>
                    <Link href={`/petprofile?id=${this.props.id}`}>
                        <img data-id={this.props.id} className="jsx-3607384524" src={this.props.image} onClick={this.getPetIdToStorage.bind(this)}></img>
                    </Link>
                    <br className="jsx-3607384524"></br>
                    <div className="jsx-3607384524 buttons">
                        <button id="feed" data-id={this.props.id} className="jsx-3607384524 btn btn-success" onClick={this.onClickCard.bind(this)}>Quick Feed</button>
                        <Link href={`/log?id=${this.props.id}`}>
                            <button id="log" data-id={this.props.id} className="jsx-3607384524 btn btn-success">Log Data</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
};

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this);
        this.state = {
            dbUserId: null,
            error: null,
            isLoaded: false,
            pets: []
        };
    }
    static getInitialProps({query}) {
        return {query};
    };
    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                fetch("/api/users/firebase/" + user.uid).then(res => res.json()).then((data) => {
                    this.setState({
                        dbUserId: data.id.toString()
                    });
                    console.log(this.state.dbUserId);
                    console.log(typeof this.state.dbUserId);
                    const fetchURL = `/api/pets/${this.state.dbUserId}/all`;
                    console.log(fetchURL);
                    fetch(fetchURL)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                console.log(result);
                                this.setState({
                                    isLoaded: true,
                                    pets: result
                                });
                            },
                            (error) => {
                                this.setState({
                                    isLoaded: true,
                                    error
                                });
                            }
            
                        )
                });
                
            }
            else {
                console.log("Not Signed In");
            }
        });
    }
    clickEvent(target) {
        console.log(target.dataset.id);
        fetch("api/log/add/" + target.dataset.id,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ logType: 0, foodNotes: "Quick Meal" })
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
    }
    render() {
        const { error, isLoaded, pets } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(pets);
            var elements = [];
            for (var i = 0; i < pets.length; i++) {
                elements.push(<Card key={"card-number-" + (i + 1)} name={pets[i].petName} image={defaultImage[0]} id={pets[i].id} onClickHandler={this.clickEvent} />);
            };
        };
        return (
            <div id="pets" className="jsx-3607384524 card-deck">
                {elements}
                <div className="jsx-3607384524 container2">
                    <a href="/addpet" className="jsx-3607384524 card btn text-center addPet">
                        <i className="jsx-3607384524 card-img-top fas fa-plus dashboard-available"></i>
                        <div className="jsx-3607384524 card-body">
                            <h5 className="jsx-3607384524 card-title dashboard-available">Add Pet</h5>
                        </div>
                    </a>
                </div>
            </div>
        );
    };
};

export default () => (
    <SignedInLayout>
        <CardBackground>
            <h1>My Pets</h1>
            <hr></hr>
            <div className="container">
                <CardContainer />
            </div>
        </CardBackground>
        <style jsx> {`
                .addPet {
                    padding-top: 100px;
                }
                .container {
                    margin-top: 50px;
                    margin-bottom: 0;
                    
                }
                button {
                    margin: 10px;

                }
                button:hover {
                    cursor: pointer;
                }
                .buttons {
                    padding-bottom: 35px;
                }
                hr {
                    cborder: 1px solid green;
                }
                img {
                    max-height: 180px;
                    max-width: 180px;
                    margin: auto;
                    border: 2px solid green;
                    border-radius: 100%;

                }
                img:hover {
                    cursor: pointer;
                    transition: 1s;
                    transform: scale(1.1);
                }
                .container2 {
                    margin: auto auto 30px auto;
                }
                .card {
                    max-width: 325px;
                    height: 325px;
                    min-width 230px;
                    width: 70vw;
                    margin: auto;
                    border: 1px solid green;
                }
                .card-body {
                    
                }
                .dashboard-available {
                    color: gray;
                }
                h1 {
                    text-align: center;
                    color: black;
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
    </SignedInLayout>
);

