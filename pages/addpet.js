import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

const AddPetForm = (props) => (
    <div id="add-pet-div">
        <h1 id="pet-form-title" className="card-title text-success">Add a Pet</h1>
        <hr></hr>
        <form id="add-pet-form">
            <div className="form-group">
                <label htmlFor="add-pet-name" className="text-success">Pet Name</label>
                <input type="text" className="form-control" id="add-pet-name" placeholder="Bacchus"></input>
            </div>
            <div className="form-group">
                <label htmlFor="add-pet-birth" className="text-success">Pet Date of Birth</label>
                <input type="text" className="form-control" id="add-pet-birth" placeholder="2004-05-25"></input>
            </div>
            <div className="form-group">
                <label htmlFor="add-pet-type" className="text-success">Type of Pet</label>
                <input type="text" className="form-control" id="add-pet-type" placeholder="Dog"></input>
            </div>
            <div className="form-group">
                <label htmlFor="add-pet-breed" className="text-success">Pet Breed</label>
                <input type="text" className="form-control" id="add-pet-breed" placeholder="Labrador Retriever"></input>
            </div>
            <div className="form-group">
                <label htmlFor="add-pet-gender" className="text-success">Pet Gender</label>
                <input type="text" className="form-control" id="add-pet-gender" placeholder="Male"></input>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="add-pet-pic" className="text-success">Upload a Picture</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <input type="file" className="form-control-file" id="add-pet-picture-btn"></input>
                    </div>
                </div>
                <progress value="0" max="100" role="progressbar" id="add-pet-progress"></progress>
            </div>
            <button id="pet-form-submit" type="submit" className="btn btn-success add-pet-submit">Submit</button>
        </form>
        <style jsx> {`
                #add-pet-form {
                    margin-top: 25px;
                }
                progress {
                    --webkit-appearance: none;
                    appearance: none;
                    color: green;
                    background-color: green;
                    margin-top: 10px;
                }

                ::placeholder {
                    opacity: 0.3;
                }
                .add-pet-submit {
                    margin-top: 25px;
                    width: 100%;
                }

                #pet-form-title{
                    text-align: center;
                }

                #progress-bar-wrapper {
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

