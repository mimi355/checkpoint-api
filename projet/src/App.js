import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import UserList from './UserList';

function App() {

const[listOfUser,setListOfUser]=useState([])

useEffect(()=>{
const fetchData=async()=>{
  const result = await axios.get("https://jsonplaceholder.typicode.com/users")
  setListOfUser(result.data)
} 
fetchData();
},[])



  return (
<>
<h1>Users Cards</h1> 
    <div className="App">
 {listOfUser.map(user=> <UserList    user={user}     key={user.id}  />)}
    </div>
    </>
  );
}

export default App;
