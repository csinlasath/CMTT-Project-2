import SignedInLayout from '../views/layouts/signedInLayout';
import TrackCard from '../components/TrackCard';
import MeasurementsMedicine from '../components/constants/MeasurementsMedicine';
import MealTypes from '../components/constants/MealTypes';

export default () => (
    <SignedInLayout>
        <TrackCard title="Log Medicine Intake">
            <i className="card-img-top fas fa-pills text-success"></i>
            <div className="form-group">
                <label htmlFor="medicine-activity-field">What did they take?</label>
                <input type="text" className="form-control" id="medicine-activity-field"></input>
            </div>
            <div className="form-group">
                <label htmlFor="medicine-amount-field">How much did they take?</label>
                <div className="row">
                    <div className="col-md-9">
                        <input type="number" className="form-control" id="medicine-amount-field"></input>
                    </div>
                    <div className="col-md-3">
                        <select type="number" className="form-control" id="medicine-measurement">
                            {MeasurementsMedicine.map((value) => <option key={"medicine-measure-" + value} data-value={value}>{value}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="medicine-meal-type">When was this?</label>
                <select className="form-control" id="medicine-meal-type">
                    {MealTypes.map((value) => <option key={"medicine-meal-" + value} data-value={value}>{value}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="medicine-notes">Notes for Activity:</label>
                <textarea className="form-control" rows="8" id="medicine-notes"></textarea>
            </div>
            <button type="submit" className="btn btn-success" id="medicine-submit">Submit</button>
            <style jsx> {`
                  .card-header {
                      height: 50px;
                  }

                  .card-title {
                    text-align: center;
                    margin-right: 25px;
                  }

                  .container {
                      margin-top: 100px;
                  }

                  #exercise-submit {
                      margin-top: 20px;
                      width: 100%;
                  }

                  i {
                      font-size: 100px;
                      text-align: center;
                      margin-top: 10px;
                      margin-bottom: 20px;
                  }

                  select {
                      text-align: center;
                  }
        `}</style>
        </TrackCard>
    </SignedInLayout>
);