import { BsTextareaResize } from "react-icons/bs";
import { FaHeading } from "react-icons/fa";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { PiTextAaBold } from "react-icons/pi";
import { RiNumber1 } from "react-icons/ri";
import { RxDividerHorizontal } from "react-icons/rx";

export const FormattingItems = [
  {
    type: "heading",
    name: "Heading",
    label: "This is the heading",
    icon: <FaHeading />,
    style: {},
  },
  {
    type: "divider",
    name: "Divider",
    icon: <RxDividerHorizontal />,
    style: {},
  },
];

export const InputItems = [
  {
    type: "input",
    name: "Text",
    label: "Text",
    placeholder: "Enter the text",
    validations: {},
    inputType: "text",
    icon: <PiTextAaBold />,
    style: {},
  },

  {
    type: "input",
    name: "Email",
    label: "Email",
    placeholder: "Enter your email",
    validations: {},
    inputType: "email",
    icon: <MdAlternateEmail />,
    style: {},
  },
  {
    type: "input",
    name: "Number",
    label: "Number",
    placeholder: "Enter a number",
    validations: {},
    inputType: "number",
    icon: <RiNumber1 />,
    style: {},
  },
  {
    type: "radio",
    name: "Radio Buttons",
    label: "Radio Button",
    icon: <IoMdRadioButtonOn />,
    options: ["Option 2", "Option 1"],
  },
  {
    type: "textField",
    name: "Textarea",
    label: "Text Area",
    placeholder: "Enter the Description",
    validation: {},
    icon: <BsTextareaResize />,
    style: {},
  },
];
