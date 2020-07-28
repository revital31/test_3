import React,{useContext} from 'react'
import DataContext from '../Contexts/DataContext';

 const  Status=(props) => {
     const {servers,setServers} = useContext(DataContext);
          const{id,status} = props;


    const updateStatus = async () => {
            try{

                const res = await fetch('http://localhost:5000/return/status',{
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id,status: !status})
                });
                const {success} = await res.json();
                if(success) {
                    const updatedServers = servers.map(server =>{
                        if(server.id === id)  {
                            return {...server,status: status === 0 ? 1 :0}
                        }
                        return server;
                    });
                    setServers(updatedServers);

                }else {
                    alert('error');
                }
               
            } catch(e) {
                    alert('error');
            }



        
    }

     
    return (
        <button onClick={updateStatus}>
            {status}
        </button>
    )
}

export default Status;
