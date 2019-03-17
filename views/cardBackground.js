const CardBackground = (props) => (
    <div className="container">
        <div className="card">
            <div className="card-body">
            {props.children}
            </div>
        </div>
        <style jsx> {`
                  .card {
                      border: 1px solid green;
                  }
                  
                  .container {
                      margin-top: 100px;
                  }
        `}</style>
    </div>
);

export default CardBackground;