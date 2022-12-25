import GeneralTopBar from "./topbars/GeneralTopBar";
import {Link} from "react-router-dom";

const Register=()=>{
    return(
        <>
            <GeneralTopBar/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Welcome to E-Makeup-Artist-App !</h5>
                                            <p>Choose Your Preferred Way to Register.</p>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="assets/images/profile-img.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="auth-logo">
                                    <a href="index.html" className="auth-logo-light">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/logo-light.svg" alt=""
                                                     className="rounded-circle" height="34"/>
                                            </span>
                                        </div>
                                    </a>


                                </div>
                                <div className="p-2">
                                  <br/>

                                        <div className="mb-3">
                                          <Link to="/artist/register" className="btn btn-outline-dark">Makeup Artist</Link> &nbsp;  &nbsp;
                                            <Link to="/customer/register" className="btn btn-outline-warning">Customer</Link>
                                        </div>

                                        <div className="mb-3">

                                        </div>





                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Register;