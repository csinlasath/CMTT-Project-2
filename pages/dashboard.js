import SignedInLayout from '../views/layouts/signedInLayout';
import CardDeck from '../views/cardDeck';

export default () => (
    <SignedInLayout>
        <CardDeck>
            <a href="/track" className="card btn text-center">
                <i className="card-img-top fas fa-utensils"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Food</h5>
                </div>
            </a>
            <a href="/track" className="card btn text-center">
                <i className="card-img-top fas fa-glass-whiskey"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Water</h5>
                </div>
            </a>
            <a href="/track" className="card btn text-center">
                <i className="card-img-top fas fa-pills"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Medicine</h5>
                </div>
            </a>
        </CardDeck>
        <CardDeck>
            <a href="/track" className="card btn text-center">
                <i className="card-img-top fas fa-weight"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Weight</h5>
                </div>
            </a>
            <a href="/track" className="card btn text-center">
                <i className="card-img-top fas fa-running"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Excercise</h5>
                </div>
            </a>
            <a href="/track" className="card btn text-center">
                <i className="card-img-top fas fa-poop"></i>
                <div className="card-body">
                    <h5 className="card-title text-success">Track Potty</h5>
                </div>
            </a>
        </CardDeck>
        <style jsx> {`
                  .container {
                      margin-top: 100px;
                  }

                  i { 
                      color: #5cb85c;
                      font-size: 50px;
                      margin-top: 30px;     
                  }

                  .card:hover {
                      transition: 1s;
                      transform: scale(1.2);
                      border: 2px solid #000000;
                  }
        `}</style>
    </SignedInLayout>
);