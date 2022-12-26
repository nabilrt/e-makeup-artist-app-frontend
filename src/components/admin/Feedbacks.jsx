import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import AdminTopBar from "../topbars/AdminTopBar";

const Feedbacks=()=>{
    const[feedbacks,setFeedbacks]=useState([]);
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

        var url = 'admin/get/' + data.userId
        AxiosConfig.get(url).then(res => {


            //  var obj={Id:data.userId}
            axios.get("https://localhost:44306/api/feedbacks").then(resp=>{
                setFeedbacks(resp.data);
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
            <AdminTopBar/> <br/><br/><br/>
            <div className="container"> <br/>
                <h5>Customer Feedbacks</h5>
                <table className="table table-striped mb-0">

                    <thead className="table table-danger">
                    <tr>
                        <th>#</th>
                        <th>By</th>
                        <th>Feedback</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        feedbacks.map((item,i)=>(
                            <tr className="table table-striped">
                                <td>{item.Id}</td>
                                <td>{getCustomerName(item.User_Id)}</td>
                                <td>{item.Description}</td>
                            </tr>


                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Feedbacks;