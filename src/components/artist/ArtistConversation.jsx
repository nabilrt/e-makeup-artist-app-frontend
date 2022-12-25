import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import ArtistTopBar from "../topbars/ArtistTopBar";

const ArtistConversation=()=>{
    const{id}=useParams();
    const[conversations,SetConversations]=useState([]);

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


           // var obj={Id:data.userId}
            axios.get("https://localhost:44306/api/conversations/artist/inbox/"+id).then(resp=>{
                SetConversations(resp.data);
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
            <ArtistTopBar/><br/> <br/>
            <div className="container">
                <div className="col-md-12 col-lg-12 col-xl-12">
                    <h5>Conversations</h5><br/>
                    <table className="table table-striped mb-0">
                        <thead className="table table-primary">
                        <tr>
                            <th>#</th>
                            <th>Message</th>
                            <th>Reply</th>
                            <th>Action</th>
                        </tr>

                        </thead>
                        <tbody>
                        {
                            conversations.map((item,i)=>(
                                <tr key={i} className="table table-striped">
                                    <td>{item.Id}</td>
                                    <td>{item.Message}</td>
                                    <td>{item.Reply}</td>
                                    <td>{item.Reply!==null? "":<Link to={"/artist/conversation/message/reply/"+item.Id} className="btn btn-outline-dark">Reply</Link>
                                    }</td>
                                </tr>


                            ))
                        }
                        </tbody>

                    </table> <br/>
                    <br/>

                    <Link to={"/artist/conversation/message/new/"+id} className="btn btn-success btn-sm">New Message</Link> &nbsp;
                    <Link to={"/artist/inbox"} className="btn btn-danger btn-sm">Go to Inbox</Link>
                </div>


            </div>

        </>
    )

}

export default ArtistConversation;