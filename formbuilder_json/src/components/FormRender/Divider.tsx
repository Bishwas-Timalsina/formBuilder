import React from "react";

const Divider = (props: any) => {
  const { formField } = props;

  return (
    <>
      <div
        className="h-[1px] bg-black w-[100%] mb-5"
        style={formField?.style}
      ></div>
    </>
  );
};

export default Divider;
