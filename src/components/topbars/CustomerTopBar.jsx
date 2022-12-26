import {Link} from "react-router-dom";

const CustomerTopBar=()=>{

    return(
        <nav className="navbar bg-info navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Makeup Artist Application</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link to="/customer/dashboard" className="nav-link" aria-current="page" >Dashboard</Link>
                        <Link to="/customer/membership" className="nav-link" aria-current="page" >Membership</Link>
                        <Link to="/customer/inbox" className="nav-link" >Inbox</Link>
                        <Link to="/packages/all" className="nav-link">Packages</Link>
                        <Link to="/customer/orders" className="nav-link">Orders</Link>
                        <Link to="/customer/cart" className="nav-link">Cart</Link>
                        <Link to="/customer/profile" className="nav-link">Profile</Link>
                        <Link to="/logout" className="nav-link">Logout</Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default CustomerTopBar;