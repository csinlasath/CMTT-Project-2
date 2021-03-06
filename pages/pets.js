import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

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
            <div key={this.props.id} data-id={this.props.id} className="container2">
                <div className="card text-center">
                    <h1>{this.props.name}</h1>
                    <Link href={`/petprofile?id=${this.props.id}`}>
                        <img data-id={this.props.id} src={this.props.image} onClick={this.getPetIdToStorage.bind(this)}></img>
                    </Link>
                    <br></br>
                    <div className="buttons">
                        <button id="feed" data-id={this.props.id} className="btn btn-success" onClick={this.onClickCard.bind(this)}>Quick Feed</button>
                        <Link href={`/log?id=${this.props.id}`}>
                            <button id="log" data-id={this.props.id} className="btn btn-success" onClick={this.getPetIdToStorage.bind(this)}>Log Data</button>
                        </Link>
                    </div>
                </div>
                <style jsx> {`
                button {
                    margin: 10px;
                }
                button:hover {
                    cursor: pointer;
                }
                .buttons {
                    padding-bottom: 35px;
                }
                img {
                    height: 180px;
                    width: 180px;
                    margin: auto;
                    border: 2px solid green;
                    border-radius: 100%;
                    object-fit: cover;
                    object-position: 50% 50%;
                    -webkit-animation:spin 0.01s linear;
                    -moz-animation:spin 0.01s linear;
                    animation:spin 0.01s linear;
                }
                @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
                @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
                @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
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
                h1 {
                    text-align: center;
                    color: black;
                }
                h2 {
                    margin-top: 25px;
                    text-align: center;
                }
        `}</style>
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
    static getInitialProps({ query }) {
        return { query };
    };
    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                fetch("/api/users/firebase/" + user.uid).then(res => res.json()).then((data) => {
                    this.setState({
                        dbUserId: data.id.toString()
                    });
                    const fetchURL = `/api/pets/${this.state.dbUserId}/all`;
                    fetch(fetchURL)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    isLoaded: true,
                                    pets: result
                                });
                            },
                            (error) => {
                                this.setState({
                                    isLoaded: true,
                                    error: error
                                });
                            }

                        )
                });

            }
        });
    }
    clickEvent(target) {
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
            var elements = [];
            for (var i = 0; i < pets.length; i++) {
                if (pets[i].imageId === "") {
                    pets[i].imageId = "/static/images/enzo.jpg";
                }
                elements.push(<Card key={"card-number-" + (i + 1)} name={pets[i].petName} image={pets[i].imageId} id={pets[i].id} onClickHandler={this.clickEvent} />);
            };
        }
        return (
            <div id="pets" className="card-deck">
                {elements}
                <div className="container2">
                    <a href="/addpet" className="card btn text-center addPet">
                        <i className="card-img-top fas fa-plus dashboard-available"></i>
                        <div className="card-body">
                            <h5 className="card-title dashboard-available">Add Pet</h5>
                        </div>
                    </a>
                </div>
                <style jsx> {`
                .addPet {
                    padding-top: 100px;
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
                .container {
                    margin-top: 50px;
                    margin-bottom: 0;
                }
                h1 {
                    text-align: center;
                    color: black;
                }
            `}
        </style>
    </SignedInLayout>
);

