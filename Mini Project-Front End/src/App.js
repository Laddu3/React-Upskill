import { BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminLogin from './component/Admin';
import Edit from './component/Edit';
import Menu from './component/menu';
import AddItem from './component/add';
import User from './component/User';
import UserMenu from './component/usermenu';
import UserDetails from './component/userdetails';
import EditUser from './component/Edituser';
import AddUser from './component/addusers';
import RegisterUser from './component/register';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<AdminLogin />}> </Route>
         <Route path='/menu' element={<Menu />}></Route> 
         <Route path='/edit/:Id' element={<Edit />}></Route>
         <Route path='/add' element={<AddItem />}></Route>
         <Route path='/user' element={<User/>}></Route>
         <Route path='/usermenu' element={<UserMenu />}></Route>
         <Route path='/userdetails' element={<UserDetails />}></Route>
         <Route path='/edit/user/:Id' element={<EditUser />}></Route>
         <Route path='/add/user' element={<AddUser />}></Route>
         <Route path='register' element={<RegisterUser />}></Route>
       
      </Routes>

      </BrowserRouter>
 
    </div>
  );
}

export default App;
