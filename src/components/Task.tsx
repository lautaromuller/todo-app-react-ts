type Props = {
  task: string
  deleteTask: (index:number) => void
  index: number
}

export const Task = ({ task, deleteTask, index}: Props) => {
  return (
    <li className="task">
      <span>{task}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  )
}