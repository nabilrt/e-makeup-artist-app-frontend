import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import ArtistTopBar from "../topbars/ArtistTopBar";

const ManageOrders=()=>{
    const[orders,setOrders]=useState([]);
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
            axios.post("https://localhost:44306/api/artist/orders",obj).then(resp=>{
                setOrders(resp.data);
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
                <h5>My Orders By Customers</h5> <br/>
                <table className="table table-striped mb-0">

                    <thead className="table table-danger">
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map((item,i)=>(
                            <tr className="table table-striped">
                                <td>{item.Id}</td>

                                <td>{getCustomerName(item.CustomerId)}</td>
                                <td>{item.TotalPrice}</td>
                                <td>{item.Status}</td>
                                <td><Link to={"/artist/order/update/"+item.Id} className="btn btn-outline-warning btn-sm">Edit</Link></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>


        </>
    )

}
export default ManageOrders;