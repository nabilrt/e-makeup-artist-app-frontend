import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from "./components/Homepage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import ArtistRegister from "./components/artist/Register";
import CustomerRegister from "./components/customer/Register";
import Unapproved from "./components/Unapproved";
import ArtistDashboard from "./components/artist/Dashboard";
import Logout from "./components/Logout";
import AdminDashboard from "./components/admin/Dashboard";
import CustomerDashboard from "./components/customer/Dashboard";
import ArtistInbox from "./components/artist/Inbox";
import axios from "axios";
import ArtistConversation from "./components/artist/ArtistConversation";
import ArtistNewMessage from "./components/artist/ArtistNewMessage";
import ArtistReplyMessage from "./components/artist/ArtistReplyMessage";
import AddPackages from "./components/artist/AddPackages";
import ManagePackages from "./components/artist/ManagePackages";
import UpdatePackage from "./components/artist/UpdatePackage";
import DeletePackage from "./components/artist/DeletePackage";
import ManageOrders from "./components/artist/ManageOrders";
import UpdateOrders from "./components/artist/UpdateOrders";
import ArtistProfile from "./components/artist/ArtistProfile";
var token = null;
if(localStorage.getItem('user')){
    var obj = JSON.parse(localStorage.getItem('user'));
    token = obj.TokenDetails;
}
axios.defaults.headers.common["Authorization"] = token;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>

          <Routes>
              <Route path="/" index element={<Homepage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/artist/register" element={<ArtistRegister/>}/>
              <Route path="/customer/register" element={<CustomerRegister/>}/>
              <Route path="/unverified" element={<Unapproved/>}/>
              <Route path="/artist/dashboard" element={<ArtistDashboard/>}/>
              <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
              <Route path="/customer/dashboard" element={<CustomerDashboard/>}/>
              <Route path="/artist/inbox" element={<ArtistInbox/>}/>
              <Route path="/artist/inbox/:id" element={<ArtistConversation/>}/>
              <Route path="/artist/conversation/message/new/:id" element={<ArtistNewMessage/>}/>
              <Route path="/artist/conversation/message/reply/:id" element={<ArtistReplyMessage/>}/>
              <Route path="/packages/add" element={<AddPackages/>}/>
              <Route path="/packages/manage" element={<ManagePackages/>}/>
              <Route path="/package/update/:id" element={<UpdatePackage/>}/>
              <Route path="/package/delete/:id" element={<DeletePackage/>}/>
              <Route path="/artist/orders" element={<ManageOrders/>}/>
              <Route path="/artist/order/update/:id" element={<UpdateOrders/>}/>
              <Route path="/artist/profile" element={<ArtistProfile/>}/>
              <Route path="/logout" element={<Logout/>}/>
          </Routes>
      </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
