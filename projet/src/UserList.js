import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import {FaInstagramSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
const UserList =({user})=>{
return(

   
<div className="card" >
<div className="top">
<h2 className="name">{user.username}</h2>
<img  className='img-card'  src='https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png' alt="avatar"></img>
</div>
<div className="bottom">
<p className="info"> name:  {user.name} </p>
<p className="info">email:  {user.email}</p>
<p className="info"> address:  {user.address.street}</p>
<p className="info"> tel:  {user.phone}</p>
</div>
<hr />
<ul>
<FaTwitter color="#40a8c4"  size='2rem'/> 
<FaFacebook color="#40a8c4"    size='2rem'/> 
 <FaFacebookMessenger color="#40a8c4"    size='2rem'/> 
 <FaInstagramSquare  color="#40a8c4"   size='2rem'/>
</ul>
</div>
)
}
export default UserList