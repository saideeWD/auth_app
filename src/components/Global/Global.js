import { Outlet, Link, NavLink, useNavigate, useLocation, Navigate } from "react-router-dom";
import AuthConsumer from "../Auth/Auth";
import { Children } from "react";

// All ComponentsA
export const LoginPage = () => {
  const [authed, dispatch] = AuthConsumer();
let navigate =useNavigate()
  return (
    <div>
      <h1>This is Login Page</h1>
      <button
        className="broder px-5 bg-indigo-500 text-gray-50 rounded  "
        onClick={() => {
          dispatch({ type: "login" })
          navigate('/dashboard',{replace:true});
        }}
      >
        Login
      </button>
    </div>
  );
};
export const HomePage = () => {
  const [authed, dispatch] = AuthConsumer();

  console.log(authed);

  return (
    <main>
      <h1 className="text-center my-3 bg-yellow-400 text-gery-700 w-40 mx-auto ">
        Authentication
      </h1>

      <Nav></Nav>
      <div className="flex justify-center text-center py-3">
        <Outlet></Outlet>
      </div>
    </main>
  );
};
export const HomeContent = () => {
  return <main>Home Component</main>;
};
export const Nav = () => {
const [{auth}] =AuthConsumer();

  function ActiveLink(props) {
    return (
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "#1d2d44" : "",
          };
        }}
        {...props}
      />
    );
  }
  return (
    <nav className="flex bg-indigo-500 text-gray-50 gap-4 text-center justify-center">
      <ActiveLink to={"/"}> Home</ActiveLink>
      <ActiveLink to={"/login"}>Login</ActiveLink>
      {
        auth ? (
          <>
          <ActiveLink to={"/dashboard"}> Dashboard</ActiveLink>
          <ActiveLink to={"/settings"}> Settings</ActiveLink>  
          </>
        ):<></>
       
      }
    </nav>
  );
};
export const Dashboard = () => {
  const [authed, dispatch] = AuthConsumer();
  let navigate =useNavigate();
  return (
    <div>
      <h1>This is Dashboard</h1>
      <button
        className="broder px-5 bg-indigo-500 text-gray-50 rounded  "
        onClick={() => {
          dispatch({ type: "logout" });
          navigate('/dashboard',{replace:false})
        }}
      >
        Logout{" "}
      </button>
    </div>
  );
};
export const Settings = () => {
  const [authed, dispatch] = AuthConsumer();
  let navigate =useNavigate()
    return (
      <div>
        <h1>This is Login Page</h1>
        <button
          className="broder px-5 bg-indigo-500 text-gray-50 rounded  "
          onClick={() => {
            dispatch({ type: "logout" })
            navigate('/dashboard',{replace:false});
          }}
        >
          Logout
        </button>
      </div>
    );
};
export function RequireAuth({children}){
  const[authed] = AuthConsumer();
  const location =useLocation();

  return authed.auth === true?(
    children

  ):(
<Navigate to={"/login" } replace state={{path:location.pathname}}></Navigate>
  )

}