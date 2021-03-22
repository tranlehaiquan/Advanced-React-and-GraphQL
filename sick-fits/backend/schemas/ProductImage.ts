import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";

export const Product = list({
  fields: {
    image: cloudinaryImage({
      label: "Source",
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_KEY,
        apiSecret: process.env.CLOUDINARY_SECRET,
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
