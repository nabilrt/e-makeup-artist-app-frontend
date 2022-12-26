import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const PendingRequests=()=>{
    const{id}=useParams()
    let history=useNavigate()
    useEffect(()=>{

        axios.get("https://localhost:44306/api/artist/approve/"+id).then(resp=>{
            history("/admin/artists/approve")
        }).catch(err=>{
            console.log(err.response.data)
        })

    },[])

}
export default PendingRequests;