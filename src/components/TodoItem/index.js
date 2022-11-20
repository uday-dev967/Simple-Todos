import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item">
      <div className="todo-container">
        <p className="todo">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
