import ArtistTopBar from "../topbars/ArtistTopBar";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ManagePackages=()=>{
    const[packages,SetPackages]=useState([]);
    let navigate=useNavigate();
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


            var obj={Id:data.userId}
            axios.post("https://localhost:44306/api/artists/packages",obj).then(resp=>{
                SetPackages(resp.data);
            }).catch(err=>{
                console.log(err.response.data)
            })



        }).catch(err => {
            console.log(err);
            navigate("/login");
        })
    }, [])

    return(
        <>
            <ArtistTopBar/><br/><br/><br/>
            <div className="container"> <br/>
                <h5>Packages Offered By Me</h5> <br/>
                <table className="table table-striped mb-0">

                    <thead className="table table-success">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        packages.map((item,i)=>(
                            <tr className="table table-striped">
                                <td>{item.Id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td><Link to={"/package/update/"+item.Id} className="btn btn-outline-warning btn-sm">Edit</Link></td>
                                <td><Link to={"/package/delete/"+item.Id} className="btn btn-outline-danger btn-sm">Delete</Link></td>
                            </tr>


                        ))
                    }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default ManagePackages;