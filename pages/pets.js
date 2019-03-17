import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import {chosenPet, chosenImg, profile, petArray, imgArray} from '../pages/assets/js/app';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

const defaultImage = ["/assets/images/bacchus.jpg"];

class Card extends React.Component {
    render() {
        return (
            <div key={this.props.id} className="jsx-3607384524 container2">
                <div className="jsx-3607384524 card text-center">
                    <h1 className="jsx-3607384524">{this.props.name}</h1>
                    <img data-id={this.props.id} className="jsx-3607384524" src={this.props.image} onClick={() => profile(this.props.id)}></img>
                    <br className="jsx-3607384524"></br>
                    <div className="jsx-3607384524 buttons">
                        <button id="feed" data-id={this.props.id} className="jsx-3607384524 btn btn-success" onClick={() => feed(this.props.id)}>Quick Feed</button>
                        <button id="log" data-id={this.props.id} className="jsx-3607384524 btn btn-success">Log Data</button>
                    </div>
                </div>
            </div>
        );
    };
};

class CardContainer extends React.Component {
    render() {
        var elements = [];
        for (var i = 0; i < petArray.length; i++) {
            if (imgArray[i] !== undefined) {
                elements.push(<Card key={"pet-number-" + (i + 1)} name={petArray[i].petName} image={imgArray[i]} id={petArray[i].id}/>);
            }else {
                elements.push(<Card key={"pet-number-" + (i + 1)} name={petArray[i].petName} image={defaultImage[0]} id={petArray[i].id}/>);
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
                <CardContainer></CardContainer>
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
