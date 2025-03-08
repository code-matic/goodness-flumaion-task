const TASK_STORAGE_KEY = "gltask";

export interface TaskData {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  date: [Date, Date];
}

const getStorageData = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const setStorageData = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const addTask = (task: TaskData): TaskData[] => {

    const existingTasks = getStorageData(TASK_STORAGE_KEY) || [];

    const updatedTasks = [task, ...existingTasks];

    setStorageData(TASK_STORAGE_KEY, updatedTasks);

    return updatedTasks;
 
};

export const getTasks = (): TaskData[] => {
  const taskData = getStorageData(TASK_STORAGE_KEY);
  return taskData || [];
};

export const updateTask = (
  taskId: string,
  updatedTask: Partial<TaskData>
): TaskData[] => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...updatedTask,
    };

    setStorageData(TASK_STORAGE_KEY, tasks);
  }

  return tasks;
};

export const deleteTask = (taskId: string): TaskData[] => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);

  setStorageData(TASK_STORAGE_KEY, updatedTasks);
  return updatedTasks;
};
