import mongoose from "mongoose";

const getSingleForm = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const formModel = mongoose.model("formdata");
    const formData = await formModel.findById(id);
    if (!formData) {
      return res.status(404).json({
        status: "Error",
        message: "Invalid  Form ID",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Successfully obtained single form",
      formData,
    });
  } catch (error: any) {
    console.error("Error fetching category:", error);
    res.status(500).json({
      status: "Error",
      message: "Failed to retrieve category",
      error: error.message,
    });
  }
};
export default getSingleForm;
