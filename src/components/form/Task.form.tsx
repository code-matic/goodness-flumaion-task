import { useEffect } from "react";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import TextAreaInput from "../common/TextAreaInput";
import { SelectInput } from "../common/SelectDropdownInput";
import { PriorityOptions, StatusOptions } from "../../lib/data/options";
import DateRange from "../common/DateRange";
import { Form } from "antd";
import { useTaskProvider } from "../../providers/TaskProvider";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

// Task interface
interface Task {
  title: string;
  description: string;
  priority: string;
  status: string;
  date: [Date, Date];
  id: string;
}

interface TaskFormProps {
  initialValues?: Task;
  handleCancel: () => void;
  buttonTitle?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialValues, handleCancel }) => {
  const [form] = Form.useForm();
  const { addNewTask, isLoading, updateExistingTask } = useTaskProvider();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newId = uuidv4();
    const values = await form.validateFields();
    const startDate = typeof values.date[0] === 'string' ? values.date[0] : values.date[0].toDate();
    const endDate = typeof values.date[1] === 'string' ? values.date[1] : values.date[1].toDate();
  
    if (initialValues) {
      const task = {
        ...values,
        date: [
          startDate,
          endDate, 
        ],
        id: initialValues.id,
      };
      updateExistingTask(initialValues.id, task);
      form.resetFields();
      handleCancel()
    } else {
      const task = {
        ...values,
        date: [values.date[0].toDate(), values.date[1].toDate()],
  
        id: newId,
      };
      addNewTask(task);
      form.resetFields();
      handleCancel()
    }
    
  };

  return (
    <div>
      <Form
        autoComplete="on"
        form={form}
        className="w-full"
        initialValues={initialValues}
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter title",
            },
          ]}
        >
          <TextInput
            label="Title*"
            className="w-full placeholder:!text-sm !text-sm"
            placeholder="Enter title"
          />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please enter description",
            },
          ]}
        >
          <TextAreaInput
            label="Description*"
            className="w-full placeholder:!text-sm !text-sm"
            placeholder="Enter Description"
          />
        </Form.Item>

        <Form.Item
          name="priority"
          rules={[
            {
              required: true,
              message: "Select priority",
            },
          ]}
        >
          <SelectInput
            label="Priority*"
            options={PriorityOptions}
            className="w-full placeholder:!text-sm !text-sm"
            placeHolder="Select priority"
          />
        </Form.Item>
        <Form.Item
          name="status"
          rules={[
            {
              required: true,
              message: "Select status",
            },
          ]}
        >
          <SelectInput
            label="Status*"
            options={StatusOptions}
            className="w-full placeholder:!text-sm !text-sm"
            placeHolder="Select status"
          />
        </Form.Item>
        <Form.Item
          name="date"
          rules={[
            {
              required: true,
              message: "Select date and time",
            },
          ]}
        >
          <DateRange
            defaultValue={
              initialValues
                ? [
                    dayjs(initialValues?.date[0], "YYYY-MM-DD HH:mm"),
                    dayjs(initialValues?.date[1], "YYYY-MM-DD HH:mm"),
                  ]
                : undefined
            }
            label="Date and time*"
            popClassName="form-date-range"
            className="w-full placeholder:!text-sm !text-sm"
            placeholder={["Start date", "End date"]}
            showTime={{ format: "HH:mm" }}
          />
        </Form.Item>
        <div className="flex items-center justify-between w-full gap-5 pt-2">
          <Button
            title="Cancel"
            intent="secondary"
            className="max-w-[150px]"
            onClick={handleCancel}
          />
          <Button
            type="submit"
            title={initialValues ? "Update" : "Add"}
            onClick={handleSubmit}
            className="max-w-[150px]"
            loading={isLoading}
          />
        </div>
      </Form>
    </div>
  );
};

export default TaskForm;
