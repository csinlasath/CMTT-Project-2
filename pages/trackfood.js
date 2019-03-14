import SignedInLayout from '../views/layouts/signedInLayout';
import TrackCard from '../components/TrackCard';
import MeasurementsWeight from '../components/constants/MeasurementsWeight';
import MealTypes from '../components/constants/MealTypes';

export default () => (
    <SignedInLayout>
        <TrackCard title="Track Food Intake">
            <i className="card-img-top fas fa-utensils text-success"></i>
            <div className="form-group">
                <label htmlFor="food-activity-field">What did they eat?</label>
                <input type="text" className="form-control" id="food-activity-field"></input>
            </div>
            <div className="form-group">
                <label htmlFor="food-activity-field">How much did they eat?</label>
                <div className="row">
                    <div className="col-md-9">
                        <input type="number" className="form-control" id="food-activity-field"></input>
                    </div>
                    <div className="col-md-3">
                        <select type="number" className="form-control" id="food-measurement">
                            <option>-</option>
                            {MeasurementsWeight.map((value) => <option key={"food-measure-" + value} data-value={value}>{value}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="food-meal-type">Which meal was this?</label>
                <select className="form-control" id="food-meal-type">
                    {MealTypes.map((value) => <option key={"food-meal-" + value} data-value={value}>{value}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="food-notes">Notes for Activity:</label>
                <textarea className="form-control" rows="8" id="food-notes"></textarea>
            </div>
            <button type="submit" className="btn btn-success" id="food-submit">Submit</button>
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