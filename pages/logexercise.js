import _ from 'lodash';
import SignedInLayout from '../views/layouts/signedInLayout';
import TrackCard from '../components/TrackCard';
import MaxHours from '../components/constants/MaxHours'
import MaxMinutes from '../components/constants/MaxMinutes'

export default () => (
    <SignedInLayout>
        <TrackCard title="Log Excercise">
        <i className="card-img-top fas fa-running text-success"></i>
            <div className="form-group">
                <label htmlFor="exercise-activity-select">Activity</label>
                <select className="form-control" id="exercise-activity-select">
                    <option>-</option>
                    <option>Walk</option>
                    <option>Run</option>
                    <option>Play</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Amount of Time</label>
                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="excercise-time-hours">Hour(s):</label>
                    </div>
                    <div className="col-md-4">
                        <select className="form-control" id="exercise-time-hours">
                            <option>-</option>
                            {_.range(1, MaxHours + 1).map((value) => <option key={"hours-" + value} data-value={value}>{value}</option>)}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="excercise-time-minutes">Minute(s):</label>
                    </div>
                    <div className="col-md-4">
                        <select className="form-control" id="exercise-time-minutes">
                            <option>-</option>
                            {_.range(1, MaxMinutes + 1).map((value) => <option key={"minutes-" + value} data-value={value}>{value}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="exercise-notes">Notes for Activity:</label>
                <textarea className="form-control" rows="8" id="exercise-notes"></textarea>
            </div>
            <button type="submit" className="btn btn-success" id="exercise-submit">Submit</button>
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