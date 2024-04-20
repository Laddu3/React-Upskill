import React, { useState,useEffect } from 'react'
import  { Link,useNavigate} from 'react-router-dom';

export default function Taskdata() {
     const [taskdata,taskchange] = useState(null);
     const navigation = useNavigate();
     const loadcontent = (id)=>{
        navigation('/taskdata/'+id);
     }
     const deletecontent = (id)=>{
        if(window.confirm("Do you want to delete")){
            fetch('http://localhost:8000/Taskdata/'+id,{
            method:"DELETE"
            }).then((res)=>{
                alert('Record Deleted');
                navigation('/');
                window.location.reload(false)
            }).catch((err)=>{
                console.log(err);
            })
           }
        }
     useEffect(()=>{
        fetch('http://localhost:8000/Taskdata').then((res)=>{
        return res.json(); 
        })
        .then((res)=>{
            taskchange(res);
            console.log(taskdata);
        }).catch((err)=>{
            console.log(err);
        })
   
    },[])
  return (
    <>
      <div className='row'>
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2 style={{backgroundColor:'green'}}>Task Management</h2>
                </div>
                
                <div className='card-body'>
                <Link to="/taskadd" className='btn btn-success mb-3'>Add task</Link>
                <table className='table table-bordered'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <td>Task Id</td>
                            <td>Task Name</td>
                            <td>Task Status</td>
                            <td>Task Description</td>
                            <td>Files</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {taskdata &&
                        taskdata.map(item=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.description}</td>
                                <td>{item.file}</td>
                                <td><a onClick={()=>loadcontent(item.id)} className='btn btn-dark m-1'>Update</a>
                                <a onClick={()=>deletecontent(item.id)} className='btn btn-danger'>Delete</a>
                                </td>
                            </tr>
                        )) 
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
