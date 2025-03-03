import { Task } from "./Task"

type Props = {
    taskList: string[]
    deleteTask: (index:number) => void
}

export const TaskList = ({taskList, deleteTask}: Props) => {
  return (
    <ul className="taskList">
        {taskList.map((task,index) => (
            <Task 
            key={index} 
            task={task} 
            deleteTask={deleteTask}
            index={index}
            />
        ))}
    </ul>
  )
}