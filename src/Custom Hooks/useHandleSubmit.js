import { useNavigate } from "react-router-dom";
import usePostData from "./usePostData";
import useClearInputFeilds from "./useClearInputFeilds";


const useHandleSubmit = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending, isError, error } = usePostData();
  const clearFeilds = useClearInputFeilds();

  function handleSubmit(e, errors, data, endPoint, setterFun, navigationPath) {
    e.preventDefault();
    // console.log(" the errors from the handle Submit !!", errors);
    if (Object.keys(errors).length === 0) {
      // post the data in the backend
      const waitForResponse = async (dataToBePosted) => {
        await mutateAsync({
          ...dataToBePosted,
          ["endPoint"]: endPoint,
        });
      };
      waitForResponse(data);

      clearFeilds(data, setterFun);

      navigate(navigationPath);
    } else {
      console.log("DID NOT SUBMIT ENCOUNTERING INVALID INPUTS ");

      <p>Encountered Errors Try Later !!</p>;
      navigate("/");
    }
  }
  return handleSubmit;
};

export default useHandleSubmit;
