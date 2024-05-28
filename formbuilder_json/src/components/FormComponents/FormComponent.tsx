import React from "react";
import { FormattingItems, InputItems } from "./FormItem";
import { DragSourceMonitor, useDrag } from "react-dnd";
import DraggableFormItem from "./DraggableFormItem";

const FormComponent = (props:any) => {
  const{setDroppedContent}=props
  const mainContainer = "flex flex-col justify-center w-[100%] gap-4";
  const inputContainer = "grid grid-cols-12 justify-start items-center gap-4";
  const inputFields =
    "col-span-6 w-[100%] px-2 border border-[brown] rounded-md flex flex-col justify-center items-center gap-3 py-4 cursor-pointer";

  return (
    <>
      <div className="h-[89vh] shadow-lg px-4 py-2">
        <div className={mainContainer}>
          <p className="text-[14px] font-[600]">Formatting Items</p>
          <div className={inputContainer}>
            {FormattingItems?.map((formatItem: any, index: any) => (
              <div className={inputFields} key={index}>
                <DraggableFormItem
                  formItem={formatItem}
                  key={index}
                  inputField={inputFields}
                  setDroppedContent={setDroppedContent}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={mainContainer}>
          <p className="text-[14px] font-[600]">Input Fields</p>
          <div className={inputContainer}>
            {InputItems?.map((inputItem: any, index: any) => (
              <div className={inputFields} key={index}>
                <DraggableFormItem
                  formItem={inputItem}
                  key={index}
                  inputField={inputFields}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
