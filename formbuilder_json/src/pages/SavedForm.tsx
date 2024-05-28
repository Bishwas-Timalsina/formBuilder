import { Modal } from "antd";
import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import AddFormModal from "../components/Atomic/AddFormModal";

const SavedForm = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleAddClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div className="h-[calc(100vh-98px)] bg-red-200 flex flex-row justify-center items-center gap-2">
        <div
          className="bg-white rounded-md px-2 py-1 flex flex-col gap-2 text-[22px] font-[600] justify-center items-center hover:bg-gray-300 cursor-pointer shadow-md h-[124px]"
          onClick={handleAddClick}
        >
          <IoAdd />
          New Form
        </div>
        <div className="bg-white rounded-md px-2 py-1 flex flex-col gap-2 text-[22px] font-[600] justify-center items-center hover:bg-gray-300 cursor-pointer shadow-md h-[124px]">
          <FaFileAlt />
          Saved Form
        </div>
      </div>
      <Modal
        title={
          <p className="text-center font-[600] text-[18px]">Create Form</p>
        }
        open={modalOpen}
        centered
        footer={false}
        maskClosable={true}
        destroyOnClose
        closable={true}
        onCancel={() => {
          setModalOpen(false);
        }}
      >
        <AddFormModal setModalOpen={setModalOpen} />
      </Modal>
    </>
  );
};

export default SavedForm;
