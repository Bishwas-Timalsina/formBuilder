const deleteForm = async (req: any, res: any) => {
  res.status(200).json({
    status: "Success",
    message: "Form delete method",
  });
};
export default deleteForm;
