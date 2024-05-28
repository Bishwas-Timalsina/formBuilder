import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../context/Form";
import { Radio } from "antd";

const EditHeader = (props: any) => {
  const { droppedContainer, setDroppedContainer } = useContext(FormContext);

  // const headerValue = droppedContainer.filter(
  //   (container: any) => container.type === "heading"
  // );

  const { id } = props;
  useEffect(() => {
    setHeaderText(
      JSON.parse(localStorage.getItem("droppedContainer") as any).filter(
        (item: any) => item.id === id
      )?.[0]?.label
    );
  }, [id]);

  const [headerText, setHeaderText] = useState<any>(
    JSON.parse(localStorage.getItem("droppedContainer") as any).filter(
      (item: any) => item.id === id
    )?.[0]?.label
  );
  const [fieldStyle, setFieldStyle] = useState<any>({
    fieldSize: "",
    fieldWeight: "",
  });
  const handleInputChange = (e: any) => {
    setHeaderText(e.target.value);
  };
  const handleFieldSizeChange = (e: any) => {
    setFieldStyle((prevData: any) => ({
      ...prevData,
      fieldSize: e.target.value,
    }));
  };
  const handleFieldWeightChange = (e: any) => {
    setFieldStyle((prevData: any) => ({
      ...prevData,
      fieldWeight: e.target.value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const updatedContainer = droppedContainer.map(
      (container: any, index: any) =>
        container?.type === "heading" && container?.id === id
          ? {
              ...container,
              label: headerText,
              style: {
                ...container.style,
                fontSize: fieldStyle?.fieldSize,
                fontWeight: fieldStyle?.fieldWeight,
              },
            }
          : container
    );
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
              Enter the Field Title
            </label>
            <input
              className={inputClassName}
              placeholder="Enter the heading text"
              name="header"
              value={headerText}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="textSize" className="text-[18px] font-[500]">
              Enter the Field Size
            </label>
            <Radio.Group onChange={handleFieldSizeChange} defaultValue="16px">
              <Radio.Button value="12px">12px</Radio.Button>
              <Radio.Button value="14px">14px</Radio.Button>
              <Radio.Button value="16px">16px</Radio.Button>
              <Radio.Button value="18px">18px</Radio.Button>
            </Radio.Group>
          </div>
          <div>
            <label htmlFor="textSize" className="text-[18px] font-[500]">
              Enter the Font Weight
            </label>
            <Radio.Group onChange={handleFieldWeightChange} defaultValue="400">
              <Radio.Button value="400">400</Radio.Button>
              <Radio.Button value="500">500</Radio.Button>
              <Radio.Button value="600">600</Radio.Button>
              <Radio.Button value="800">800</Radio.Button>
            </Radio.Group>
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

export default EditHeader;
