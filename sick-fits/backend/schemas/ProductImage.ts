import { text } from "@keystone-next/fields";
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
      },
    }),
    altText: text({ isRequired: true }),
  },
});

export default Product;
