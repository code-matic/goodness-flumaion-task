import { useState } from "react";
import { Modal } from "antd";
import TaskForm from "../../components/form/Task.form";
import EditIcon from "../../components/icons/Edit.icon";
import type { TaskData } from "../../utils/taskManagement";

const EditTask = ({
    data
}: {
    data: TaskData
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button onClick={showModal}><EditIcon /> </button>
      <Modal
        title={
          <h3 className="text-base font-semibold text-gray-900">Edit task</h3>
        }
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="py-4">
          <TaskForm handleCancel={handleCancel} initialValues={data} />
        </div>
      </Modal>
    </div>
  );
};

export default EditTask;
