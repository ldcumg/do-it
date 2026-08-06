'use client';

import { useGetTodoListQuery } from '@/src/hooks/tanstack';
import type { TodoType } from '../../types';
import TodoCheckbox from './TodoCheckbox';

const TodoListSection = () => {
  const { data: todoList, isPending, isError, error } = useGetTodoListQuery();
  console.log('[ ㏒ ] todoList =>', todoList);

  if (isPending) return <section>할 일 목록을 불러오는 중입니다.</section>;

  if (isError) throw new Error(error.message);

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
        <img src='/images/todo_label.svg' alt='todo label' />
        <ul>
          {incompletedTodos.length === 0
            ? 'empty'
            : incompletedTodos.map((incompletedTodo) => (
                <TodoCheckbox key={incompletedTodo.id} {...incompletedTodo} />
              ))}
        </ul>
      </div>
      <ul>
        <img src='/images/done_label.svg' alt='done label' />
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
