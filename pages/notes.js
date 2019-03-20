import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import CardDeck from '../views/cardDeck';

const moment = require("moment");

let timeStamp = moment().format("MMMM Do YYYY");

const NoteButtons = (props) => (
    <div id="user-note-div">
        <div className="row">
            <div className="col-md-6">
                <div id="note-timeStamp" className="card-title text-success">{timeStamp}</div>
            </div>
            <div className="col-md-6">
                <button id="user-shortcut-button" type="button" className="btn btn-success" data-toggle="modal" data-target="#noteModal">{props.noteTitle}</button>
            </div>
        </div>
        <div className="modal fade" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="modal-note-title" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-note-title">{props.noteTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {props.noteBody}
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
             #user-note-div{
                text-align: center;
            }
            #note-shortcut-button{
                margin: 20px;
            }
            #note-timeStamp{
                font-size: 20px;

            }
        `}</style>
    </div>
);

export default () => (
    <SignedInLayout>
        <CardBackground>
            <div id="notes-div">
                <h1 id="notes-title" className="card-title text-success">Notes</h1>
                <CardDeck>
                    <NoteButtons noteTitle="Dog has weird behavior" noteBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
                    </NoteButtons>
                </CardDeck>
                <style jsx>{`
            #notes-title{
                text-align: center;
            }
            `}</style>
            </div>

        </CardBackground>
    </SignedInLayout>
);
