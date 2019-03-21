import Link from 'next/link';

class SignedInNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dbCurrentPetId: null
        }
    };
    // getPetIdToStorage() {
    //     var currentPet = localStorage.setItem("dbCurrentPetId", this.props.id);
    // }
    // componentDidMount(){
    //     this.getPetIdToStorage();
    // }
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-light bg-success">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSignOnTrue" id="signed-in-toggler">
                        <span className="navbar-toggler-icon navbar-light"></span>
                    </button>
                    <a href="/pets"><i style={{ color: "white", fontSize: "40px" }} className="fas fa-paw"></i></a>
                    <button className="navbar-toggler fas fa-user" type="button" data-toggle="collapse" data-target="#navbarAccountTrue">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSignOnTrue">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/dashboard">Dashboard</a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/log">Log</a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/notes">Notes</a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/petdetails#pet-details-records">Records</a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/appointments">Appointments</a>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarAccountTrue">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/accountsettings" id="account-settings">Account Settings</a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/pets">Manage Pets</a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="nav-item">
                                <a className="nav-link text-white bg-success" id="log-off-button">Logout</a>
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
                          text-decoration: underline;
                      }
    
                      .dropdown-item {
                          color: #000000;
                      }
    
                      .fa-user {
                          color: #ffffff;
                          font-size: 30px;
                      }
    
                      li {
                        list-style-type: none;
                      }
    
                      .navbar-toggler {
                          border-color: #ffffff;
                      }
    
                      .navbar-toggler-icon {
                          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
                      }
    
                      
                  `}</style>
            </div>
        )
    }
}

export default SignedInNavbar;