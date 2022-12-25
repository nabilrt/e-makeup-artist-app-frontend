import {useNavigate} from "react-router-dom";
import axios from "axios";

const Logout=()=>{
    const history=useNavigate();
    let user=JSON.parse(localStorage.getItem("user"));
    var obj={UserId:user.userId,TokenDetails:user.accessToken}
    axios.post('https://localhost:44306/api/token/expire',obj).then(resp=>{
        console.log(resp.data);
        if(resp.data==="Expired"){
            console.log('logged out');
            history('/login');
        }
    }).catch(
        err=>{
            console.log(err.response.data);
        });
}


export default Logout;