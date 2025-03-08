import { useState } from "react";
import { Modal } from "antd";
import DeleteIcon from "../../components/icons/Delete.icon";
import type { TaskData } from "../../utils/taskManagement";
import Button from "../../components/common/Button";
import { useTaskProvider } from "../../providers/TaskProvider";

const DeleteTask = ({
    data
}: {
    data: TaskData
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { removeTask, isLoading } = useTaskProvider();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleRemoveTask = () => {
    removeTask(data.id)
    handleCancel()
  } 
  
  return (
    <div>
      
      <button onClick={showModal}><DeleteIcon /></button>
      <Modal
        title={
          <h3 className="text-base font-semibold text-gray-900">Delete task</h3>
        }
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={400}
      >
        <div className="pt-4 ">
        <p className="text-base text-center text-[#475467] ">
          Are you sure you want to delete {data.title} task?
        </p>
        <div className="flex items-center justify-between w-full gap-5 pt-4">
          <Button
            title="No"
            intent="secondary"
            className="max-w-[80px]"
            onClick={handleCancel}
          />
          <Button
            title="Yes"
            onClick={handleRemoveTask}
            className="bg-red-900 border-red-900 max-w-20 "
            loading={isLoading}
          />
        </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteTask;
