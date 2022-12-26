import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";
import AdminTopBar from "../topbars/AdminTopBar";

const AdminDashboard=()=>{
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
        }).catch(err => {
            console.log(err);
            navigate("/login");
        })
    }, [])
    return(
        <>
            <AdminTopBar/><br/> <br/> <br/>
            <div className="container">
                Welcome to Admin Dashboard
            </div>

        </>
    )

}

export default AdminDashboard;