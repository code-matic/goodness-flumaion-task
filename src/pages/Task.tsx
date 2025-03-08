import TaskList from "../sections/tasks";
import AddTask from "../sections/tasks/AddTask";

const Task = () => {
  return (
    <div className="pt-12 pb-20">
      <div className="flex items-center justify-between w-full gap-5">
        <h3 className="text-[25px] text-gray-900 font-semibold">My Tasks</h3>
        <div className="flex items-center gap-3">
          <AddTask />
        </div>
      </div>
      <div className="pt-6">
        <TaskList />
      </div>
    </div>
  );
};

export default Task;
