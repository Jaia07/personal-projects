import { GridLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <>
      <GridLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={100}
      />
    </>
  );
};

export default Spinner;
