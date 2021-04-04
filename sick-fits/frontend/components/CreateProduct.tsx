import React from "react";
import useForm from "../utils/useForm";
import Form from "./styles/Form";

interface Props {
  className?: string;
}

const CreateProduct: React.FC<Props> = (props) => {
  const { values, onChange, clearForm, resetForm } = useForm({
    name: "Quan",
    price: 25,
    image: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values.image);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Image
        <input
          type="file"
          id="image"
          name="image"
          value={values.image}
          onChange={onChange}
        />
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
