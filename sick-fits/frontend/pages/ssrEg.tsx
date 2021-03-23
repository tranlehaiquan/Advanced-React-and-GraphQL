import { gql, useQuery } from "@apollo/react-hooks";
import { getDataFromTree } from "@apollo/react-ssr";
import React from "react";
import Link from "next/link";
import withApollo from "../lib/withData";

const QUERY = gql`
  query getUsers {
    allUsers {
      id
      name
      email
    }

    allProducts {
      id
      name
      description
      price
    }
  }
`;

const SsrEg = () => {
  const { data } = useQuery(QUERY);

  return (
    <div>
      <p>This is server render</p>
      {JSON.stringify(data)}
      <Link href="/">Index page</Link>
    </div>
  );
};

export default withApollo(SsrEg, { getDataFromTree });
