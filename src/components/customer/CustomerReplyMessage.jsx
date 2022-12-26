import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import CustomerTopBar from "../topbars/CustomerTopBar";

const CustomerReplyMessage=()=>{
    const {id}=useParams();
    const[reply,setReply]=useState("");
    let history=useNavigate();

    const sendReply = () =>{

        console.log(reply);
        console.log(id);
        let obj={Reply:reply,Id:id};
        axios.post("https://localhost:44306/api/customer/message/reply",obj)
            .then(resp=>{
                history("/customer/inbox/"+resp.data.InboxId);
            }).catch(err=>{
            console.log(err.response.data);
        });

    }

    return(
        <>
            <CustomerTopBar/><br/><br/><br/>
            <div className="container">
                <h4>Reply</h4>
                <form action="">
                    <label htmlFor="reply" className="form-label">Reply Message</label>
                    <input type="text" name="" id="reply" className="form-control" value={reply} onChange={(e)=>setReply(e.target.value)}/>

                </form> <br/>
                <button className="btn btn-outline-dark btn-sm" onClick={sendReply}>Reply</button>

            </div>
        </>
    )
}

export default CustomerReplyMessage;