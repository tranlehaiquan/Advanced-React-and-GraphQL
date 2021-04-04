import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import { Product as IProduct } from "../types/Product";

const Product: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <ItemStyles>
      <img src={product?.photo.image.publicUrl} alt={product?.photo.altText} />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
    </ItemStyles>
  );
};

export default Product;
