const TrackCard = (props) => (
    <div className="container">
        <div className="card">
            <div className="card-header bg-success">
                <h5 className="card-title text-light">{props.title}</h5>
            </div>
            <div className="card-body">
                <form>
                    {props.children}
                </form>
            </div>
        </div>
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
        `}</style>
    </div>
)

export default TrackCard;