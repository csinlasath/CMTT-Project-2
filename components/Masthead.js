import Link from 'next/link';

const Masthead = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container site-logo">
      <i className="fas fa-paw"></i>
      <h4 className="display-8">Project Bacchus</h4>
      <p className="lead">Track the well-being of your Pet</p>
    </div>
    <style jsx> {`
                  .site-logo i {
                    animation: float 6s ease-in-out infinite;
                    color: gray;
                    font-size: 100px;
                    margin-bottom: 20px;
                  }

                  i:hover {
                    transition: all 1s;
                    transform: rotate(360deg);
                  }

                  .jumbotron {
                    background-color: #ffffff;
                    margin-top: 70px;
                    text-align: center;
                  }

                  @keyframes float {
	                  0% {
		                  transform: translatey(0px);
	                  }
	                  50% {
		                  transform: translatey(-12px);
	                  }
	                  100% {
		                  transform: translatey(0px);
	                  }
                  }
              `}</style>
  </div>
  
);

export default Masthead;