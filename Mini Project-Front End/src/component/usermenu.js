import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';

function UserMenu() {

    const [data, setData] = useState('');

    const navigate=useNavigate();


    useEffect(() => {

        fetch("  http://localhost:8000/Item").then((res) => {
            return res.json();
        }).then((resp) => {
            setData(resp);

        }).catch((err) => {
            console.log(err.message);
        })
         
        // eslint-disable-next-line 
    }, [])


    return (
        <div>

            <div className="board">
                <h1>Welcome to SurabiRestaraunt</h1>
              

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
                                <td><button className='btn'  >Order</button> 
                                
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

export default UserMenu;