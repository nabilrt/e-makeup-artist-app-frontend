import {useEffect, useState} from "react";
import axios from "axios";
import Packages from "./Packages";
import CustomerTopBar from "../topbars/CustomerTopBar";
import {useNavigate} from "react-router-dom";

const Cart=()=>{
  //  const[packages,setPackages]=useState([]);
    let history=useNavigate()
    const[cart,SetCart]=useState([]);
    const[amount,SetTotalAmount]=useState("");
    const[cartState,setCartState]=useState("");
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

            SetCart(JSON.parse(localStorage.getItem("carts")))

            var items=JSON.parse(localStorage.getItem("carts"));
            var totalAmount=0;
            for (let i = 0; i < items.length; i++) {

                totalAmount+=parseInt(items[i].Price);

            }
            SetTotalAmount(totalAmount);



        }).catch(err => {
            console.log(err);
            history("/login")

        })
    }, [])

    const checkOut=()=>{

        var items=JSON.parse(localStorage.getItem('carts'))


        if(items.length==0){
            console.log(items.length)
            setCartState("Cart is Empty")
        }else{

            var obj={CustomerId:data.userId,ArtistId:items[0].Offered_By, TotalPrice:amount, Status:"Ordered"}
            axios.post("https://localhost:44306/api/order/add",obj).then(resp=>{
                console.log("confirmed")
                localStorage.removeItem("carts")
                history("/packages/all")

            }).catch(err=>{
                console.log(err.response.data)
            })

        }

    }

    const removeItem = (serviceId) => {
        let data = JSON.parse(localStorage.getItem('carts'))
        let newData = [];
        let flag = true

        data.forEach(service => {
            console.log(service)
            if (service.Id == serviceId && flag) {
                flag = false
            }
            else {
                newData.push(service)
            }

            localStorage.setItem("carts", JSON.stringify(newData));
        })
    }



    return (
        <>
          <CustomerTopBar/> <br/><br/><br/>
            <div className="container">
                <h5>Cart</h5> <br/>
                <table className="table table-striped mb-0">
                    <thead className="table table-primary">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((item,i)=>
                            <tr key={i}>
                                <td>{item.Id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={e=>removeItem(item.Id)}>Remove</button></td>

                            </tr>

                        )
                    }
                    </tbody>

                </table> <br/>
                <h6>Total Amount : {amount}</h6> <br/>
                <button className="btn btn-outline-success" onClick={checkOut}>Checkout</button>
                &nbsp; <p className="h6 text-danger">{cartState}</p>
            </div>

        </>

    )
}

export default Cart;