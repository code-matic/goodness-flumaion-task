import { useEffect } from "react";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import TextAreaInput from "../common/TextAreaInput";
import { SelectInput } from "../common/SelectDropdownInput";
import { PriorityOptions, StatusOptions } from "../../lib/data/options";
import { DatePicker, Form } from "antd";
import { useTaskProvider } from "../../providers/TaskProvider";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

// Task interface
interface Task {
  title: string;
  description: string;
  priority: string;
  status: string;
  startDate: Date;
  endDate: Date;
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
  dayjs.extend(utc);

  useEffect(() => {
    if (initialValues) {
      const formValues = {
        ...initialValues,
        startDate: dayjs(initialValues.startDate).utc(),
        endDate: dayjs(initialValues.endDate).utc(),
      };
      form.setFieldsValue(formValues);
    }
  }, [initialValues, form]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newId = uuidv4();
    const values = await form.validateFields();
    const startDate =
      typeof values.startDate === "string"
        ? values.startDate
        : values.startDate.utc(true).toISOString();
    const endDate =
      typeof values.endDate === "string"
        ? values.endDate
        : values.endDate.utc(true).toISOString();

    if (initialValues) {
      const task = {
        ...values,

        startDate,
        endDate,

        id: initialValues.id,
      };
      updateExistingTask(initialValues.id, task);
      form.resetFields();
      handleCancel();
    } else {
      const task = {
        ...values,
        startDate: values.startDate.utc(true).toISOString(),
        endDate: values.endDate.utc(true).toISOString(),
        id: newId,
      };
      addNewTask(task);
      form.resetFields();
      handleCancel();
    }
  };

  return (
    <div>
      <Form
        autoComplete="on"
        form={form}
        className="w-full"
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
        <div>
        <div className="mb-[6px]">
        <label
          className=" capitalize font-inter !text-sm font-medium text-gray-700"
        >
          Start date
        </label>
      </div>
      <Form.Item
          rules={[
            {
              required: true,
              message: (
                <p className="text-error-600 mt-[6px] text-sm font-normal font-helvetica_neue">
                  Select a start date
                </p>
              ),
            },
          ]}
          name="startDate"
        >
          <DatePicker
            popupClassName="form-date-range"
            className={`flex !w-full flex-1 !h-11 items-center !rounded-lg border border-gray-300
              !px-[14px] !py-[10px] !text-sm   hover:!border-primary focus:!border-primary !bg-white !text-gray-700 placeholder:!text-gray-500`}
            format="DD/MM/YYYY HH:mm"
            showTime={{
              defaultValue: dayjs("00:00:00", "HH:mm"),
            }}
          />
        </Form.Item>
        </div>
       
        <div>
        <div className="mb-[6px]">
        <label
          className=" capitalize font-inter !text-sm font-medium text-gray-700"
        >
          End date
        </label>
      </div>
        <Form.Item
          rules={[
            {
              required: true,
              message: (
                <p className="text-error-600 mt-[6px] text-sm font-normal font-helvetica_neue">
                  Select a end date
                </p>
              ),
              
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || !getFieldValue('startDate')) {
                  return Promise.resolve();
                }
                
                const startDate = dayjs(getFieldValue('startDate'));
                const endDate = dayjs(value);
                
                if (endDate.isBefore(startDate) || endDate.isSame(startDate)) {
                  return Promise.reject(new Error('End date must be after start date'));
                }
                
                return Promise.resolve();
              },
            }),
          ]}
          name="endDate"
        >
          <DatePicker
            popupClassName="form-date-range"
            className={`flex !w-full flex-1 !h-11 items-center !rounded-lg border border-gray-300
              !px-[14px] !py-[10px] !text-sm   hover:!border-primary focus:!border-primary !bg-white !text-gray-700 placeholder:!text-gray-500`}
            format="DD/MM/YYYY HH:mm"
            showTime={{
              defaultValue: dayjs("00:00:00", "HH:mm"),
            }}
          />
        </Form.Item>
        </div>
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
