import TextInput from "../../components/common/TextInput";
import SearchIcon from "../../components/icons/Search.icon";
import DateRange from "../../components/common/DateRange";
import { SelectInput } from "../../components/common/SelectDropdownInput";
import { PriorityOptions, StatusOptions } from "../../lib/data/options";

import TaskCard from "../../components/card/Task.card";
import { useTaskProvider } from "../../providers/TaskProvider";
import { Empty } from "antd";
import type { SetStateAction} from "react";
import { useState } from "react";

const TaskList = () => {
  const { tasks } = useTaskProvider();
  const [dateRange, setDateRange] = useState([undefined, undefined]);
  const [priority, setPriority] = useState<string | undefined>();
  const [status, setStatus] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTasks = tasks.filter((task) => {
    // Filter by date range
    const [startDate, endDate] = dateRange;

    if (startDate && endDate) {
      const taskStartDate = new Date(task.date[0]);
      const taskEndDate = new Date(task.date[1]);
      
      const filterStartDate = new Date(startDate);
      filterStartDate.setHours(0, 0, 0, 0);
      
      const filterEndDate = new Date(endDate);
      filterEndDate.setHours(23, 59, 59, 999);
      
      if (taskStartDate < filterStartDate || taskEndDate > filterEndDate) {
        return false;
      }
    }

    // Filter by priority
    if (priority && task.priority !== priority) {
      return false;
    }

    // Filter by status
    if (status && task.status !== status) {
      return false;
    }

    // Filter by search query
    if (
      searchQuery &&
      !task.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const clearFilters = () => {
    setDateRange([undefined, undefined]);
    setPriority(undefined);
    setStatus(undefined);
    setSearchQuery("");
  };

  return (
    <div className="w-full ">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DateRange
          label="Date"
          placeholder={["Start date", "End date"]}
          value={dateRange}
          onChange={(dates: SetStateAction<undefined[]> | null) => {
            if (dates === null) {
              setDateRange([undefined, undefined]);
            } else {
              setDateRange(dates);
            }
          }}
        />
        <SelectInput
          allowClear
          options={PriorityOptions}
          placeHolder="priority"
          label="Priority"
          value={priority}
          onChange={(value) => setPriority(value)}
        />
        <SelectInput
          allowClear
          options={StatusOptions}
          placeHolder="status"
          label="Status"
          value={status}
          onChange={(value) => setStatus(value)}
        />
        <div className="">
          <TextInput
            prefix={<SearchIcon />}
            placeholder="Search"
            label="."
            labelClassName="!text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 py-10">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold text-gray-900">Total:</p>{" "}
          <div className="py-[2px] px-2 rounded-2xl border bg-white border-[#124e66]">
            <p className="text-sm font-medium text-[#124e66] ">
              {filteredTasks.length} task{filteredTasks.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <button onClick={() => clearFilters()}>
          <p className="text-base font-semibold text-[#124e66] underline">
            Clear filters
          </p>
        </button>
      </div>
      {filteredTasks.length === 0 ? (
        <div className="flex justify-center w-full h-[300px] items-center">
          <Empty description="No task found " />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <div className="w-full space-y-6 ">
            {filteredTasks.map((task) => (
              <div key={task.id}>
                <TaskCard data={task} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
