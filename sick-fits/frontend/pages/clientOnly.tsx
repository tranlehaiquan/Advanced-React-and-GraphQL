import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

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

const ClientOnly = () => {
  const { data, loading, error } = useQuery(QUERY);

  return (
    <div>
      <p>This is statis render</p>
      {JSON.stringify(data)}
      <Link href="/ssrEg">Server side example</Link>
    </div>
  );
};

export default ClientOnly;
