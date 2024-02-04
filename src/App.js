import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes, useRoutes } from 'react-router-dom';
import{
  loginPage,
  HomePage,
  HomeContent,
  Dashboard,
  Settings

} from'./components/Global/Global'

function App() {
  const routes = useRoutes([
    {
      path:'/',
      element:<HomePage></HomePage>,
      children:[
        {
          index:true,
          element:<HomeContent></HomeContent>
        },
        {
          path:'/login',
          element:<loginPage></loginPage>
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'/settings',
          element:<div>Settings</div>
        } ,

      ] ,
    },
    
  ]);
  return routes
}

    // <Routes>
    //   <Route path='/'element={<div>Home</div>}></Route>
    //   <Route path='/login'element={<div>Login</div>}></Route>
    //   <Route path='/dashboard'element={<div>Dashboard</div>}></Route>
    //   <Route path='/settings'element={<div>Setting</div>}></Route>

    // </Routes>


export default App;
