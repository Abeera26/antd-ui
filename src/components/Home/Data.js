import React ,{useState,useEffect} from 'react'
import {AiOutlineHeart} from "react-icons/ai";


import {GlobalOutlined,EditOutlined,DeleteFilled,PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './index.css'
function Data() {
    const [User,setUser] = useState([]);
    
    
    const fetchData =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
          
            console.log(data);
            setUser(data)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    
    function Userimage(username) {
      var url='https://avatars.dicebear.com/v2/avataaars/%7B%7B'+username.u+'%7D%7D.svg?options[mood][]=happy';
      return (
          <div>
            <img src={url} alt=""/>
          </div>
              
      )
  }
  
    return (
        
        <div className="row">
          
          {User.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                 
                  <Userimage u={data.username}/>

                  
                  
                  <h5>
                    {data.name}
                  </h5>
                  
                  
                  <p>
                  <MailOutlined style={{ color: 'black'}}/>
                  &nbsp; {data.email}
                  </p>
                  
                 
                
        
                  <p>
                  <PhoneOutlined style={{ color: 'black'}}/>
                  &nbsp; {data.phone}
                  </p>
                  <p>
                  <GlobalOutlined style={{color: 'black'}} />
                  &nbsp;  {data.website}
                  </p>
                  
                 <button onClick={()=> alert('liked')}>
                 <AiOutlineHeart style={{ color: 'red'}} /></button>
                 <button onClick={()=> alert('Edit')}><EditOutlined  style={{ color: 'black'}} /></button>
                 <button onClick={()=> alert('Trash')}><DeleteFilled style={{color: 'black'}} /></button>
                  
                </div>
              
            </div>
          ))}
        </div>
    
      
    )
}

export default Data