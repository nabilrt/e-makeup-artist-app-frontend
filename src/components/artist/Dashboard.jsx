import ArtistTopBar from "../topbars/ArtistTopBar";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ArtistDashboard=()=>{
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
        }).catch(err => {
            console.log(err);
            navigate("/login");
        })
    }, [])

    return(
        <>
        <ArtistTopBar/> <br/>
        <div className="container">
            Welcome to Artist Dashboard
        </div>
        </>
    )

}

export default ArtistDashboard;

