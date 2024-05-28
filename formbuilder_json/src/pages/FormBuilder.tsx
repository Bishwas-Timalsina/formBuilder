import { useContext, useEffect, useState } from "react";
import FormComponent from "../components/FormComponents/FormComponent";
import DropContainer from "../components/DropContainer/DropContainer";
import EditContainer from "../components/EditContainer/EditContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Preview from "../components/PreviewContainer/Preview";
import { Drawer } from "antd";
import { FormContext } from "../context/Form";

const FormBuilder = () => {
  const [droppedContent, setDroppedContent] = useState<any>();
  const [editField, setEditField] = useState<any>(null);
  const { openDrawer, setOpenDrawer } = useContext(FormContext);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="ml-48 mr-4 grid grid-cols-12 justify-start items-start gap-4">
          <div className="col-span-2">
            <FormComponent setDroppedContent={setDroppedContent} />
          </div>
          <div className="col-span-8">
            <DropContainer setEditField={setEditField} />
          </div>
          <div className="col-span-2 w-[100%]">
            <EditContainer editField={editField} />
          </div>
        </div>
        <Drawer
          open={openDrawer}
          destroyOnClose={false}
          onClose={() => setOpenDrawer(false)}
          title={<p className="text-[24px] font-[600]">Form Preview</p>}
        >
          <Preview />
        </Drawer>
      </DndProvider>
    </>
  );
};

export default FormBuilder;
