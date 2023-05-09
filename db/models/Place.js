import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  // id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: Number, required: true },
  image: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/\S+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL`,
    },
  },
  mapURL: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/\S+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL`,
    },
  },
  description: { type: String, required: true },
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
