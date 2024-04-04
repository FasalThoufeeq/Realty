import mongoose, { Schema, model } from "mongoose";

const PropertySchema = new Schema(
  {
    headline: {
      type: String,
      trim: true,
    },
    subHeading: {
      type: String,
      trim: true,
    },
    propertyCategory: {
      type: String,
      trim: true,
    },
    place: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    shortParagraph: {
      type: String,
      trim: true,
    },
    saleOrRent: {
      type: String,
      trim: true,
    },
    bedCount: {
      type: Number,
    },
    bathCount: {
      type: Number,
    },

    rate: {
      type: Number,
    },
    rateInWords: {
      type: String,
    },
    squarefeet: {
      type: Number,
    },
    propertyImages: [
      {
        publicId: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    list: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const Property = model("Property", PropertySchema);
export default Property;
