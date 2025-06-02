// import API from './Api';
import axiosInstance from './Api';
import Storage from './Storage';
import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;
const logData = {
  username: 'emilys',
  password: 'emilyspass',
  expiresInMins: 30, // optional, defaults to 60
};

function ProductsList() {
     const [data, setData] = useState(null);
  // Define the submit handler
   function handleSubmit() {
     axiosInstance.get('/products/1') // Replace with your API endpoint
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

const RetriveStorage = (()=>{
    Storage.getStorage('token')
//   setReem(a)
  console.log("fffffff",Storage.getStorage('token'))
})

 function RetriveStoragea(){
    Storage.getStorage('token')
//   setReem(a)
  console.log("fffffff",Storage.getStorage('token'))
}

  return (
    <>
    <button onClick={()=>handleSubmit()}>login</button>
    <button onClick={()=>RetriveStoragea()}>Retrive</button>
    </>

   

    // <button>RetriveStorage</button>
  );
}

export default ProductsList;


