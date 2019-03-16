import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

const AddPetForm = (props) => (
    <div id="add-pet-div">
    <h1 id="pet-form-title" className="card-title text-success">Add a Pet</h1>
        <form id="add-pet-form">
                    <h5 id="pet-name" className="card-title text-success">Pet Name:<input id="pet-name-input" className="pet-form-input" /></h5>

                    <h5 id="pet-DOB" className="card-title text-success">Pet Date of Birth:<input id="pet-DOB-input" className="pet-form-input" /></h5>

                    <h5 id="pet-type" className="card-title text-success">Pet Type:<input id="pet-type-input" className="pet-form-input" /></h5>

                    <h5 id="pet-breed" className="card-title text-success">Pet Breed:<input id="pet-breed-input" className="pet-form-input" /></h5>

                    <h5 id="pet-gender" className="card-title text-success">Pet Gender:<input id="pet-gender-input" className="pet-form-input" /></h5>

                    <h5 id="pet-pic" className="card-title text-success">Pet Picture:<input id="myfiles" type="file"/></h5>
                    <button id="pet-form-submit" className="btn btn-success">Submit</button>
        </form>
        <style jsx> {`
                #pet-form-title{
                    text-align: center;
                }
                .pet-form-input {
                    margin-left: 25px;
                }
                #pet-name{
                    margin-top: 30px;
                }
                #pet-DOB {
                    margin-top: 30px;
                }
                #pet-type {
                    margin-top: 30px;
                }
                #pet-breed {
                    margin-top: 30px;
                }
                #pet-gender {
                    margin-top: 30px;
                }
                #myfiles{
                    margin-left: 25px;
                }
                #pet-pic {
                    margin-top: 30px;
                }
                #pet-form-submit{
                    margin-top: 10px;
                }
                    `}</style>
    </div>
);

export default () => (
    <SignedInLayout>
        <CardBackground>
            <AddPetForm />
        </CardBackground>
    </SignedInLayout>
);

