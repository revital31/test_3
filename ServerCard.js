import React from 'react';
import Status from '../Components/Status'




 function ServerCard(props)  {

    const {id,name,ip,hosting_company,status,datetime} =props;
   // const[servers,setServers] = useState ([])
    
    
    return (
        <div className="server-items">
            <Status id ={id} status={status}/>
                
                <ul>
                    <li>
                        Id: {id}
                    </li>


                    <li>
                        Name: {name}
                    </li>

                    <li>
                        Ip: {ip}
                    </li>

                    <li>
                        hosting_company: {hosting_company}
                    </li>

                    <li>
                        Status: {status}
                    </li>

                    <li>
                        Timestamp: {datetime}
                    </li>

                </ul>



        </div>
    )
}

export default ServerCard;