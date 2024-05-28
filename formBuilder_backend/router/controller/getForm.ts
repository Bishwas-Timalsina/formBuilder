const getForm = async (req: any, res: any) => {
  res.status(200).json({
    status: "Success",
    message: "Form get method",
  });
};
export default getForm;
