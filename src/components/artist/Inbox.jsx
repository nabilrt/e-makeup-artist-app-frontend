import ArtistTopBar from "../topbars/ArtistTopBar";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const ArtistInbox=()=>{
    const[inbox,setInbox]=useState([]);
    const[customers,SetCustomers]=useState("");


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
            axios.post("https://localhost:44306/api/artist/inbox",obj).then(resp=>{
                setInbox(resp.data);
            }).catch(err=>{
                console.log(err.response.data)
            })



        }).catch(err => {
            console.log(err);
            navigate("/login");
        })
    }, [])

    const getCustomerName=(id)=>{

        axios.get("https://localhost:44306/api/customer/get/"+id).then(resp=>{
            SetCustomers(resp.data.Name);
            console.log(resp.data.Name);
        }).catch(err=>{
            console.log(err.response.data)
        })

        return customers;

    }

    return(
        <>
            <ArtistTopBar/><br/><br/>
            <div className="container"> <br/>
                <h5>Conversations With Customers</h5> <br/>
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
                                <td>{getCustomerName(item.CustomerId)}</td>
                                <td><Link to={"/artist/inbox/"+item.Id} className="btn btn-outline-info">Chat</Link></td>
                            </tr>


                        ))
                    }
                    </tbody>
                </table>

            </div>


        </>
    )

}

export default ArtistInbox;