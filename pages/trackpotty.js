import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';

const Date = (props) => (
    <div>
        <button id="potty-notes" data-toggle="modal" data-target={props.targetId} className="pottyDate btn btn-success">{props.date}</button>
        <style jsx>{`
                #pet-exercise-title{
                    text-align: center;
                }
                button {
                    width: 100%;
                }
                .pottyDate {
                    margin-bottom: 7px;
                }
                `}
        </style>
    </div>
);

const PottyModal = (props) => (
    <div id="modal-potty-div">
        <div className="modal fade" role="dialog" id={props.id} tabIndex="-1" aria-labelledby="modal-potty-note" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-success">
                        <h5 className="modal-title" id="modal-potty-note">Potty Break</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{props.urine}</p>
                        <p>{props.stool}</p>
                        <p>{props.stoolColor}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
                #modal-potty-note {
                    text-align: center;
                }
                h1 {
                    text-align: center;
                }
                `}
        </style>
    </div>
);

class Potty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            petId: null,
            pottys: []
        };
    }
    static getInitialProps({query}) {
        return {query};
    };
    getCurrentPetId() {
        this.setState({
            petId: window.location.href.split("=")[1]
        });
        console.log(this.state.petId);
    }
    componentDidMount() {
        this.getCurrentPetId();
        fetch("/api/log/" + window.location.href.split("=")[1] + "/all") // :petId 
        // fetch("/api/log/12/all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pottys: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }

            )
    }
    render() {
        const { error, isLoaded, pottys } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <SignedInLayout><CardBackground><div>Loading...</div></CardBackground></SignedInLayout>;
        } else {
            console.log(pottys);
            var elements = [];
            for (var i = 0; i < pottys.length; i++) {
                if (pottys[i].logType === 5) {
                elements.push(<Date key={"date-number-" + i} date={pottys[i].createdAt} targetId={"#modal"+pottys[i].id} />);
                elements.push(<PottyModal key={"modal-number-" + i} urine={pottys[i].urine} stool={pottys[i].stool} stoolColor={pottys[i].stoolColor} id={"modal"+pottys[i].id} />);
                };
            };
        };
        return (
            <SignedInLayout>
                <CardBackground>
                    <div>
                        <h1>Latest Potty Breaks</h1>
                    </div>
                    { elements }
                    {/* <Date date="3/17/2019 at 4:20" pottyModal="#pottyModal" /> */}
                    {/* <PottyModal pottyModal={"pottyModal"} pottyData1={"Test"} /> */}
                </CardBackground>
                <style jsx>{`
                #pet-exercise-title{
                    text-align: center;
                }
                h1 {
                    text-align: center;
                }
                `}
                </style>
            </SignedInLayout>
        )
    }
};

export default Potty;