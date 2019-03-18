import SignedInLayout from '../views/layouts/signedInLayout';
import CardBackground from '../views/cardBackground';
import CardDeck from '../views/cardDeck';

export default () => (
    <SignedInLayout>
        <CardBackground>
            <h2 className="card-title text-success">Log Pet Health</h2>
            <CardDeck>
                <a href="/logfood" className="card btn text-center">
                    <i className="card-img-top fas fa-utensils"></i>
                    <div className="card-body">
                        <h5 className="card-title text-success">Log Food</h5>
                    </div>
                </a>
                <a href="/logwater" className="card btn text-center">
                    <i className="card-img-top fas fa-glass-whiskey"></i>
                    <div className="card-body">
                        <h5 className="card-title text-success">Log Water</h5>
                    </div>
                </a>
                <a href="/logmedicine" className="card btn text-center">
                    <i className="card-img-top fas fa-pills"></i>
                    <div className="card-body">
                        <h5 className="card-title text-success">Log Medicine</h5>
                    </div>
                </a>
            </CardDeck>
            <CardDeck>
                <a href="/logweight" className="card btn text-center">
                    <i className="card-img-top fas fa-weight"></i>
                    <div className="card-body">
                        <h5 className="card-title text-success">Log Weight</h5>
                    </div>
                </a>
                <a href="/logexercise" className="card btn text-center">
                    <i className="card-img-top fas fa-running"></i>
                    <div className="card-body">
                        <h5 className="card-title text-success">Log Excercise</h5>
                    </div>
                </a>
                <a href="/logpotty" className="card btn text-center">
                    <i className="card-img-top fas fa-poop"></i>
                    <div className="card-body">
                        <h5 className="card-title text-success">Log Potty</h5>
                    </div>
                </a>
            </CardDeck>
        </CardBackground>
        <style jsx> {`
                  .container {
                      margin-top: 100px;
                  }

                  h2 {
                      margin-top: 25px;
                      text-align: center;
                  }

                  i { 
                      color: #5cb85c;
                      font-size: 50px;
                      margin-top: 30px;     
                  }

                  .card:hover {
                      transition: 1s;
                      transform: scale(1.1);
                      border: 2px solid #000000;
                  }
        `}</style>
    </SignedInLayout>
);