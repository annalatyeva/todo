import {useState} from "react";
import {Form} from "../components/Form/Form";
import {Header} from "../components/Header/Header";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDo} from "../models/todo-item";

export const ToDoListPage = () => {
	const [todos, setTodos] = useState<ToDo[]>([
		{
			id: 0,
			text: "Первая задача",
			isDone: false,
		},
		{
			id: 1,
			text: "Вторая задача",
			isDone: true,
		},
		{
			id: 3,
			text: "Третья задача",
			isDone: false,
		},
		{
			id: 4,
			text: "Четвертая задача",
			isDone: true,
		},
	]);

	const createNewToDo = (text: string) => {
		let newToDo: ToDo = {
			id: todos.length,
			text: text,
			isDone: false,
		};

		setTodos([...todos, newToDo]);
	};

	return (
		<>
			<Header />
			<Form createNewToDo={createNewToDo} />
			<ToDoList todos={todos} />
		</>
	);
};
