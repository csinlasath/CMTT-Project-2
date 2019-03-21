import SignedInLayout from '../views/layouts/signedInLayout';
import TrackCard from '../components/TrackCard';
import MeasurementsLiquids from '../components/constants/MeasurementsLiquids';
import MealTypes from '../components/constants/MealTypes';

export default () => (
    <SignedInLayout>
        <TrackCard title="Log Liquid Intake">
            <i className="card-img-top fas fa-glass-whiskey text-success"></i>
            <div className="form-group">
                <label htmlFor="water-activity-field">How much did they drink?</label>
                <div className="row">
                    <div className="col-md-9">
                        <input type="number" className="form-control" id="water-amount-field"></input>
                    </div>
                    <div className="col-md-3">
                        <select type="number" className="form-control" id="water-measurement">
                            {MeasurementsLiquids.map((value) => <option key={"water-measure-" + value} data-value={value}>{value}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="water-meal-type">When was this?</label>
                <select className="form-control" id="water-meal-type">
                    {MealTypes.map((value) => <option key={"water-meal-" + value} data-value={value}>{value}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="water-notes">Notes for Activity:</label>
                <textarea className="form-control" rows="8" id="water-notes"></textarea>
            </div>
            <button type="submit" className="btn btn-success" id="water-submit">Submit</button>
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