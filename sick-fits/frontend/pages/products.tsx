import { gql, useQuery } from "@apollo/client";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import styled from "styled-components";
import { Product as IProduct } from "../types/Product";
import Product from "../components/Product";

const QUERY = gql`
  query getProducts {
    allProducts {
      id
      name
      description
      status
      price
      photo {
        id
        image {
          publicUrl
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

const Index = () => {
  const { data } = useQuery<{ allProducts: IProduct[] }>(QUERY);
  return (
    <ProductsListStyles>
      {data.allProducts.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </ProductsListStyles>
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
