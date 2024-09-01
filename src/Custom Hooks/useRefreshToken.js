import { refreshAccessToken } from "../Features/AuthenticationSlice";
import { useDispatch } from "react-redux";
import Axios from "../api/axios";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const refresh = async () => {
    const response = await Axios.get("/refresh", { withCredentials: true });
    dispatch(refreshAccessToken({ accessToken: response.data.accessToken }));
    return response.data.accessToken; // returning the new access token
  };
return refresh;
};
export default useRefreshToken;

