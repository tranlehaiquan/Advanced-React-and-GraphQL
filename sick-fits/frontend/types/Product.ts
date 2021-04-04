export type Product = {
  id: string;
  name: string;
  description: string;
  status: string;
  price: number;
  photo?: Photo;
};

export type Photo = {
  id: string;
  image: {
    publicUrl: string;
    publicUrlTransformed: string;
  };
  altText: string;
};
