import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

const LogNote = (props) => (
    <div id="log-note-div">
        <h1 id="log-notes-title" className="card-title text-success">Make a Note</h1>
        <form>
            <div className="form-group">
                <label htmlFor="note-title" className="text-success">Title</label>
                <input type="text" className="form-control" id="note-title" placeholder="This is the title of the note"></input>
            </div>
            <div className="form-group">
                <label htmlFor="note-body" className="text-success">Note</label>
                <textarea type="text" className="form-control" id="note-body" placeholder="This is the body of the note"></textarea>
            </div>
            <button type="submit" id="submit-note" className="btn btn-success">Submit</button>
        </form>
        <style jsx>{`
            #log-notes-title{
                text-align: center;
            }
        `}</style>

    </div>
);

export default () => (
    <SignedInLayout>
        <CardBackground>
            <LogNote />
        </CardBackground>
    </SignedInLayout>
);