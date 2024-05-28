import React from "react";

const Header = (props: any) => {
  const { formField } = props;
  console.log(formField);
  return (
    <>
      <div className="w-[100%]" style={formField.stlye}>
        <p className="text-[18px] text-center">{formField.name}</p>
      </div>
    </>
  );
};

export default Header;
