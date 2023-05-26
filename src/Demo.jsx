import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { demoAction } from "./actions/demoActions";

const Demo = () => {
  const { loading, data } = useSelector((state) => state.demo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(demoAction());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="App">
          <h1>{data.message}</h1>
        </div>
      )}
    </>
  );
};

export default Demo;
