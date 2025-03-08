import type { ReactNode} from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type {
  TaskData} from "../utils/taskManagement";
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../utils/taskManagement";
import { useMessage } from "./MessageProvider";

interface TaskContextType {
  tasks: TaskData[];
  addNewTask: (task: TaskData) => void;
  updateExistingTask: (taskId: string, updatedTask: Partial<TaskData>) => void;
  removeTask: (taskId: string) => void;
  isLoading: boolean;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {successMessage, errorMessage} = useMessage()

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const addNewTask = async (task: TaskData): Promise<void> => {
    setIsLoading(true);
    try {
      const updatedTasks = addTask(task);
      setTasks(updatedTasks);
      successMessage({
        content: "New task successfully added"
      })
    } catch (error) {
      errorMessage({
        content: `Error adding task: ${error}`
      })
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateExistingTask = async (taskId: string, updatedTask: Partial<TaskData>): Promise<void> => {
    setIsLoading(true);
    try {
      const updatedTasks = updateTask(taskId, updatedTask);
      setTasks(updatedTasks);
      successMessage({
        content: "Task successfully updated"
      })
    } catch (error) {
      errorMessage({
        content: `Error updating task: ${error}`
      })
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const removeTask = async (taskId: string): Promise<void> => {
    setIsLoading(true);
    try {
      const updatedTasks = deleteTask(taskId);
      setTasks(updatedTasks);
      successMessage({
        content: "Task successfully removed"
      })
    } catch (error) {
      errorMessage({
        content: `Error removing task: ${error}`
      })
      throw error;
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <TaskContext.Provider
      value={{
        tasks,
        addNewTask,
        updateExistingTask,
        removeTask,
        isLoading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskProvider() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskProvider must be used within a TaskProvider");
  }
  return context;
}
