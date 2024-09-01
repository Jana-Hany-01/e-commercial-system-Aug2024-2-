import { useDispatch } from "react-redux";
import { register, login, logOut } from "../Features/UsersSlice";
const useUpdateUsersState = () => {
  const dispatch = useDispatch();
  function updateUsersState(specifiyReducerFun, updatedState) {
    // /register
    switch (specifiyReducerFun) {
      case "/register":
        console.log(
          " Dispatching the Register from the  hook of updating the state"
        );
        console.log(" the updated state ", updatedState);
        dispatch(register(updatedState));
        break;
      case "/login":
        console.log(
          " Dispatching the Login from the  hook of updating the state"
        );
        dispatch(login(updatedState));
        break;
      case "/logOut":
        dispatch(logOut());
    }
  }

  return { updateUsersState };
};
export default useUpdateUsersState;
