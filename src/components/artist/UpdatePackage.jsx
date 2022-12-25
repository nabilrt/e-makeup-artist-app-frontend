import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ArtistTopBar from "../topbars/ArtistTopBar";

const UpdatePackage=()=>{
    const{id}=useParams()
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");
    let history=useNavigate();
    let data = JSON.parse(localStorage.getItem('user'))
    console.log(data)
    useEffect(() => {
        const AxiosConfig = axios.create({
            baseURL: 'https://localhost:44306/api',
            headers: {
                Authorization: data.accessToken
                // UserId: data.userId
            }
        });

        var url = 'artist/get/' + data.userId
        AxiosConfig.get(url).then(res => {


            var obj={Id:id}
            axios.post("https://localhost:44306/api/package/details",obj).then(resp=>{
                setName(resp.data.Name);
                setPrice(resp.data.Price);
                setDescription(resp.data.Description);
            }).catch(err=>{
                console.log(err.response.data)
            })



        }).catch(err => {
            console.log(err);
            history("/login");
        })
    }, [])

    const updatePackage=()=>{
        var obj={Id:id,Name:name,Price:price,Description: description,Offered_By: data.userId}
        axios.post("https://localhost:44306/api/package/update",obj).then(resp=>{
            history("/packages/manage")
        }).catch(err=>{
            console.log(err.response.data);
        })
    }

    return(
        <>
            <ArtistTopBar/><br/><br/><br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Update Package</h5>
                                            <small>Add Proper Information's</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">

                                <div className="p-2">
                                    <form className="form-horizontal" >

                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Description</label>
                                            <textarea type="text" className="form-control" placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Price</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input type="number" className="form-control" placeholder="Enter amount" value={price} onChange={(e)=>setPrice(e.target.value)}
                                                       aria-label="Password" aria-describedby="password-addon"/>

                                            </div>
                                        </div>


                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light btn-sm" type="button" onClick={updatePackage}>Update
                                            </button>
                                        </div>




                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )



}

export default UpdatePackage;