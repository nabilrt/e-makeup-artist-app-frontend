import {Link} from "react-router-dom";

const ArtistTopBar=()=>{
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

                    <Link to="/artist/dashboard" className="nav-link" aria-current="page" >Dashboard</Link>
                    <Link to="/artist/inbox" className="nav-link" >Inbox</Link>
                    <Link to="/packages/add" className="nav-link">Add Packages</Link>
                    <Link to="/packages/manage" className="nav-link" >Packages</Link>
                    <Link to="/artist/orders" className="nav-link">Orders</Link>
                    <Link to="/artist/profile" className="nav-link">Profile</Link>
                    <Link to="/logout" className="nav-link">Logout</Link>

                </div>
            </div>
        </div>
    </nav>
)
}

export default ArtistTopBar;