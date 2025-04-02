import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { TaskList } from "../types/TaskList";
import { Button } from "../components/ui/button";

const TodoList = () => {
  const [tasks, setTasks] = useState<TaskList[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  //Função para adicionar uma nova tarefa
  const addTask = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página
    if (!newTask.trim()) return; // Não adiciona se o input estiver vazio
  };
  const task: TaskList = {
    id: crypto.randomUUID(),
    task: newTask,
  };
  setTasks([...tasks, task]);
  setNewTask("");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="flex items-center justify-between border rounded-lg p-2  w-[600px] ">
        <h1>- TodoListAplication</h1>
        <form onSubmit={addTask}>
          <Input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            id="inputTask"
            placeholder="Digite sua tarefa: "
            className="w-[300px]"
          />
          <Button>Adicionar</Button>
        </form>
      </div>
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa adicionada</p>
      ) : (
        <div id="tasksList" className="border w-[600px] h-[500px]">
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.task}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
