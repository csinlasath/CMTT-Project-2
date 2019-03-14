const Card = (props) => (
    <div className="container">
        <div className="card">
            <div className="card-body">
            {props.children}
            </div>
        </div>
        <style jsx> {`
                  .card-header {
                      height: 50px;
                  }

                  .card-footer {
                      height: 50px;
                      text-align: center;
                  }

                  .card-title {
                    text-align: center;
                    margin-right: 25px;
                  }

                  .container {
                      margin-top: 100px;
                  }

                  .fab {
                      font-size: 30px;
                      margin-right: 20px;
                  }

                  .fb-btn {
                      background-color: #3b5998;
                  }

                  .gg-btn {
                      background-color: #4885ed;
                  }

                  i {
                      float: left;
                  }
                  .login-btn {
                      width: 100%;
                  }

                  .sign-in-seperator {
                      font-weight: bolder;
                      font-size: 20px;
                      margin-top: 30px;
                      text-align: center;
                  }
                
                  #small-print {
                      margin-top: 20px;
                      text-align: center;
                  }
                  .social-btn {
                      margin-top: 15px;
                      width: 100%;
                  }

                  .text-light a {
                      text-decoration: underline;
                  }

                  .tw-btn {
                      background-color: #1da1f2;
                  }
        `}</style>
    </div>
);

export default Card;