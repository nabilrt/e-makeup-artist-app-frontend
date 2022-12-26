import {Link} from "react-router-dom";

const AdminTopBar=()=>{

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

                    <Link to="/admin/dashboard" className="nav-link" aria-current="page" >Dashboard</Link>
                    <Link to="/admin/areas" className="nav-link" aria-current="page" >Area Management</Link>
                    <Link to="/admin/artists/approve" className="nav-link" >Pending Requests</Link>
                    <Link to="/feedbacks" className="nav-link">Feedbacks</Link>
                    <Link to="/logout" className="nav-link">Logout</Link>

                </div>
            </div>
        </div>
    </nav>
)

}

export default AdminTopBar;