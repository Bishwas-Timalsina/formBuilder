import mongoose from "mongoose";

const addForm = async (req: any, res: any) => {
  const { formName, formData } = req.body;

  const formModel = mongoose.model("formdata");

  if (!formName || !formData) throw "Sorry please include all the fields";

  const form = await formModel.create({
    formName,
    formData,
  });

  const iFrame = `<iframe src="http://localhost:5173/form/${form?._id}" title="Form Builder"></iframe>`;

  res.status(200).json({
    status: "Success",
    message: "Form get method",
    form,
    iFrame: iFrame,
  });
};
export default addForm;
