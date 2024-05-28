import React, { useContext, useState } from "react";
import { FormContext } from "../../../context/Form";
import { Radio } from "antd";

const EditDivider = (props: any) => {
  const { droppedContainer, setDroppedContainer } = useContext(FormContext);
  const { id } = props;

  const [fieldStyle, setFieldStyle] = useState<any>({
    fieldWidth: "",
    fieldColor: "",
  });
  const editableField = droppedContainer.filter((item: any) => item?.id === id);
  console.log(editableField);
  const handleFieldWidthChange = (e: any) => {
    setFieldStyle((prevData: any) => ({
      ...prevData,
      fieldHeight: e.target.value,
    }));
  };
  const handleFieldColorChange = (e: any) => {
    setFieldStyle((prevData: any) => ({
      ...prevData,
      fieldColor: e.target.value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const updatedContainer = droppedContainer.map(
      (container: any, index: any) =>
        container?.type === "divider"
          ? {
              ...container,
              style: {
                ...container.style,
                height: fieldStyle?.fieldHeight,
                backgroundColor: fieldStyle?.fieldColor,
              },
            }
          : container
    );
    setDroppedContainer(updatedContainer);
  };
  return (
    <>
      <div className="w-[100%]">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-start items-start gap-4"
        >
          <div>
            <label htmlFor="textSize" className="text-[18px] font-[500]">
              Enter the Divider Width
            </label>
            <Radio.Group onChange={handleFieldWidthChange} defaultValue="1px">
              <Radio.Button value="1px">1px</Radio.Button>
              <Radio.Button value="2px">2px</Radio.Button>
              <Radio.Button value="3px">3px</Radio.Button>
              <Radio.Button value="4px">4px</Radio.Button>
            </Radio.Group>
          </div>
          <div>
            <label htmlFor="textSize" className="text-[18px] font-[500]">
              Enter the Divider Color
            </label>
            <Radio.Group onChange={handleFieldColorChange} defaultValue="black">
              <Radio.Button value="black" className="bg-black text-white">
                black
              </Radio.Button>
              <Radio.Button value="red" className="bg-[red] text-white">
                red
              </Radio.Button>
              <Radio.Button value="green" className="bg-[green] text-white">
                green
              </Radio.Button>
              <Radio.Button value="blue" className="bg-[blue] text-white">
                blue
              </Radio.Button>
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

export default EditDivider;
