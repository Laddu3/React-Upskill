import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'

export default function Create() {
    const[id,idchange] =useState("");
    const[name,namechange] =useState("");
    const[description,descriptionchange] =useState("");
    const[status,statuschange] =useState("");
    const [file, filechange] = useState("");

    const navigation = useNavigate();
        const handleSubmit=(e)=>{
        e.preventDefault();
        const taskdata = {id,name,status,description,file}
       
            fetch('http://localhost:8000/Taskdata',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(taskdata)
            }).then((res)=>{
            return res.json(); 
            })
            .then((res)=>{
                alert('Record inserted');
                navigation('/');
            }).catch((err)=>{
                console.log(err);
            })
           }
  return (
    <>
      <div className='row'>
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Task Management</h2>
                </div>
                <div className='card-body'>
                <div className='offset-lg-3 col-lg-6'>
                <form onSubmit={handleSubmit}>
                    <div className='row' style={{'textAlign':'left'}}>
                    <div className='container'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Task Id</label>
                                    <input type='number' value={id} onChange={e=>idchange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Task Name</label>
                                    <input type='text' value={name} onChange={e=>namechange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Task Status</label>
                                    <select className="form-control" value={status} onChange={e=>statuschange(e.target.value)} required>
                                    <option>Pending</option>
                                    <option>Completed</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Task Description</label>
                                    <textarea type='text' value={description} onChange={e=>descriptionchange(e.target.value)} className='form-control' required></textarea>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Files</label>
                                    <input type='file' value={file} onChange={e=>filechange(e.target.value)} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group' style={{'textAlign':'center'}}>
                                    <button type='submit' className='btn btn-success m-2'>Submit</button>
                                    <Link to="/" className='btn btn-danger'>Back</Link>
                                </div>
                            </div>
                    </div>
                </div>
</form>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
