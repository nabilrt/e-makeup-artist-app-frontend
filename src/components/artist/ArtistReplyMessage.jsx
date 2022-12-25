import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import ArtistTopBar from "../topbars/ArtistTopBar";

const ArtistReplyMessage=()=>{
    const {id}=useParams();
    const[reply,setReply]=useState("");
    let history=useNavigate();

    const sendReply = () =>{

        console.log(reply);
        console.log(id);
        let obj={Reply:reply,Id:id};
        axios.post("https://localhost:44306/api/artist/message/reply",obj)
            .then(resp=>{
                history("/artist/inbox/"+resp.data.InboxId);
            }).catch(err=>{
            console.log(err.response.data);
        });

    }

    return(
        <>
            <ArtistTopBar/><br/><br/><br/>
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

export default ArtistReplyMessage;