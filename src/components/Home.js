import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// this is used for debugging , it is not the Home page of the website 
const Home = () => {
  const usersData = useSelector((state) => {
    return state.usersState;
  });
  console.log(" the users Data from Home !!", usersData);
  const authData = useSelector((state) => {
    return state.authenticationState;
  });
  console.log(" the Auth data From Home", authData);
  const navigate = useNavigate();

  return (
    <>
      <h1> Home </h1>

      <div>
        {usersData && (
          <div>
            <h1>User's data </h1>
            <p> Name: {usersData.username} </p>
            <p>Email: {usersData.email}</p>
            <p>password: {usersData.password}</p>
            <p>access Token :{usersData.accessToken}</p>
          </div>
        )}
        <div>
          <h1> Authentication Data </h1>
          {authData.id && <p> The User id {authData.id}</p>}
          {authData.accessToken && (
            <p> The User's accessToken {authData.accessToken}</p>
          )}
          {<p> is Authenticated : {authData.auth} </p>}
          {console.log(" the auth Data", authData.auth)}
        </div>

        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Registeration Page
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login Page
        </button>
        <button
          onClick={() => {
            navigate("/registered-users");
          }}
        >
          Show Registered users
        </button>
      </div>
    </>
  );
};
export default Home;
