import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";

const DeletePackage=()=>{
    const{id}=useParams()
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

            axios.get("https://localhost:44306/api/package/delete/"+id).then(resp=>{
                history("/packages/manage")
            }).catch(err=>{
                console.log(err.response.data)
            })

        }).catch(err => {
            console.log(err);
            history("/login");
        })
    }, [])



}

export default DeletePackage;