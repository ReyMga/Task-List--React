import Todo from './Todo';

const TodoList = ({filteredTodos}) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <Todo
              todo={todo}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;