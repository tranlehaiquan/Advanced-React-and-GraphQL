import { gql, useQuery } from "@apollo/client";
import React from "react";
import { addApolloState, initializeApollo } from "../lib/apolloClient";

const QUERY = gql`
  query getProducts {
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

  return <div>{JSON.stringify(data)}</div>;
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
