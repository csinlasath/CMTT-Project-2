const SignIn = () => (
    <div className="container">
        <div className="card">
            <div className="card-header bg-success">
                <h5 className="card-title text-light">Sign in to Project Bacchus</h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="email-login-field">Email Address</label>
                        <input type="email" className="form-control" id="email-login-field" placeholder="Example: johnsmith@gmail.com"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-login-field">Password</label>
                        <input type="password" className="form-control" id="password-login-field" placeholder="Password"></input>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="remember-login-check"></input>
                        <label className="form-check-label" htmlFor="remember-login-check">Remember Me</label>
                    </div>
                    <a href="/pets" className="btn btn-success login-btn" id="sign-in-button" >Log-in</a>
                </form>
                <p className="sign-in-seperator">OR</p>
                <button href='https://facebook.com' className='btn btn-primary social-btn fb-btn' id="facebook-sign-up"><i className="fab fa-facebook-square"></i> Continue on Facebook</button>
                <button href='https://twitter.com' className='btn btn-success social-btn tw-btn' id="facebook-sign-up"><i className="fab fa-twitter-square"></i> Continue on Twitter</button>
                <button href='https://google.com' className='btn btn-success social-btn gg-btn' id="facebook-sign-up"><i className="fab fa-google"></i> Continue on Google</button>
                <small id="small-print" className="form-text text-muted">By continuing, you agree to Project Bacchus' <a href="/terms" >Terms of Service</a>, and <a href="/privacy" >Privacy Policy</a> .</small>
            </div>
            <div className="card-footer bg-success">
                <p className="text-light">Don't have an Account? <a href="/signup" className="text-light">Sign Up</a></p>
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

export default SignIn;