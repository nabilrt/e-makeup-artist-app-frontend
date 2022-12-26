import ArtistTopBar from "../topbars/ArtistTopBar";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import CustomerTopBar from "../topbars/CustomerTopBar";

const CustomerInbox=()=>{
    const[inbox,setInbox]=useState([]);
    const[artists,SetArtists]=useState("");


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

        var url = 'customer/get/' + data.userId
        AxiosConfig.get(url).then(res => {


            var obj={Id:data.userId}
            axios.post("https://localhost:44306/api/customer/inbox",obj).then(resp=>{
                setInbox(resp.data);
            }).catch(err=>{
                console.log(err.response.data)
            })



        }).catch(err => {
            console.log(err);
            navigate("/login");
        })
    }, [])

    const getArtistName=(id)=>{

        axios.get("https://localhost:44306/api/artist/get/"+id).then(resp=>{
            SetArtists(resp.data.Name);
            console.log(resp.data.Name);
        }).catch(err=>{
            console.log(err.response.data)
        })

        return artists;

    }

    return(
        <>
            <CustomerTopBar/><br/><br/>
            <div className="container"> <br/>
                <h5>Conversations With Artists</h5> <br/>
                <table className="table table-striped mb-0">

                    <thead className="table table-primary">
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Chat</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        inbox.map((item,i)=>(
                            <tr className="table table-striped">
                                <td>{item.Id}</td>
                                <td>{getArtistName(item.ArtistId)}</td>
                                <td><Link to={"/customer/inbox/"+item.Id} className="btn btn-outline-info">Chat</Link></td>
                            </tr>


                        ))
                    }
                    </tbody>
                </table>

            </div>


        </>
    )

}

export default CustomerInbox;