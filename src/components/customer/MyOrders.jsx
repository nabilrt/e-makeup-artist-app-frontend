import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import ArtistTopBar from "../topbars/ArtistTopBar";
import {useEffect, useState} from "react";
import CustomerTopBar from "../topbars/CustomerTopBar";

const MyOrders=()=>{

    const[orders,setOrders]=useState([]);
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
            axios.post("https://localhost:44306/api/customer/orders",obj).then(resp=>{
                setOrders(resp.data);
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
            <CustomerTopBar/><br/><br/>
            <div className="container"> <br/>
                <h5>My Orders</h5> <br/>
                <table className="table table-striped mb-0">

                    <thead className="table table-danger">
                    <tr>
                        <th>#</th>

                        <th>Total Price</th>
                        <th>Status</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map((item,i)=>(
                            <tr className="table table-striped">
                                <td>{item.Id}</td>


                                <td>{item.TotalPrice}</td>
                                <td>{item.Status}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>


        </>
    )

}
export default MyOrders;