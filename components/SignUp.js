const SignUp = () => (
    <div className="container">
        <div className="card">
            <div className="card-header bg-success">
                <h5 className="card-title text-light">Sign up</h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="email-signup-field">Email Address</label>
                        <input type="email" className="form-control" id="email-signup-field" placeholder="Example: johnsmith@gmail.com"></input>
                        <small id="email-help" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-signup-field">Password</label>
                        <input type="password" className="form-control" id="password-signup-field" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-success login-btn" id="sign-up-button">Sign Up</button>
                </form>
                <p className="sign-in-seperator">OR</p>
                <button className='btn btn-primary social-btn fb-btn' id="facebook-sign-up"><i className="fab fa-facebook-square"></i> Sign up via Facebook</button>
                <button className='btn btn-success social-btn tw-btn' id="twitter-sign-up"><i className="fab fa-twitter-square"></i> Sign up via Twitter</button>
                <button className='btn btn-success social-btn gg-btn' id="google-sign-up"><i className="fab fa-google"></i> Sign up via Google</button>
                <small id="small-print" className="form-text text-muted">By continuing, you agree to Project Bacchus' <a href="/terms" >Terms of Service</a>, and <a href="/privacy" >Privacy Policy</a> .</small>
            </div>
            <div className="card-footer bg-success">
                <p className="text-light">Have an Account? <a href="/login" className="text-light">Sign In</a></p>
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

export default SignUp;