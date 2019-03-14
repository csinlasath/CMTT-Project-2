import Link from 'next/link';

const Navbar = () => (
    <div>
        <nav className="navbar fixed-top navbar-light bg-success">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSignOnFalse">
                <span className="navbar-toggler-icon navbar-light"></span>
            </button>
            <button className="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <a href="/login">Sign-In</a>
            </button>
            <div className="collapse navbar-collapse" id="navbarSignOnFalse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/about">About</a>
                    </li>
                </ul>
            </div>

        </nav>
        <style jsx> {`
                  a {
                    color: #ffffff;
                    text-align: center;
                  }

                  a:hover {
                      cursor: pointer;
                      color: blue;
                      font-decoration: underline;
                  }

                  .navbar-toggler {
                      border-color: #ffffff;
                  }

                  .navbar-toggler-icon {
                      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
                  }
              `}</style>
    </div>
);

export default Navbar;