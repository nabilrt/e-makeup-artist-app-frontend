import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import AdminTopBar from "../topbars/AdminTopBar";

const ApproveArtist=()=>{
    const[artists,setArtists]=useState([]);
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


          //  var obj={Id:data.userId}
            axios.post("https://localhost:44306/api/artists/unapproved").then(resp=>{
                setArtists(resp.data);
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
            <AdminTopBar/> <br/> <br/>
            <div className="container"> <br/>
                <h5>Unapproved Artists</h5> <br/>
                <table className="table table-striped mb-0">

                    <thead className="table table-primary">
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        artists.map((item,i)=>(
                            <tr className="table table-striped">
                                <td>{item.Id}</td>
                                <td>{item.Username}</td>
                                <td>{item.Email}</td>
                                <td><Link to={"/admin/approve/artist/"+item.Id} className="btn btn-outline-success btn-sm">Approve</Link></td>
                            </tr>


                        ))
                    }
                    </tbody>
                </table>

            </div>
        </>
    )

}
export default ApproveArtist;