import { getTodoListApi } from '../apis';
import type { TodoType } from '../types';
import TodoCheckbox from './TodoCheckbox';

const TodoListSection = async () => {
  const todoList = await getTodoListApi();
  console.log('[ ㏒ ] todoList =>', todoList);
  const { incompletedTodos, completedTodos } = todoList.reduce<{
    incompletedTodos: TodoType[];
    completedTodos: TodoType[];
  }>(
    (acc, todo) => {
      (todo.isCompleted ? acc.completedTodos : acc.incompletedTodos).push(todo);
      return acc;
    },
    {
      incompletedTodos: [],
      completedTodos: [],
    },
  );

  return (
    <section>
      <div>
        <img src='/svgs/todo_label.svg' alt='todo label' />
        <ul>
          {incompletedTodos.length === 0
            ? 'empty'
            : incompletedTodos.map((incompletedTodo) => (
                <TodoCheckbox key={incompletedTodo.id} {...incompletedTodo} />
              ))}
        </ul>
      </div>
      <ul>
        <img src='/svgs/done_label.svg' alt='done label' />
        {completedTodos.length === 0
          ? 'empty'
          : completedTodos.map((completedTodos) => (
              <TodoCheckbox key={completedTodos.id} {...completedTodos} />
            ))}
      </ul>
    </section>
  );
};

export default TodoListSection;
