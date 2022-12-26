import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import CustomerTopBar from "../topbars/CustomerTopBar";

const Packages=()=>{
    const[packages,setPackages]=useState([]);
    const[artists,SetArtists]=useState("");
    const[artNames,setNames]=useState([]);
    const[key,setKey]=useState("");
    const[cartItem,setCartItems]=useState([]);
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

        var url = 'customer/get/' + data.userId
        AxiosConfig.get(url).then(res => {


         //   var obj={Id:data.userId}
            axios.get("https://localhost:44306/api/packages").then(resp=>{
                setPackages(resp.data);
            }).catch(err=>{
                console.log(err.response.data)
            })

            axios.get("https://localhost:44306/api/artists").then(resp=>{
                setNames(resp.data)
            }).catch(err=>{
                console.log(err.response.data)
            })



        }).catch(err => {
            console.log(err);
            navigate("/login");
        })
    }, [])

    const getArtistName=(id)=>{

        axios.get("https://localhost:44306/api/artist/get/"+id).then(resp=>{
            SetArtists(resp.data.Name);
            console.log(resp.data.Name);
        }).catch(err=>{
            console.log(err.response.data)
        })

        return artists;

    }

    const addToCart=(item)=>{
        const{Id,Name,Description,Price,Offered_By}=item
        var obj={Id:Id,Name:Name,Price:Price,Offered_By:Offered_By}
        var cart = JSON.parse(localStorage.getItem("carts") || "[]");
        cart.push(obj);
        localStorage.setItem("carts", JSON.stringify(cart));

    }

    const FindPackages=()=>{

        var obj={Id: key}

        axios.post("https://localhost:44306/api/artists/packages",obj).then(resp=>{
            setPackages(resp.data)
        }).catch(err=>{
            console.log(err.response.data)
        })

    }

    return(
        <>
            <CustomerTopBar/><br/><br/>
            <div className="container">
                <h5>All Packages</h5> <br/>
                <form action="">
                    <select className="form-select" name="" id="" value={key} onChange={(e)=>setKey(e.target.value)}>
                        <option value="">Choose Artist</option>
                        {
                            artNames.map((item, i) => (
                                <option value={item.Id}>{item.Name}</option>
                            ))
                        }
                    </select> <br/>
                <button className="btn btn-success btn-sm" onClick={FindPackages} type="button">Find</button>
                </form> <br/>



                <table className="table table-striped mb-0">
                    <thead className="table table-primary">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Artist Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        packages.map((item,i)=>
                        <tr key={i}>
                            <td>{item.Id}</td>
                            <td>{item.Name}</td>
                            <td>{getArtistName(item.Offered_By)}</td>
                            <td>{item.Price}</td>
                            <td><button className="btn btn-success btn-sm" onClick={e=>addToCart(item)} type="button">Add To Cart</button></td>

                        </tr>

                        )
                    }
                    </tbody>


                </table>
            </div>

        </>
    )

}

export default Packages;