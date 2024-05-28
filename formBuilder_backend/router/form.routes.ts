import { Router } from "express";
import addForm from "./controller/addForm";
import getForm from "./controller/getForm";
import getSingleForm from "./controller/getSingleForm";
import updateForm from "./controller/updateForm";
import deleteForm from "./controller/deleteForm";

const formRouter = Router();
formRouter.post("/add", addForm);
formRouter.get("/", getForm);
formRouter.get("/:id", getSingleForm);

formRouter.patch("/update/:id", updateForm);
formRouter.delete("/delete/:id", deleteForm);

export default formRouter;
