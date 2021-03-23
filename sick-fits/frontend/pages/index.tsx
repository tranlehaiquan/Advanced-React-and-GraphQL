import { gql, useQuery } from "@apollo/react-hooks";
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

const Index = () => {
  const { loading, data } = useQuery(QUERY);

  return (
    <div>
      <p>This is statis render</p>
      {loading ? "...loading" : JSON.stringify(data)}
      <Link href="/ssrEg">Server side example</Link>
    </div>
  );
};

export default withApollo(Index);
