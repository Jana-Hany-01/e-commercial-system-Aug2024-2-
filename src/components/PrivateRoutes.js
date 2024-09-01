import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const userData = useSelector((state) => {
    return state.authenticationState;
  });
  // console.log(" the users Data from the private Route !!", userData);
  return userData.auth ? (
    <Outlet />
  ) : (
    <div>
    
      <p> Sorry You are not allowed to access This Page </p>
      <h1>
        
        userName: {userData.name}
        userEmail:{userData.email}
        is Authenticated : {userData.auth}
      </h1>
    </div>
  );
};
export default PrivateRoutes;
