//first page connected to app.js

import React,{useState,useEffect} from 'react'
import ServerCard from './ServerCard';
import DataContext from '../Contexts/DataContext'

 const ServerList=(props) => {

    
    const[servers,setServers] = useState ([])
    
     
    useEffect(()=>{
        fetch('http://localhost:5000/servers')
        .then(response=>response.json())
         .then(json=>setServers(json))
    },[]);



    return(
        
      <DataContext.Provider value ={{servers,setServers}}>
      
        <div className="server-list">
            <h1>Servers List</h1>
        

        {/**
         * this will bring all the name of the servers
         * 
         * {servers.map(server =>{
           
           return <div key={server.id}>{server.name}</div>
        })}

         * 
         * 
         * 
         * 
         * 
         */}


         {/*in order to get a list of all the servers from SERVER CARD*/ }
        {servers.map(server =>
        
          <ServerCard key={server.id} {...server}/>)}
            
        </div>
        </DataContext.Provider>

        
    )
 }

export default ServerList;