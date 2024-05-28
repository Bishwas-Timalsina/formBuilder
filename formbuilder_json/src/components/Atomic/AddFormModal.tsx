import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFormModal = (props: any) => {
  const { setModalOpen } = props;
  const [formName, setFormName] = useState<string>("");

  const navigate = useNavigate();
  const handleInputChange = (e: any) => {
    const { value } = e.target;

    setFormName(value);
  };
  const handleFormSubmit = () => {
    localStorage.setItem("formName", formName);
    navigate("/formbuilder");
  };
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-start items-start gap-4 w-[100%]"
        >
          <input
            placeholder="Enter the form name"
            name="formName"
            required
            onChange={handleInputChange}
            value={formName}
            className="border border-black rounded-md px-1 py-2 w-[100%]"
          />
          <div className="flex justify-end items-center w-[100%] gap-2">
            <button
              className="border border-[#10103b] rounded-md px-1 py-2 w-[130px]"
              onClick={() => setModalOpen(false)}
            >
              Cancen
            </button>
            <button
              className="border bg-[#10103b] rounded-md px-1 py-2 text-white w-[130px]"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFormModal;
