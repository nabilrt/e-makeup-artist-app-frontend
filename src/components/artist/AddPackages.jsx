import ArtistTopBar from "../topbars/ArtistTopBar";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AddPackages=()=>{
    const[name,setName]=useState("");
    const[description,setDescription]=useState("");
    const[price,setPrice]=useState();
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

        }).catch(err => {
            console.log(err);
            history("/login");
        })
    }, [])

    const addPackage=()=>{
        console.log(name);
        console.log(description);
        console.log(price);
        var obj={Name:name,Description:description,Price:price,Offered_By:data.userId};
        axios.post("https://localhost:44306/api/package/add",obj).then(resp=>{
            history("/packages/manage");
        }).catch(err=>{
            console.log(err.response.data)
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
                                            <h5 className="text-primary">Add Packages</h5>
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
                                            <button className="btn btn-primary waves-effect waves-light" type="button" onClick={addPackage}>Add
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

export default AddPackages;