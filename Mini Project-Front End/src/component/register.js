import { useState } from 'react';
import { Navigate, useNavigate ,Link} from 'react-router-dom';


function RegisterUser() {
    const [id, Idchange] = useState("");
    const [username,usernamechange] = useState("");
    const [password, passwordchange] = useState("");
  

    const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault();

        const data = { id, username, password};


   
        fetch("http://localhost:8000/USER", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            alert('saved succesfully')
            navigate('/user');

        }).catch((err) => {
            console.log(err.message);
        })
    }



    return (
        <div className='container'>
            <h1>ADD NEW USER</h1>

            <form onSubmit={handlesubmit}>
                <table  className='tbl'>
                    <tr>
                        <td><label>UserId:</label></td>
                        <td> <input value={id} onChange={e => Idchange(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td> <label >UserName:</label></td>
                        <td> <input value={username} onChange={e => usernamechange(e.target.value)} ></input></td>
                    </tr>
                    <tr>
                        <td><label>UserPassword:</label></td>
                        <td><input value={password} onChange={e => passwordchange(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        
                       <td> <input type="submit" color='red' ></input></td>
                        <td><button className='btnn'>
                        <Link to='/menu'>back</Link>
                        </button></td>
                        

                        
                    </tr>
                </table>
            </form>

        </div>
    );
}

export default RegisterUser;