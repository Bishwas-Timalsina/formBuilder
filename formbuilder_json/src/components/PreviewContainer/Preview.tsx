import React, { useContext, useState } from "react";
import { FormContext } from "../../context/Form";
import PreviewItemRender from "./PreviewItemRender";
import axios from "axios";
import { Modal } from "antd";
import { IoClose } from "react-icons/io5";

const Preview = () => {
  const { droppedContainer, openDrawer } = useContext(FormContext);
  const formName = localStorage.getItem("formName");
  const [modalOpen, setModalOpen] = useState<any>(false);
  const [iFrame, setIframe] = useState<string>("");

  const handleGenerateClick = async () => {
    console.log(droppedContainer);
    const formData = {
      formName: formName,
      formData: droppedContainer,
    };
    const response = await axios.post(
      "http://localhost:8000/api/v1/form/add",
      formData
    );
    if (response?.status === 200) {
      setModalOpen(true);
      const data = response?.data;
      console.log(data?.iframe);
      setIframe(data?.iFrame);
    }
  };
  return (
    <>
      <div className="border border-black rounded-md px-2 py-2 flex flex-col justify-center w-[100%]">
        <p className="text-center font-[600] text-[24px]">{formName}</p>
        {droppedContainer?.map((container: any, index: any) => (
          <PreviewItemRender item={container} />
        ))}
        <div className="px-2 flex gap-3">
          <button className="bg-blue-950 text-white text-[18px] font-[500] px-2 py-1 rounded-md">
            Submit
          </button>
          <button className="border border-blue-950 text-[18px] font-[500] px-2 py-1 rounded-md">
            Reset
          </button>
        </div>
      </div>
      <button
        className="bg-blue-950 text-white text-[18px] font-[500] px-2 py-1 rounded-md mx-auto w-[100%] mt-5"
        onClick={handleGenerateClick}
      >
        Save & Generate Code
      </button>
      <Modal
        open={modalOpen}
        closable={true}
        footer={false}
        className=""
        closeIcon={<></>}
        destroyOnClose
        maskClosable
      >
        <div className="flex flex-col justify-center items-center px-4 py-2">
          <div className="flex flex-row justify-between items-center w-[100%]">
            <p className="text-center font-[500] text-[16px] w-[100%]">
              Copy the code to use in your website
            </p>
            <div onClick={() => setModalOpen(false)}>
              <IoClose className="text-[18px] font-[600]" />
            </div>
          </div>
          <input
            contentEditable={false}
            value={iFrame}
            disabled
            className="w-[100%] px-4 py-4 border border-[black] rounded-md mx-1 my-4"
          />
        </div>
      </Modal>
    </>
  );
};

export default Preview;
