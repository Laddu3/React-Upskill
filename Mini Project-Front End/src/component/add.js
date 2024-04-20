
import { useState } from 'react';
import { Navigate, useNavigate ,Link} from 'react-router-dom';


function AddItem() {
    const [id, Idchange] = useState("");
    const [ItemName,namechange] = useState("");
    const [ItemPrice, pricechange] = useState("");
  

    const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault();

        const data = { id, ItemName, ItemPrice};


   
        fetch("http://localhost:8000/Item", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            alert('saved succesfully')
            navigate('/menu');

        }).catch((err) => {
            console.log(err.message);
        })
    }



    return (
        <div className='container'>
            <h1>ADD NEW ITEM</h1>

            <form onSubmit={handlesubmit}>
                <table  className='tbl'>
                    <tr>
                        <td><label>ItemId:</label></td>
                        <td> <input value={id} onChange={e => Idchange(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td> <label >ItemName:</label></td>
                        <td> <input value={ItemName} onChange={e => namechange(e.target.value)} ></input></td>
                    </tr>
                    <tr>
                        <td><label>ItemPrice:</label></td>
                        <td><input value={ItemPrice} onChange={e => pricechange(e.target.value)}></input></td>
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

export default AddItem;