import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import $ from 'jquery';

let petArray = [];
let imgArray = [];

petArray = [{
    petName: "Enzo",
    id: "47"
}];
imgArray = [
    "/assets/images/bacchus.jpg",
]

for (let i = 0; i < petArray.length; i++) {
    let petDiv = "<div className='container2'>";
    petDiv += "<div className='card text-center'>";
    petDiv += "<h1>" + petArray[i].petName + "</h1>";
    petDiv += "<img data-id=" + petArray[i].id + " src=" + imgArray[i] + "className='petSelect'></img>";
    petDiv += "<br></br><div className='buttons'><button className='btn btn-success'>Quick Feed</button><button className='btn btn-success'>Log Data</button>";
    petDiv += "</div></div></div>";
    $("#pets").prepend(petDiv);
};

export default () => (
    <SignedInLayout>
        <CardBackground>
            <h1>
                My Pets
        </h1>
            <hr></hr>
            <div className="container">
                <div id="pets" className="card-deck">
                    <div className="container2">
                        <div className="card text-center">
                            <h1>Bacchus</h1>
                            <img src="/assets/images/bacchus.jpg"></img>
                            <br></br>
                            <div className="buttons">
                                <button id="feed" className="btn btn-success">Quick Feed</button>
                                <button className="btn btn-success">Log Data</button>
                            </div>
                        </div>
                    </div>
                    <div className="container2">
                        <a href="/addpet" className="card btn text-center addPet">
                            <i className="card-img-top fas fa-plus dashboard-available"></i>
                            <div className="card-body">
                                <h5 className="card-title dashboard-available">Add Pet</h5>
                            </div>
                        </a>
                    </div>
                </div>
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

// $(document).on("click", "#feed", () => {

// });

// $(document).on("click", ".petSelect", () => {
//     let petID = this.data-id.val();

// });

