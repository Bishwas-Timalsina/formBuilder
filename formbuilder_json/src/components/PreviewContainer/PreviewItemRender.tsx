import React from "react";
import { StyledContainer } from "./Style";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoTrash } from "react-icons/io5";

const PreviewItemRender = (props: any) => {
  const { item: container } = props;
  switch (container.type) {
    case "heading":
      return (
        <>
          <StyledContainer>
            <div className="placeHolder" style={container.style}>
              {container.label}
            </div>
          </StyledContainer>
        </>
      );
    case "divider":
      return (
        <StyledContainer>
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
            <p>{container.label}</p>
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
          <div className="inputField h-[200px]">
            <div className="placeHolder">{container.placeholder ?? ""}</div>
          </div>
        </StyledContainer>
      );
    default:
      return <div>Null</div>;
  }
};

export default PreviewItemRender;
