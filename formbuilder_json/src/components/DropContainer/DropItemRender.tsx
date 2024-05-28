import React from "react";
import { StyledContainer } from "./StyledContainer";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoTrash } from "react-icons/io5";

const DropItemRender = (props: any) => {
  const { container } = props;

  switch (container.type) {
    case "heading":
      return (
        <>
          <StyledContainer>
            <div className="title">
              <p>{container.name}</p>
              <div className="flex flex-row justify-start items-center">
                <PiDotsSixVerticalBold className="text-[28px] font-[700] text-black" />
                <IoTrash className="text-[28px] font-[700] text-black" />
              </div>
            </div>
            <div className="placeHolder" style={container.style}>
              {container.label}
            </div>
          </StyledContainer>
        </>
      );
    case "divider":
      return (
        <StyledContainer>
          <div className="title">
            <p>{container.name}</p>
            <div className="flex flex-row justify-start items-center">
              <PiDotsSixVerticalBold className="text-[28px] font-[700] text-black" />
              <IoTrash className="text-[28px] font-[700] text-black" />
            </div>
          </div>

          <div
            className="h-[1px] bg-black w-[100%] mb-5"
            style={container?.style}
          ></div>
        </StyledContainer>
      );
    case "input": {
      switch (container.inputType) {
        case "text":
          return (
            <StyledContainer>
              <div className="title">
                <p>{container.name}</p>
                <div className="flex flex-row justify-start items-center">
                  <PiDotsSixVerticalBold className="text-[28px] font-[700] text-black" />
                  <IoTrash className="text-[28px] font-[700] text-black" />
                </div>
              </div>
              <div className="inputField">
                <div className="placeHolder">{container.placeholder ?? ""}</div>
              </div>
            </StyledContainer>
          );
        case "email":
          return (
            <StyledContainer>
              <div className="title">
                <p>{container.name}</p>
                <div className="flex flex-row justify-start items-center">
                  <PiDotsSixVerticalBold className="text-[28px] font-[700] text-black" />
                  <IoTrash className="text-[28px] font-[700] text-black" />
                </div>
              </div>
              <div className="inputField">
                <div className="placeHolder">{container.placeholder ?? ""}</div>
              </div>
            </StyledContainer>
          );

        case "number":
          return (
            <StyledContainer>
              <div className="title">
                <p>{container.name}</p>
                <div className="flex flex-row justify-start items-center">
                  <PiDotsSixVerticalBold className="text-[28px] font-[700] text-black" />
                  <IoTrash className="text-[28px] font-[700] text-black" />
                </div>
              </div>
              <div className="inputField">
                <div className="placeHolder">{container.placeholder ?? ""}</div>
              </div>
            </StyledContainer>
          );

        default:
          return <div>Input Field</div>;
      }
    }

    case "radio":
      return (
        <StyledContainer>
          <div className="title">
            <p>{container.name}</p>
            <div className="flex flex-row justify-start items-center">
              <PiDotsSixVerticalBold className="text-[28px] font-[700] text-black" />
              <IoTrash className="text-[28px] font-[700] text-black" />
            </div>
          </div>
          <div className="placeHolder">{container.placeHolder ?? ""}</div>
        </StyledContainer>
      );
    case "textField":
      return (
        <StyledContainer>
          <div className="title">
            <p>{container.name}</p>
            <div className="flex flex-row justify-start items-center">
              <PiDotsSixVerticalBold className="text-[28px] font-[700] text-black" />
              <IoTrash className="text-[28px] font-[700] text-black" />
            </div>
          </div>
          <div className="inputField h-[200px]">
            <div className="placeHolder">{container.placeholder ?? ""}</div>
          </div>
        </StyledContainer>
      );
    default:
      return <div>Null</div>;
  }
  return (
    <>
      <>
        <p>Hello</p>
      </>
    </>
  );
};

export default DropItemRender;
