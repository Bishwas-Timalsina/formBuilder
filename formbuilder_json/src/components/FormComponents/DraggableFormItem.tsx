import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";

const DraggableFormItem = (props: any) => {
  const { formItem, inputFields,setDroppedContent } = props;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "FORM_ITEM",
      item: formItem,
      end: (item, monitor: DragSourceMonitor<any, any>) => {
        const dropResult = monitor.getDropResult();
        // if (dropResult) {
        // //   setDroppedContent(dropResult)
        // }
      },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [formItem]
  );
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-2"
        ref={drag}
      >
        <div className="text-[34px]">{formItem?.icon}</div>
        <p className="text-black font-[600] text-[14px] text-center">
          {formItem?.name}
        </p>
      </div>
    </>
  );
};

export default DraggableFormItem;
