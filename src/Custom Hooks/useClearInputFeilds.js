const useClearInputFeilds = () => {
  function clearFeilds(data, setterFun) {
    for (const key in data) {
      data[key] = "";
    }
    setterFun(data);
  }
  return clearFeilds;
};
export default useClearInputFeilds;
