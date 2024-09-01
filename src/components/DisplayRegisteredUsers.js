import useFetchData from "../Custom Hooks/useFetchData";
const DisplayRegisteredUsers = () => {
  const { data, isLoading, isError, error } = useFetchData({
    endPoint: "/register",
  });
  console.log(" the data from display the registered users ", data);
// the backend does not seem to be providing this fetch 
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1> The Registered Users </h1>
    </div>
  );
};
export default DisplayRegisteredUsers;
