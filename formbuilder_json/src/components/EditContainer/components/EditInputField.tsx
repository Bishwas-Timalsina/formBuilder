import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../context/Form";
import { Checkbox, Radio } from "antd";

const EditInputField = (props: any) => {
  const { droppedContainer, setDroppedContainer } = useContext(FormContext);
  const { id } = props;
  const headerValue = droppedContainer.filter(
    (container: any) => container.type === "heading"
  );

  useEffect(() => {
    setLabel(
      JSON.parse(localStorage.getItem("droppedContainer") as any).filter(
        (item: any) => item.id === id
      )?.[0]?.label
    );
    setPlaceholder(
      JSON.parse(localStorage.getItem("droppedContainer") as any).filter(
        (item: any) => item.id === id
      )?.[0]?.placeholder
    );
  }, [id]);
  const [label, setLabel] = useState<any>(
    JSON.parse(localStorage.getItem("droppedContainer") as any).filter(
      (item: any) => item.id === id
    )?.[0]?.label
  );
  const [placeholder, setPlaceholder] = useState<any>(
    JSON.parse(localStorage.getItem("droppedContainer") as any).filter(
      (item: any) => item.id === id
    )?.[0]?.placeholder
  );
  const [checkedValue, setCheckedValue] = useState<boolean>(
    JSON.parse(localStorage.getItem("droppedContainer") as any).filter(
      (item: any) => item.id === id
    )?.[0]?.validations?.required ?? false
  );

  const editableField = droppedContainer.filter((item: any) => item?.id === id);
  console.log(editableField);

  const handleInputChange = (e: any) => {
    setLabel(e.target.value);
  };
  const handleCheckboxChange = (e: any) => {
    setCheckedValue(e.target.checked);
  };
  const handlePlaceholderChange = (e: any) => {
    setPlaceholder(e.target.value);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const updatedContainer = droppedContainer.map(
      (container: any, index: any) =>
        (container?.type === "input" || container?.type === "textField") &&
        container?.id == id
          ? {
              ...container,
              label: label,
              placeholder: placeholder,
              validations: {
                required: checkedValue,
              },
            }
          : container
    );
    console.log(updatedContainer);
    localStorage.setItem("droppedContainer", JSON.stringify(updatedContainer));
    setDroppedContainer(updatedContainer);
  };
  const inputClassName = "w-[100%] border px-1 py-2 border-black rounded-md";
  return (
    <>
      <div className="w-[100%]">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-start items-start gap-4"
        >
          <div>
            <label htmlFor="header" className="text-[18px] font-[500]">
              Enter the Field label
            </label>
            <input
              className={inputClassName}
              placeholder="Enter the label for text field"
              name="header"
              value={label}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="header" className="text-[18px] font-[500]">
              Enter the Field placeholder
            </label>
            <input
              className={inputClassName}
              placeholder="Enter the placeholder for input field"
              name="header"
              value={placeholder}
              onChange={handlePlaceholderChange}
            />
          </div>
          <div>
            <Checkbox onChange={handleCheckboxChange} checked={checkedValue}>
              Required
            </Checkbox>
          </div>
          <div className="flex flex-row justify-start items-center mt-4">
            <button className="border border-[#10103b] rounded-md px-1 py-2 w-[130px]">
              Cancel
            </button>
            <button
              className="border bg-[#10103b] rounded-md px-1 py-2 text-white w-[130px]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditInputField;
