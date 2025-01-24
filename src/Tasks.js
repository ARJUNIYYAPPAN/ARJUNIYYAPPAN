import React, { useEffect, useState } from 'react'

function Tasks() {
  const [data, setData]=useState([]);
  useEffect(()=>{
  fetch('http://localhost:8080/getbookm')
  .then((response)=>{
    if(!response.ok){
      throw new Error('request faild');
    }
    return response.json();
  })
  .then((ans)=>{
    console.log(ans,"api response");
    setData(ans);
  })
  .catch((error)=>{
    console.error(error,"error");

  });
},[]);

  return (
    <div>
      {data.map((BookManagement)=>(
        <ul key ={BookManagement.BookId}>
          <li>boookname:{BookManagement.title}</li>
        </ul>
      )
      )}
    </div>
  )
}

export default Tasks