import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import CardDeck from '../views/cardDeck';
import { chosenPet, chosenImg } from '../pages/pets';

console.log(chosenPet, chosenImg);
export default () => (
    <SignedInLayout>
        <br></br>
        <div className="top row">
            <div class="pic col-md-4">
                <img src={chosenImg}></img>
                <button className="appt btn btn-success">Set Next Appointment</button>
            </div>
            <div className="info col-md-4">
                <h1>{chosenPet.petName}</h1>
                <h5>DOB: {chosenPet.dob}</h5>
                <h5>Weight: {chosenPet.weight} lbs.</h5>
                <h5>Vet: Dr. {chosenPet.vetFirstName} {chosenPet.vetLastName}</h5>
                <h5>Phone: {chosenPet.vetPhone}</h5>
                <h5>Next Appt: {chosenPet.nextVet}</h5>
                <h5>Last Fed: {chosenPet.lastFed}</h5>
            </div>
            <div className="buttons col-md-4">
                <button className="btn btn-success">Check Food & Water Log</button>
                <button className="btn btn-success">Check Exercise Log</button>
                <button className="btn btn-success">Check Weight Log</button>
                <button className="btn btn-success">Check Medicine Log</button>
                <button className="btn btn-success">Check Potty Log</button>
            </div>
        </div>
        <div className="row">
            <a href="/trackfood" className="card btn text-center">
                <i className="card-img-top fas fa-utensils"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Food</h5>
                </div>
            </a>
            <a href="/trackwater" className="card btn text-center">
                <i className="card-img-top fas fa-glass-whiskey"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Water</h5>
                </div>
            </a>
            <a href="/trackmedicine" className="card btn text-center">
                <i className="card-img-top fas fa-pills"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Medicine</h5>
                </div>
            </a>
            <a href="/trackweight" className="card btn text-center">
                <i className="card-img-top fas fa-weight"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Weight</h5>
                </div>
            </a>
            <a href="/trackexercise" className="card btn text-center">
                <i className="card-img-top fas fa-running"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Excercise</h5>
                </div>
            </a>
            <a href="/trackpotty" className="card btn text-center">
                <i className="card-img-top fas fa-poop"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Potty</h5>
                </div>
            </a>
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
);
