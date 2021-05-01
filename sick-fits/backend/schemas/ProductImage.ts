import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import dotenv from 'dotenv';
dotenv.config();

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

export const Product = list({
  fields: {
    image: cloudinaryImage({
      label: "Source",
      cloudinary: {
        cloudName: CLOUDINARY_CLOUD_NAME!,
        apiKey: CLOUDINARY_KEY!,
        apiSecret: CLOUDINARY_SECRET!,
        folder: "sickfits",
      },
    }),
    altText: text({ isRequired: true }),
    product: relationship({
      ref: "Product.photo",
    }),
  },
});

export default Product;
