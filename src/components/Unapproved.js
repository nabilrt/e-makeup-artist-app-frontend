import {Link} from "react-router-dom";
import GeneralTopBar from "./topbars/GeneralTopBar";

const Unapproved=()=>{
    return(
        <>
            <GeneralTopBar/> <br/> <br/> <br/>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card">

                        <div className="card-body">

                            <div className="p-2">
                                <div className="text-center">

                                    <div className="avatar-md mx-auto">
                                        <div className="avatar-title rounded-circle bg-light">
                                            <i className="bx bx-mail-send h1 mb-0 text-primary"></i>
                                        </div>
                                    </div>
                                    <div className="p-2 mt-4">
                                        <h4>Pending !</h4>
                                        <p className="text-muted">You are not approved yet by admin. Please Keep an eye on your email</p>
                                        <div className="mt-4">
                                            <Link to="/login" className="btn btn-warning">Back to Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-5 text-center">

                        <p>© E-Makeup-Artist-App 2022
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Unapproved;