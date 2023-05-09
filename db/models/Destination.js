import mongoose from "mongoose";

const { Schema } = mongoose;

const destinationSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: Number, required: true },
  image: {
    type: String,
    required: true,
    trim: true,
    // validate: {
    //   validator: function (v) {
    //     return /^https?:\/\/\S+$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid URL`,
    // },
  },
  mapURL: {
    type: String,
    required: true,
    trim: true,
    // validate: {
    //   validator: function (v) {
    //     return /^https?:\/\/\S+$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid URL`,
    // },
  },
  description: { type: String, required: true },
});

const Destination =
  mongoose.models.Destination ||
  mongoose.model("Destination", destinationSchema);

export default Destination;
