import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';

function Menu() {

    const [data, setData] = useState('');

    const navigate=useNavigate();


    const EditItem=(Id)=>{
        
        navigate("/edit/"+Id);
    }

    function Additem(){
        navigate("/add");
    }

      const  DeleteItem =(Id)=>{

        fetch("http://localhost:8000/Item/"+Id,{
            method:"DELETE",
         
        }).then((res)=>{
            alert("Deleted succesfully")
            window.location.reload();

        }).catch((err)=>{
            console.log("err.message");

        })


      }



    useEffect(() => {

        fetch("  http://localhost:8000/Item").then((res) => {
            return res.json();
        }).then((resp) => {
            setData(resp);

        }).catch((err) => {
            console.log(err.message);
        })
        // eslint-disable-next-line  
    }, []);



    function User(){

        navigate("/userdetails");

    }


    return (
        <div>

            <div className="board">
                <h1>Welcome to SurabiRestaraunt</h1>
              

            </div>
            <div className="button">
            <button  onClick={Additem} >ADD ITEMS (+)</button>
            <button  onClick={User} >USERS (+)</button>
        
            </div>

            <div className="tbl" >
                <table border={1} className="table">
                    <thead>
                        <tr>
                            <th> ItemId</th>
                            <th>ItemName</th>
                            <th>ItemPrice</th>
                            <th>Action</th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ItemName}</td>
                                <td>{item.ItemPrice}</td>
                                <td><button className='btn' onClick={()=>{EditItem(item.id)}} >Edit</button> 
                                <button className='btn'  onClick={()=>{DeleteItem(item.id)}}>Delete</button> 
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

export default Menu;