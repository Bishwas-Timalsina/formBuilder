import React, { useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import DropItemRender from "./DropItemRender";
import { IoAdd } from "react-icons/io5";
import { FormContext } from "../../context/Form";
import { generateID } from "../../utils/generateID";

const DropContainer = (props: any) => {
  const { setEditField } = props;
  const { droppedContainer, setDroppedContainer, setOpenDrawer } =
    useContext(FormContext);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "FORM_ITEM",
    drop: (item, monitor) => {
      handleDropContainer(item);
      const droppedContainer = monitor.getDropResult();
      // layout(); // Call the layout function
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const handleDropContainer = (item: any) => {
    setDroppedContainer((prevData: any) => {
      const newItem = { ...item, id: generateID() };
      const updatedData = [...prevData, newItem];
      localStorage.setItem("droppedContainer", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const button =
    "px-2 py-4 border w-[120px] border-blue-950 rounded-md font-[600]";

  const handleFieldClick = (field: any) => {
    const editField = JSON.parse(
      localStorage.getItem("droppedContainer") as any
    ).filter((item: any) => item?.id === field.id);
    setEditField(editField[0]);
  };
  useEffect(() => {
    const savedContainer = localStorage.getItem("droppedContainer");
    if (savedContainer) {
      setDroppedContainer(JSON.parse(savedContainer));
    }
  }, [setDroppedContainer]);
  return (
    <>
      <div className="flex flex-col justify-start items-start mt-2 gap-4">
        <div className="flex flex-row justify-between items-center w-[100%]">
          <div>Form Builder</div>
          <div className="flex gap-4 justify-between items-center">
            <button className={`${button}`}>Reset</button>

            <button
              className={`${button} bg-blue-950 text-white`}
              onClick={() => setOpenDrawer(true)}
            >
              Save Form
            </button>
          </div>
        </div>
        <div
          ref={drop}
          className="flex flex-col h-[100%] border border-blue-950 w-[100%] rounded-md px-2 py-2"
        >
          <p className="text-center text-[26px] font-[600]">
            {localStorage.getItem("formName")}
          </p>
          <div className="flex flex-col justify-center items-center w-[100%] gap-2 ">
            {droppedContainer.length > 0 &&
              droppedContainer?.map((container: any, index: number) => (
                <>
                  <div
                    key={index}
                    className="w-[100%] border-[black] hover:border-[#51d171] border rounded-md hover:border-[2px] cursor-pointer"
                    onClick={() => handleFieldClick(container)}
                  >
                    <DropItemRender container={container} />
                  </div>
                </>
              ))}

            <div className="flex flex-col justify-center items-center w-[100%] bg-red-100 px-2 py-8">
              <IoAdd className="text-[48px] font-[500]" />
              <p className="text-[22px] font-[600]">Drop Form Fields Here</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default DropContainer;
