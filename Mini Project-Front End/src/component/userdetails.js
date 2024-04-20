import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';

function UserDetails() {

    const [data, setData] = useState('');

    const navigate=useNavigate();


    const EditUser=(Id)=>{
        
        navigate("/edit/user/"+Id);
    }

    function AddUSer(){
        navigate("/add/user");
    }


    function Back(){
        navigate("/menu");
    }

      const  DeleteUser =(Id)=>{

        fetch("http://localhost:8000/USER/"+Id,{
            method:"DELETE",
         
        }).then((res)=>{
            alert("Deleted succesfully")
            window.location.reload();

        }).catch((err)=>{
            console.log("err.message");

        })


      }



    useEffect(() => {

        fetch("  http://localhost:8000/USER").then((res) => {
            return res.json();
        }).then((resp) => {
            setData(resp);

        }).catch((err) => {
            console.log(err.message);
        })
        // eslint-disable-next-line  
    }, []);





    return (
        <div>

            <div className="board">
                <h1>Welcome to SurabiRestaraunt</h1>
              

            </div>
            <div className="button">
            <button  onClick={AddUSer} >ADD USERS (+)</button>
            <button  onClick={Back} >BACK</button>

        
            </div>

            <div className="tbl" >
                <table border={1} className="table">
                    <thead>
                        <tr>
                            <th> USERID</th>
                            <th>USERNAME</th>
                            <th>USERPASSWORD</th>
                            <th>ACTION</th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td><button className='btn' onClick={()=>{EditUser(user.id)}} >Edit</button> 
                                <button className='btn'  onClick={()=>{DeleteUser(user.id)}}>Delete</button> 
                               </td>

                            </tr>



                        ))

                        }


                    </tbody>
                </table>

            </div>


        </div>
    );
}

export default UserDetails;