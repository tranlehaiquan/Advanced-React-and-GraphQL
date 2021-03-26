import { gql, useQuery } from "@apollo/client";
import React from "react";
import Link from "next/link";
import { addApolloState, initializeApollo } from "../lib/apolloClient";

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

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SsrEg;
