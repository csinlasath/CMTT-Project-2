const Footer = () => (
    <footer>
        <nav className="navbar fixed-bottom navbar-light bg-success">
            <div className="container">
                    <ul>
                        <li>
                            <a href="/privacy">Privacy Policy</a>
                        </li>
                        <li>
                            |
                        </li>
                        <li>
                            <a href="https://app.termly.io/document/terms-of-use-for-website/fd0c3eba-f869-4b91-a78a-6a515c4027a3">Terms of Service</a>
                        </li>
                    </ul>
            </div>
            <div className="container">
                <p>Copyright &copy; 2019 | <a href="https://www.sinlasath.com/" target="_blank">Christopher Sinlasath | </a><a href="https://masondobbs.github.io/Portfolio/" target="_blank">Mason Dobbs | </a><a href="https://tiffanykeller.github.io/portfolioupdate/" target="_blank">Tiffany Keller | </a><a href="https://travismorris.io/" target="_blank">Travis Morris</a></p>
            </div>
        </nav>
        <style jsx> {`
                  a {
                    color: #ffffff;
                    margin: 0 auto;
                  }

                  a:hover {
                      cursor: pointer;
                      color: blue;
                      font-decoration: underline;
                  }

                  ul {
                      text-align: center;
                      margin: 0 auto;
                  }

                  li {
                      color: #ffffff;
                      float: left;
                      padding: 5px;
                      list-style-type: none;
                      text-align: center;

                  }

                  p {
                      color: #ffffff;
                      margin: 0 auto;
                      text-align: center;
                  }

                  nav {
                      margin-top: 300px;
                      width: 100%;
                  }
              `}</style>
    </footer>
)

export default Footer;