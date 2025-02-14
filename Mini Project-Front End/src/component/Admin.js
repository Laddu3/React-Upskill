import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function AdminLogin() {


    const navigate = useNavigate();

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [data,setData]=useState('');

    

    function namechange(e){
        setUsername (e.target.value) ;
    }

    function passchange(e){
        setPassword (e.target.value);
    }


    useEffect(()=>{

        fetch("  http://localhost:8000/Admin").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setData(resp);

        }).catch((err)=>{
            console.log(err.message);
        })

    },[])

function handlelogin(e){
    e.preventDefault();
    const account=data.find((data)=>data.username===username);
    if(account&&account.password===password){
        alert("login successfull");
        navigate('/menu');
    }
    else{
        alert("invalid password")
        navigate('/');
    }
}



function User(){
    navigate('/user');

}

    return (
        <div >
            <div className='container' Align='center' >
                <h1>ADMIN LOGIN</h1>
                <form className='form' onSubmit={handlelogin}>
                    <table>
                        <tr>
                           
                            <input type={"text"} placeholder="USERNAME" value={username} onChange={namechange}></input>
                        </tr><br></br>
                        <tr>
                            
                         
                            <input type="password" placeholder="PASSWORD" value={password} onChange={passchange}></input>
                        </tr><br></br>
                        <tr>

                            
                             <button   className='submit' onClick={User} > USER</button> 
                             <button className='submit'  onClick={handlelogin}>LOGIN</button>
                            {/* <input className='submit' type={"submit"} value={'LOGIN'}></input> */}
                        </tr>
                    </table>
                </form>
            </div>

        </div>
    );
}

export default AdminLogin;