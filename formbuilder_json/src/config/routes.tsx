import { RouteObject } from "react-router-dom";
import { IndexLayout } from "../layout/IndexLayout";
import FormBuilder from "../pages/FormBuilder";
import SavedForm from "../pages/SavedForm";
import FormRender from "../pages/FormRender";
import GeneratedForm from "../pages/GeneratedForm";

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
  {
    path:'generate',
    element:<GeneratedForm/>
  }
];
export default routes;
