import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary main-nav">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>
                <div>
                    <button type="button" className="nav-button-logout">
                      Sair
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
