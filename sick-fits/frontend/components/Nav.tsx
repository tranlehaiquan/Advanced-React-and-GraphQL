import Link from "next/link";
import React from "react";
import NavStyles from "./styles/NavStyles";
interface Props {
  className?: string;
}

const Nav: React.FC<Props> = (props) => {
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </NavStyles>
  );
};

export default Nav;
