import mongoose from "mongoose";
const formBuilderSchema = new mongoose.Schema(
  {
    formName: {
      type: String,
      required: [true, "Form name is a required field"],
    },
    formData: {
      type: [{}],
      required: [true, "Form Data is required"],
    },
  },
  { timestamps: true }
);
const formdata = mongoose.model("formdata", formBuilderSchema);
export default formdata;
