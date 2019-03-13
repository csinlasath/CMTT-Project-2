import Link from 'next/link';


const Navbar = () => (
    <div>
        <nav className="navbar fixed-top navbar-light bg-warning">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="/">Project Bacchus</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
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
              `}</style>
    </div>
);

export default Navbar;