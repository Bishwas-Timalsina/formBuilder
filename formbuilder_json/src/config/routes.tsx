import { RouteObject } from "react-router-dom";
import { IndexLayout } from "../layout/IndexLayout";
import FormBuilder from "../pages/FormBuilder";
import SavedForm from "../pages/SavedForm";
import FormRender from "../pages/FormRender";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        path: "formBuilder",
        element: <FormBuilder />,
      },
      {
        path: "/",
        element: <SavedForm />,
      },
    ],
  },
  {
    path: "/form/:id",
    element: <FormRender />,
  },
];
export default routes;
