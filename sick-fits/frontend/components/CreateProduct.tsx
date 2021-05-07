import { gql, useMutation } from "@apollo/client";
import React from "react";
import useForm from "../utils/useForm";
import Form from "./styles/Form";

interface Props {
  className?: string;
}

const MUTATION_CREATE_PRODUCT = gql`
  mutation abc($name: String!, $description: String!, $status: String!) {
    createProduct(
      data: { name: $name, description: $description, status: $status }
    ) {
      id
      name
    }
  }
`;

const CreateProduct: React.FC<Props> = (props) => {
  const { values, onChange } = useForm({
    name: "Quan",
    price: 25,
    image: "",
    description: "",
  });
  const [createProduct] = useMutation(MUTATION_CREATE_PRODUCT, {
    variables: {
      name: "abc",
      description: "122",
      status: "abc",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Image
        {values.image}
        <input type="file" id="image" name="image" onChange={onChange} hidden />
      </label>
      <label>
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          id="description"
          name="description"
          value={values.description}
          onChange={onChange}
        />
      </label>

      <label>
        Price
        <input
          type="number"
          id="price"
          name="price"
          value={values.price}
          onChange={onChange}
        />
      </label>
      <button type="submit">Add new</button>
    </Form>
  );
};

export default CreateProduct;
