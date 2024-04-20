import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditUser=()=>{

    const {Id }= useParams();
    const navigate=useNavigate();
    useEffect(()=>{

        fetch("http://localhost:8000/USER/" +Id).then((res)=>{
            return res.json();
        }).then((resp)=>{
            idchange(resp.id);
            usernamechange(resp.username);
            passwordchange(resp.password);
          

        }).catch((err)=>{
            console.log(err.message);
        })

       
 // eslint-disable-next-line 
    },[]);


    const [id,idchange]=useState("");
    const[username,usernamechange]=useState("");
    const[password,passwordchange]=useState("");

     function handlesubmit(e){

        e.preventDefault();
        const data={id,username,password};

        fetch("http://localhost:8000/USER/"+Id,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        }).then((res)=>{
            alert("Edited succesfully")
            navigate("/userdetails");

        }).catch((err)=>{
            console.log("err.message");

        })

    }



    return(
        <div>
            <div>
                <form onSubmit={handlesubmit}>
                    <table>
                        <div>
                            <tr><input type="text" value={id}  disabled="disabled" onChange={e=>idchange(e.target.value)}></input></tr>
                        </div>
                        <div>
                            <tr><input type="text" value={username} onChange={e=>usernamechange(e.target.value)}></input></tr>
                        </div>
                        <div>
                            <tr><input type="text" value={password} onChange={e=>passwordchange(e.target.value)}></input></tr>
                        </div>

                        <div>
                            <tr><input type="submit" ></input></tr>
                        </div>
                    </table>
                </form>
            </div>
            
        </div>
    );

}
export default EditUser;