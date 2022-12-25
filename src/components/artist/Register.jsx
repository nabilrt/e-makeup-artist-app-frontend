import GeneralTopBar from "../topbars/GeneralTopBar";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ArtistRegister=()=>{
    const [Areas,SetAreas]=useState([]);
    const[name,setName]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[dob,setDOB]=useState("");
    const[portfolio,setPortfolio]=useState("");
    const[area,setArea]=useState("");
    useEffect(()=>{

        axios.get("https://localhost:44306/api/areas").then(resp=>{
           console.log(resp.data);
           SetAreas(resp.data);
        }).catch(err=>{
            console.log(err.response.data);
        });


    },[]);

    const RegisterSubmit=()=>{
        console.log(name);
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(dob);
        console.log(portfolio);
        console.log(area);
    }



    return(
        <>
            <GeneralTopBar/> <br/><br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Artist Registration</h5>
                                            <small>Your Informations are bound to Verification</small>
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
                                            <label className="form-label">Username</label>
                                            <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}
                                                       aria-label="Password" aria-describedby="password-addon"/>
                                                <button className="btn btn-light " type="button" id="password-addon"><i
                                                    className="mdi mdi-eye-outline"></i></button>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label  className="form-label">Name</label>
                                            <input type="text" className="form-control"  placeholder="Enter name" value={name} onChange={e=>setName(e.target.value)}/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Date of Birth</label>
                                            <input type="date" className="form-control"  placeholder="Enter name" value={dob} onChange={e=>setDOB(e.target.value)} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Area</label>
                                            <select name="AreaId" id="" className="form-select" value={area} onChange={(e)=>setArea(e.target.value)}>
                                                <option value="">Choose One</option>
                                                {
                                                    Areas.map((item, i) => (
                                                      <option value={item.Id}>{item.Name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Portfolio Link</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter Link" value={portfolio} onChange={e=>setPortfolio(e.target.value)}/>
                                        </div>



                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="button" onClick={RegisterSubmit}>Sign Up
                                            </button>
                                        </div>




                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="mt-5 text-center">

                            <div>

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
export default ArtistRegister;