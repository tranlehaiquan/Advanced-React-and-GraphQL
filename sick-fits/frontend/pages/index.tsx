import { gql, useQuery } from "@apollo/client";
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

const Index = () => {
  const { data, loading, error } = useQuery(QUERY);
  console.log(data, loading, error);

  return (
    <div>
      <p>This is statis render</p>
      {JSON.stringify(data)}
      <Link href="/ssrEg">Server side example</Link>
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default Index;
