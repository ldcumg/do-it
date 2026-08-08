'use client';

import { useGetTodoListQuery } from '@/src/hooks/tanstack';
import type { TodoType } from '../../types';
import TodoCheckbox from './TodoCheckbox';

const TodoListSection = () => {
  const { data: todoList, isPending, isError, error } = useGetTodoListQuery();

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
    <section className='flex flex-col gap-[48px] mt-[24px] sm:mt-[40px] lg:flex-row lg:gap-[24px]'>
      <div className='flex-1'>
        <img
          className='mb-[16px]'
          src='/images/todo_label.svg'
          alt='todo label'
        />
        <div>
          {incompletedTodos.length === 0 ? (
            <div className='flex flex-col justify-center items-center '>
              <picture>
                <source
                  media='(min-width: 768px)'
                  srcSet='/images/empty_todo_l.svg'
                />
                <img src='/images/empty_todo_s.svg' alt='empty todo' />
              </picture>
              <div className='flex flex-col items-center text-slate-400 font-bold text-16'>
                <div>할 일이 없어요.</div>
                <div>TODO를 새롭게 추가해주세요!</div>
              </div>
            </div>
          ) : (
            <ul className='flex flex-col gap-[16px]'>
              {incompletedTodos.map((incompletedTodo) => (
                <TodoCheckbox key={incompletedTodo.id} {...incompletedTodo} />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='flex-1'>
        <div>
          <img
            className='mb-[16px]'
            src='/images/done_label.svg'
            alt='done label'
          />
          {completedTodos.length === 0 ? (
            <div className='flex flex-col justify-center items-center mt-[16px]'>
              <picture>
                <source
                  media='(min-width: 768px)'
                  srcSet='/images/empty_done_l.svg'
                />
                <img src='/images/empty_done_s.svg' alt='empty done' />
              </picture>
              <div className='flex flex-col items-center text-slate-400 font-bold text-16'>
                <div>아직 다 한 일이 없어요.</div>
                <div>해야 할 일을 체크해보세요!</div>
              </div>
            </div>
          ) : (
            <ul className='flex flex-col gap-[16px]'>
              {completedTodos.map((completedTodos) => (
                <TodoCheckbox key={completedTodos.id} {...completedTodos} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TodoListSection;
