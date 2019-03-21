import _ from 'lodash';
import SignedInLayout from '../views/layouts/signedInLayout';
import TrackCard from '../components/TrackCard';
import SelectYesNo from '../components/constants/SelectYesNo';
import SelectUrineColor from '../components/constants/SelectUrineColor';
import SelectStool from '../components/constants/SelectStool';
import MaxHours from '../components/constants/MaxHours'
import MaxMinutes from '../components/constants/MaxMinutes'

export default () => (
    <SignedInLayout>
        <TrackCard title="Log Potty Breaks">
        <i className="card-img-top fas fa-poop text-success"></i>
            <div className="form-group">
                <label htmlFor="urine-activity-select">Urination?</label>
                <select className="form-control" id="urine-activity-select">
                    {SelectYesNo.map((value) => <option key={"urine-measure-" + value} data-value={value}>{value}</option>)}
                </select>
                <label htmlFor="urine-color-select">Urine Color?</label>
                <select className="form-control" id="urine-color-select">
                    {SelectUrineColor.map((value) => <option key={"urine-color-" + value} data-value={value}>{value}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="stool-activity-select">Defecation?</label>
                <select className="form-control" id="stool-activity-select">
                    {SelectYesNo.map((value) => <option key={"stool-measure-" + value} data-value={value}>{value}</option>)}
                </select>
                <label htmlFor="stool-color-select">Stool Consistency?</label>
                <select className="form-control" id="stool-color-select">
                    {SelectStool.map((value) => <option key={"stool-color-" + value} data-value={value}>{value}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="stool-notes">Notes for Activity:</label>
                <textarea className="form-control" rows="8" id="stool-notes"></textarea>
            </div>
            <button type="submit" className="btn btn-success" id="stool-submit">Submit</button>
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