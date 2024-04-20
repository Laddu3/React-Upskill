import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Edit=()=>{

    const {Id }= useParams();
    const navigate=useNavigate();
    useEffect(()=>{

        fetch("http://localhost:8000/Item/" +Id).then((res)=>{
            return res.json();
        }).then((resp)=>{
            idchange(resp.id);
            namechange(resp.ItemName);
            pricechange(resp.ItemPrice);
          

        }).catch((err)=>{
            console.log(err.message);
        })

       
 // eslint-disable-next-line 
    },[]);


    const [id,idchange]=useState("");
    const[ItemName,namechange]=useState("");
    const[ItemPrice,pricechange]=useState("");

     function handlesubmit(e){

        e.preventDefault();
        const data={id,ItemName,ItemPrice};

        fetch("http://localhost:8000/Item/"+Id,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        }).then((res)=>{
            alert("Edited succesfully")
            navigate("/menu");

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
                            <tr><input type="text" value={id}  disabled="disabled"></input></tr>
                        </div>
                        <div>
                            <tr><input type="text" value={ItemName} onChange={e=>namechange(e.target.value)}></input></tr>
                        </div>
                        <div>
                            <tr><input type="text" value={ItemPrice} onChange={e=>pricechange(e.target.value)}></input></tr>
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
export default Edit;