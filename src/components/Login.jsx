import GeneralTopBar from "./topbars/GeneralTopBar";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Login=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[userType,setUserType]=useState("");
    const history=useNavigate();

    const LoginSubmit=()=>{
        console.log(username);
        console.log(password);
        var obj={Username:username,Password:password};
        axios.post("https://localhost:44306/api/login",obj).then(resp=>{
            var token=resp.data;
            console.log(token);
            if(token==="Unapproved"){
                history("/unverified");
            }
            else{
                //getUserType(token.UserId);
                //console.log(userType)
             //
                var obje={Id:token.UserId}
                axios.post("https://localhost:44306/api/user/find",obje).then(resp=>{
                    var us=resp.data;
                    var user={userId:token.UserId,accessToken:token.TokenDetails,user_type:us.user_Type}
                    localStorage.setItem('user',JSON.stringify(user));
                    axios.defaults.headers.common["Authorization"] = token.TokenDetails;
                    if(us.User_Type==="Artist"){
                        history("/artist/dashboard");
                    }
                    if(us.User_Type==="Admin"){
                        history("/admin/dashboard");
                    }
                    if(us.User_Type==="Customer"){
                        history("/customer/dashboard");
                    }
                }).catch(err=>{
                   console.log(err.response.data)
                });

            }
        }).catch(err=>{
           console.log(err.response.data);
        });
    }

    const getUserType=(id)=>{
        var obje={Id:id}
        axios.post("https://localhost:44306/api/user/find",obje).then(resp=>{
            setUserType(resp.data.User_Type);

        }).catch(err=>{
            console.log(err.response.data);
        })
    }

    return(
        <>
            <GeneralTopBar/> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p>Sign in to continue to App.</p>
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
                                    <form className="form-horizontal" >

                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={e=>setUsername(e.target.value)}/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)}
                                                       aria-label="Password" aria-describedby="password-addon"/>
                                            </div>
                                        </div>



                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="button" onClick={LoginSubmit}>Log In
                                            </button>
                                        </div>




                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="mt-5 text-center">

                            <div>
                                <p>Don't have an account ? <Link to="/register" className="fw-medium text-primary"> Signup
                                    now </Link></p>
                                <p>© E-Makeup-Artist-Application 2022
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Login;