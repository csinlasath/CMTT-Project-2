const CardDeck = (props) => (
    <div className="container">
        <div className="card-deck">
            {props.children}
        </div>
        <style jsx> {`
                  .container {
                      margin-top: 50px;
                      margin-bottom: 0;
                  }
        `}</style>
    </div>
)

export default CardDeck;