import DeleteTask from "../../sections/tasks/DeleteTask";
import EditTask from "../../sections/tasks/EditTask";
import { formatDate } from "../../utils/formatDate";
import type { TaskData } from "../../utils/taskManagement";
import Tag from "../common/Tag";

const TaskCard = ({ data }: { data: TaskData }) => {
 
  return (
    <div className="flex items-start justify-between w-full gap-5 px-3 py-6 border border-gray-200 sm:p-6 sm:gap-10 lg:gap-20 rounded-xl">
      <div>
        <p className="text-base font-semibold text-[#101828] capitalize">
          {data.title}
        </p>
        <p className="sm:text-base text-sm text-[#475467] pt-2 pb-3 font-[300]">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <p className="text-sm text-[#475467] font-[300]">
            {formatDate(data.date[0])} - {formatDate(data.date[1])}
          </p>{" "}
          <Tag type={data.status} />
          <Tag type={data.priority} />
        </div>
      </div>
      <div className="flex gap-5">
        <EditTask data={data} /> <DeleteTask data={data} />
      </div>
    </div>
  );
};

export default TaskCard;
