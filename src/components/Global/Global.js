// All ComponentsA

import { Outlet,Link } from "react-router-dom"


export const loginPage = ()=>{
    return(
      <div>Home Component</div> 

    )
}
export const HomePage = ()=>{
    return(
      <main>
        <h1 className="text-center my-3 bg-yellow-400 text-gery-700 w-40 mx-auto ">Authentication</h1>

        <Nav></Nav>
        <div className="flex justify-center text-center py-3">
        <Outlet></Outlet>
        </div>
         </main> 
      
    )
}
export const HomeContent = ()=>{
    return(
      <main>Home Component
      </main>  
    )
}
export const Nav = ()=>{
    return(
      <nav className="flex bg-indigo-500 text-gray-50 gap-4 text-center justify-center">
        <Link to={'/'}> Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/dashboard'}> Dashboard</Link>
        <Link to={'/settings'}> Settings</Link>
        </nav>  
    )
}
export const Dashboard = ()=>{
    return(
      <div>Dashboard Component</div>  
    )
}
export const Settings = ()=>{
    return(
      <div> Settings Component</div>  
    )
}

