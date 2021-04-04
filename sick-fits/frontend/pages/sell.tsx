import React from "react";
import CreateProduct from "../components/CreateProduct";

interface Props {
  className?: string;
}

const Sell: React.FC<Props> = (props) => {
  return (
    <div>
      <CreateProduct />
    </div>
  );
};

export default Sell;
