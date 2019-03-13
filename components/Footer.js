
const Footer = () => (
    <div>
        <nav className="navbar navbar-light bg-success">
            <div className="container">
                <a href="p/privacy">Privacy Policy</a>
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

                  p {
                      color: #ffffff;
                      margin: 0 auto;
                      text-align: center;
                  }

                  nav {
                      margin-top: 175px;
                      bottom: 0;
                      width: 100%;
                  }
              `}</style>
    </div>
)

export default Footer;