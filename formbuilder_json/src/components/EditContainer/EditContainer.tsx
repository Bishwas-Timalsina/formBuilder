import React from "react";
import EditHeader from "./components/EditHeader";
import EditDivider from "./components/EditDivider";
import EditInputField from "./components/EditInputField";
import EditRadioBtn from "./components/EditRadioBtn";

const EditContainer = (props: any) => {
  const { editField } = props;
  const renderEditField = () => {
    switch (editField?.type) {
      case "heading":
        return <EditHeader id={editField.id} />;
      case "divider":
        return <EditDivider id={editField.id} />;
      case "input":
        return <EditInputField id={editField.id} />;
      case "radio":
        return <EditRadioBtn id={editField.id} />;
      case "textField":
        return <EditInputField id={editField.id} />;
      default:
        return null;
    }
  };

  if (editField) {
    return (
      <>
        <div className="flex flex-col justify-center items-start w-[100%] gap-4">
          <p className="text-[22px] font-[600]">Edit Field Properties</p>
          {renderEditField()}
        </div>
      </>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-start w-[100%] gap-4">
        <p className="text-[32px] font-[600]">Edit Properties</p>
        <div className="bg-[#707070] px-2 py-4 rounded-md text-white text-[18px] font-[600]">
          Please Select the FormField to edit
        </div>
      </div>
    );
  }
};

export default EditContainer;
