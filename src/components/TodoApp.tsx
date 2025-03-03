import { useState } from 'react'
import { TaskList } from './TaskList'

export const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAdd = () => {
        if (newTask.trim() === '') return
        setTaskList([...taskList, newTask])
        setNewTask('')
    }

    const handleDelete = (index: number) => {
        const newTaskList = taskList.filter((_, i) => i !== index)
        setTaskList(newTaskList)
    }

    return (
        <>
            <h1>Todo App</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={handleAdd}>Add task</button>
            <TaskList
                taskList={taskList}
                deleteTask={handleDelete}
            />
        </>
    )
}