import { useMutation } from "@tanstack/react-query";
import Axios from "../api/axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, register } from "../Features/UsersSlice";
import { authenticateUser } from "../Features/AuthenticationSlice";
import { jwtDecode } from "jwt-decode";

const usePostData = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => {
    return state.authenticationState;
  });

  const { mutateAsync, isPending, isError, error } = useMutation({
    mutationFn: async (data) => {
      const { endPoint } = data;
      // console.log("%%%%%%%%%%% the endPoint:",endPoint);
      // console.log("%%%%%%%%%%% the data:",data);
      try {
        const response = await Axios.post(endPoint, data);
        // console.log("%%%%%%%%%%% the response from the try Block :",response);
        // console.log(" the response of the post is :",response);
        if (endPoint === "/register") {
          dispatch(register(data));
        } else if (endPoint === "/login") {
          // console.log(" in the Posting hook and the end point is login ..... Dispatching the Auth")

          const decodedToken = jwtDecode(response.data.accessToken);

          dispatch(
            login({
              ...data,
              id: decodedToken.id,
              accessToken: response.data.accessToken,
            })
          );
          dispatch(
            authenticateUser({
              ...authData,
              id: decodedToken.id,
              accessToken: response.data.accessToken,
            })
          );

          return response;
        }
      } catch (err) {
        // console.log("%%%%%%%% encountered an error ", err);
        console.error(err);
        throw err;
      }
    },
  });
  return { mutateAsync, isPending, isError, error };
};
export default usePostData;
