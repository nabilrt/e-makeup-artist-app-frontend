import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ArtistTopBar from "../topbars/ArtistTopBar";

const UpdateOrders=()=>{
    const{id}=useParams()
    const[status,setStatus]=useState("");
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


            //var obj={Id:id}
            axios.get("https://localhost:44306/api/order/details/"+id).then(resp=>{
                setStatus(resp.data.Status);
            }).catch(err=>{
                console.log(err.response.data)
            })



        }).catch(err => {
            console.log(err);
            history("/login");
        })
    }, [])

    const updateStatus=()=>{
        var obj={Id:id,Status:status}
        axios.post("https://localhost:44306/api/order/update",obj).then(resp=>{
            history("/artist/orders")
        }).catch(err=>{
            console.log(err.response.data)
        })
    }

    return(
        <>
            <ArtistTopBar/><br/> <br/>
            <div className="container">
                <div className="col-md-12 col-lg-12 col-xl-12">
                    <form >
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Status</label>
                            <select name="" id="" className="form-control" value={status} onChange={e=>setStatus(e.target.value)}>
                                <option value="">Choose One</option>
                                <option value="Ordered">Ordered</option>
                                <option value="On The Way">On the Way</option>
                                <option value="Provided">Provided</option>
                            </select>
                        </div> <br/>
                        <button type="button" className="btn btn-success btn-sm" onClick={updateStatus}>Update</button>

                        &nbsp;

                    </form>
                </div>
            </div>

        </>
    )

}

export default UpdateOrders;