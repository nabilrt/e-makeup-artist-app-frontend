import {Link, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import ArtistTopBar from "../topbars/ArtistTopBar";

const ArtistNewMessage=()=>{
    const{id}=useParams()
    const[newMessage,setNewMessage]=useState("");
    let history=useNavigate();
    const sendNewMessage=()=>{
        console.log(newMessage);
        let obj={Message:newMessage,InboxId:id}
        axios.post("https://localhost:44306/api/artist/message/send",obj).then(resp=>{
            history("/artist/inbox/"+id);
        }).catch(err=>{
           console.log(err.response.data);
        });
    }
return(
    <>
        <ArtistTopBar/><br/> <br/>
        <div className="container">
            <div className="col-md-12 col-lg-12 col-xl-12">
                <form >
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">New Message</label>
                        <input type="text" name="" id="" value={newMessage} onChange={e=>setNewMessage(e.target.value)} className="form-control"/>
                    </div> <br/>
                    <button type="button" className="btn btn-success btn-sm" onClick={sendNewMessage}>Send</button>

                    &nbsp;
                    <Link to={"/artist/inbox/"+id} className="btn btn-danger btn-sm" >Go Back</Link>



                </form>
            </div>
        </div>

    </>
)
}

export default ArtistNewMessage;