import Header from "../components/FormRender/Header";
import Divider from "../components/FormRender/Divider";
import Input from "../components/FormRender/Input";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const formFields = [
  {
    type: "heading",
    name: "Header Text",
    style: [],
  },
  {
    type: "input",
    name: "Full Name",
    label: "Full Name",
    placeholder: "Enter your full name",
    inputType: "text",
    stlye: [],
    validations: [],
  },
  {
    type: "input",
    name: "Company Name",
    label: "Company Name",
    placeholder: "Enter your full name",
    inputType: "text",
    stlye: [],
    validations: [],
  },
  {
    type: "divider",
    name: "divider",
    stlye: [],
    validations: [],
  },
  {
    type: "input",
    name: "Email",
    label: "Email",
    placeholder: "Enter your email address",
    inputType: "email",
    stlye: [],
    validations: [],
  },
  {
    type: "input",
    name: "Address",
    label: "Address",
    placeholder: "Enter your address",
    inputType: "text",
    stlye: [],
    validations: [],
  },
];

const FormRender = () => {
  const [formField, setFormField] = useState<any>([]);
  const [formName, setFormName] = useState<any>("");
  const { id } = useParams();
  useEffect(() => {
    fetchFormData(id as string);
    console.log("Hello");
  }, [id]);
  const fetchFormData = async (id: string) => {
    const response = await axios.get(`http://localhost:8000/api/v1/form/${id}`);
    const formField = response?.data?.formData;
    setFormField(formField?.formData);
    setFormName(formField?.formName);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center gap-2">
        <p className="text-[22px] font-[500] underline">Generated Form</p>

        <div className="w-[50%] flex flex-col justify-start items-center border-[2px] border-[#113342] rounded-md px-2 py-3">
          <p className="text-[22px] font-[500] text-[#585858]">{formName}</p>
          <form
            action=""
            className="flex flex-col justify-start items-start w-[70%]"
          >
            <div className="flex flex-col w-[100%] gap-3">
              {formField &&
                formField?.map((formField: any) => {
                  switch (formField?.type) {
                    case "input":
                      return <Input formField={formField} />;
                    case "heading":
                      return <Header formField={formField} />;
                    case "divider":
                      return <Divider formField={formField} />;
                  }
                })}
            </div>
            <div className="flex flex-row justify-start items-center gap-2">
              <button className="border border-blue-950 rounded-md px-1 py-2 text-[white] bg-blue-950 w-[150px]">
                Submit
              </button>
              <button className="border border-blue-950 rounded-md px-1 py-2 w-[150px]">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormRender;
