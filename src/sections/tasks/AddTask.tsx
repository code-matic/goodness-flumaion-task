import { useState } from "react";
import Button from "../../components/common/Button";
import PlusIcon from "../../components/icons/Plus.icon";
import { Modal } from "antd";
import TaskForm from "../../components/form/Task.form";

const AddTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        icon={<PlusIcon />}
        className="w-[138px] text-sm font-semibold gap-1"
        title="Add task"
        onClick={showModal}
      />
      <Modal
        title={
          <h3 className="text-base font-semibold text-gray-900">Add task</h3>
        }
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="py-4">
          <TaskForm handleCancel={handleCancel} />
        </div>
      </Modal>
    </div>
  );
};

export default AddTask;
